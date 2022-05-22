import {utils} from 'ethers';

export default function position (decimals, balance) { utils.formatEther(balance).indexOf('.') + decimals }