import {providers} from "ethers"

export default function readProvider () {
    return new providers.JsonRpcProvider(
        "https://data-seed-prebsc-1-s1.binance.org:8545",
        {
          chainId: 97,
          name: "bsc-testnet",
        }
      )
}