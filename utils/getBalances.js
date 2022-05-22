import { utils } from 'ethers';
import position from '../utils/position';
import readProvider from '../utils/readProvider';
  
// import useWalletStore from '../store/useWalletStore'
// import useContractsStore from '../store/useContractsStore'

const getBalances = async (address, setBalanceRANDOM, setBalanceETH, token) => {
    // const { address, setBalanceRANDOM, setBalanceETH } = useWalletStore();
    // const { token } = useContractsStore();
    try {
      const eth = (await readProvider().getBalance(address)).toString();
      const ethBalance = (Number(eth) / 1000000000000000000).toString().substring(0, 6).toLocaleString('us-EN')
      console.log('eth', eth)
      console.log('ethBalance', ethBalance)
      setBalanceETH(ethBalance);
    
      const tokenBalance = await token.balanceOf(address).then(res => res.toString());
      const tokenReadableBalance = tokenBalance && tokenBalance.length > 0 ? Number(utils.formatEther(tokenBalance).substring(0, position(18, tokenBalance))).toLocaleString('us-EN') : 0
      setBalanceRANDOM(tokenReadableBalance);
      console.log('tokenReadableBalance', tokenReadableBalance)  
    } catch (error) { 
        console.log('error', error)
        setBalanceETH(0);
        setBalanceRANDOM(0);
    }
}

export default getBalances;