import {useState, useEffect} from 'react'
import {utils} from 'ethers'

import position from '../utils/position';
import useContractsStore from '../store/useContractsStore'  
import useWalletStore from '../store/useWalletStore'

import { launchToast, dismissToast, warningToast } from '../utils/toastUtils';
import getBalances from '../utils/getBalances';

import moment from 'moment';

export default function useStaking() {
    const {token, staking7Days, staking14Days, staking30Days, staking60Days} = useContractsStore();
    const {address, network, wallet, setBalanceRANDOM, setBalanceETH} = useWalletStore();
    const [blockReward, setBlockReward] = useState(5); // 5% APY Reward Default
    const [apyRate, setAPYRate] = useState(5); // 5% APY Reward Default
    const [stakingShort, setStakingShort] = useState(""); // 7 Days staking Default 
    const [stakeTime, setStakeTime] = useState(""); // 7 Days staking Default 
    const [stakingContractNr, setStakingContractNr] = useState(1); // First Staking Contract Default
    const [stakingContract, setStakingContract] = useState({}); // Selected Staking Contract 
    const [stakingContractAllowance, setStakingContractAllowance] = useState();
    const [stakedInContract, setStakedInContract] = useState(0);
    const [stakingTotalDaysLocked, setStakingTotalDaysLocked] = useState(0);
    const [stakingMaturityDate, setStakingMaturityDate] = useState(0);
    const [stakingPreMaturityDate, setStakingPreMaturityDate] = useState(0);
    const [stakingMatured, setStakingMatured] = useState(false);
    
    const setStake = (contractNr) => {
      let rate, days, contract, reward;
      if(contractNr === 1) { rate = 5; days = 7; reward = 9; contract = staking7Days; }
      if(contractNr === 2) { rate = 11; days = 14; reward = 42; contract = staking14Days; }
      if(contractNr === 3) { rate = 25; days = 30; reward = 205; contract = staking30Days; }
      if(contractNr === 4) { rate = 55; days = 60; reward = 904; contract = staking60Days; }
      const stakingLength = moment().add(days, 'days').format('L') + " " + moment().add(days, 'days').format('LTS');
      const stakingShort = moment().add(days, 'days').calendar();
      console.log('stakingLength',stakingLength)
      setStakingTotalDaysLocked(days);
      setBlockReward(reward);
      setStakingContractNr(contractNr);
      setStakingContract(contract);
      setStakeTime(stakingLength);
      setStakingShort(stakingShort);
      setAPYRate(rate);
      checkAllowance(contract)
      checkStakeAndMaturity(contract)
      listenForStaking(contract)
      listenForWithdrawals(contract)
      console.log('stakingContract', stakingContract)
    }
    console.log('stakingContractAllowance', stakingContractAllowance)

    const listenForStaking = (stakingContract) => {
        try {
            const myAddress = utils.getAddress(wallet.provider.selectedAddress);
            const filter = stakingContract.filters.Staked(token.address, myAddress, null)

            stakingContract.on(filter, (from, to, value, event) => {
                console.log('from', from);
                console.log('to', to);
                console.log('value', value);
                console.log('event', event);
                const parsedAmount = utils.formatEther(value);
                console.log('parsedAmount',parsedAmount)
                checkStakeAndMaturity(stakingContract);
                getBalances(address, setBalanceRANDOM, setBalanceETH, token);
                launchToast(`${parsedAmount} RANDOM staked successfully!`, event.blockHash, 5000);
            })
        } catch (error) {
          console.log('error', error)      
        }
    }

    const listenForWithdrawals = (stakingContract) => {
        try {
            
            const myAddress = utils.getAddress(wallet.provider.selectedAddress);
            const filter = stakingContract.filters.PaidOut(token.address, myAddress, null, null)

            stakingContract.on(filter, (tokenAddress, staker, value, reward, event) => {
                console.log('tokenAddress', tokenAddress);
                console.log('staker', staker);
                console.log('value', value);
                console.log('reward', reward);
                console.log('event', event);
                const parsedAmount = utils.formatEther(value);
                const parsedReward = utils.formatEther(reward);
                console.log('parsedAmount',parsedAmount)
                checkStakeAndMaturity(stakingContract);
                getBalances(address, setBalanceRANDOM, setBalanceETH, token);
                launchToast(`${parsedAmount} RANDOM withdrawn successfully! Total cumulated reward is ${parsedReward} `, event.blockHash, 5000);
            })
        } catch (error) {
          console.log('error', error)      
        }
    }

    const checkAllowance = async (stakingContract) => {
        try {
            if(wallet.provider?.selectedAddress?.length !== 42) return;
            const allowances = (await token.allowance(wallet.provider.selectedAddress, stakingContract.address)).toString();
            console.log('allowances', allowances);
            setStakingContractAllowance(allowances);
        } catch (error) { 
            console.log('error', error)
            setStakingContractAllowance(0)
        }
    }

    const checkStakeAndMaturity = async (stakingContract) => {
        try {
            if(wallet.provider?.selectedAddress?.length !== 42) return;
            const staked = await stakingContract.userDeposits(wallet.provider.selectedAddress);
            const prematurity = parseInt(staked[1]) == 0 ? 0 : moment(parseInt(staked[1]) * 1000).format('L') + " " + moment(parseInt(staked[1]) * 1000).format('LTS');
            const maturity = parseInt(staked[2]) == 0 ? 0 : moment(parseInt(staked[2]) * 1000).format('L') + " " + moment(parseInt(staked[1]) * 1000).format('LTS');
            const totalStake = Number(utils.formatEther(staked[0]).substring(0, position(18, staked[0])))
            const stakingMatured = moment().isAfter(parseInt(staked[2]) * 1000);
            console.log('stakingMatured',stakingMatured)
            console.log('prematurity', prematurity);
            console.log('maturity', maturity);
            console.log('staked', staked);
            console.log('totalStake', totalStake);
            setStakingMatured(stakingMatured);
            setStakingPreMaturityDate(prematurity);
            setStakingMaturityDate(maturity);
            setStakedInContract(totalStake);
        } catch (error) { 
            console.log('error', error)
            // setStakedInContract(0);
        }
    }

    useEffect(() => {
        if(address == null || network == null) return;
        setStake(1);
    }, [network, address])

    return {
        blockReward,
        stakingShort,
        stakingMatured,
        stakingTotalDaysLocked,
        stakingPreMaturityDate,
        stakingMaturityDate,
        apyRate,
        stakeTime,
        stakingContract,
        stakingContractNr,
        stakingContractAllowance,
        stakedInContract,
        setStake
    }
}
