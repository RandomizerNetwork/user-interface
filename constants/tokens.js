// ETH MAINNET
// PAIRS     DECIMALS               TOKENS                                 CHAINLINK PRICE FEED
// WBTC / USD	8	0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599   0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c
// WETH / USD	8	0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2   0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
// LINK / USD	8	0x514910771AF9Ca656af840dff83E8264EcF986CA   0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c
//  UNI / USD	8	0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984   0x553303d460EE0afB37EdFf9bE42922D8FF63220e
//  DAI / USD	8	0x6B175474E89094C44Da98b954EedeAC495271d0F   0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9
// USDC / USD	8	0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48   0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6
// USDT / USD	8	0xdAC17F958D2ee523a2206206994597C13D831ec7   0x3E7d1eAB13ad0104d2750B8863b489D65364e32D

// bring spy jealous there genre corn client battle frown exchange bracket glare

// ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","0x514910771AF9Ca656af840dff83E8264EcF986CA","0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984","0x6B175474E89094C44Da98b954EedeAC495271d0F","0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","0xdAC17F958D2ee523a2206206994597C13D831ec7"],["0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c","0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419","0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c","0x553303d460EE0afB37EdFf9bE42922D8FF63220e","0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9","0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6","0x3E7d1eAB13ad0104d2750B8863b489D65364e32D"]

export const seed = [
    // {name: "NETWORK", id: 97, network: "Binance Smart Chain"}, 
    {name: "NETWORK", id: 42, network: "kovan"}, 
    {name: "SEED", address: "0x0561B1498FA358a1b5E8F21844c98C9DE01161B3"}
    // {name: "SEED", address: "0x0000000000000000000000000000000000000000"}
]

// MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET
export const tokens = [
    // {name: "RANDOM", decimals: 18, address: "0xc41B5fC87CB08b7C96db7F7d5c83C5729A5c6634"},
    {name: "ETH",  decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},
    {name: "WBTC", decimals: 8,  address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"}, 
    {name: "WETH", decimals: 18, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"},
    {name: "LINK", decimals: 18, address: "0x514910771AF9Ca656af840dff83E8264EcF986CA"},
    {name: "UNI",  decimals: 18, address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"},
    {name: "DAI",  decimals: 18, address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"},
    {name: "USDC", decimals: 6,  address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},
    {name: "USDT", decimals: 6,  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"}
]
// MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET --- MAINNET

// KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN
// export const tokens = [
//     {name: "RANDOM", decimals: 18, address: "0xc41B5fC87CB08b7C96db7F7d5c83C5729A5c6634"},
//     {name: "ETH",  decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},
//     {name: "WBTC", decimals: 8,  address: "0x9Bf27E57245DD4232C018f2097b1e999A7161a3B"}, 
//     {name: "WETH", decimals: 18, address: "0x8ee34E67763cE078Ffced75B3F6A5ac151f5Db33"},
//     {name: "LINK", decimals: 18, address: "0xa36085F69e2889c224210F603D836748e7dC0088"},
//     {name: "UNI",  decimals: 18, address: "0x2dE19249451741935003E1BF819E0dBb3010463d"},
//     {name: "DAI",  decimals: 18, address: "0xb3A570feDE54326Aa5Cc66D6C03bC3c72A6E4C86"},
//     {name: "USDC", decimals: 6,  address: "0xFfA962796FC63611f8bCc53Fbb24CbA1CB53b273"},
//     {name: "USDT", decimals: 6,  address: "0xDc3d34839ba29c76FA295640CE3A07b77FfA8AD9"}
// ]
// KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN

// KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN
// export const tokens = [
//     {name: "RANDOM", decimals: 18, address: "0xc41B5fC87CB08b7C96db7F7d5c83C5729A5c6634"},
//     {name: "ETH",  decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},
//     {name: "WETH", decimals: 18, address: "0x8ee34E67763cE078Ffced75B3F6A5ac151f5Db33"},
//     {name: "WBTC", decimals: 8,  address: "0x9Bf27E57245DD4232C018f2097b1e999A7161a3B"}, 
//     {name: "LINK", decimals: 18, address: "0xa36085F69e2889c224210F603D836748e7dC0088"},
//     {name: "UNI",  decimals: 18, address: "0x2dE19249451741935003E1BF819E0dBb3010463d"},
//     {name: "DAI",  decimals: 18, address: "0xb3A570feDE54326Aa5Cc66D6C03bC3c72A6E4C86"},
//     {name: "USDC", decimals: 6,  address: "0xFfA962796FC63611f8bCc53Fbb24CbA1CB53b273"},
//     {name: "USDT", decimals: 6,  address: "0xDc3d34839ba29c76FA295640CE3A07b77FfA8AD9"}
// ]
// KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN --- KOVAN