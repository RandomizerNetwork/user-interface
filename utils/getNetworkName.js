function getNetworkName(id) {
    switch (Number(id)) {
        case 1:
            return 'ETH Mainnet' // Mainnet
        case 3:
            return 'ETH Ropsten'
        case 4:
            return 'ETH Rinkeby'
        case 5:
            return 'ETH Goerli'
        case 42:
            return 'ETH Kovan'
        case 56:
            return 'BSC Mainnet'
        case 97:
            return 'BSC Testnet'
        case 100:
            return 'Xdai'
        case 137:
            return 'Polygon Mainnet'
        case 80001:
            return 'Polygon Mumbai'
        case 'localhost':
            return 'Localhost'
        default:
            return 'Local'
    }
}
export default getNetworkName;