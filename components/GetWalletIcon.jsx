const GetWalletIcon = ({ wallet }) => {
    if (
        wallet.name === "MetaMask" ||
        wallet.name === "Keystone" ||
        wallet.name === "KeepKey" ||
        wallet.name === "Opera" ||
        wallet.name === "Liquality" ||
        wallet.name === "Authereum" ||
        wallet.name === "XDEFI Wallet" ||
        wallet.name === "MEETONE" ||
        wallet.name === "MYKEY" ||
        wallet.name === "HyperPay" ||
        wallet.name === "AToken" ||
        wallet.name === "TokenPocket" ||
        wallet.name === "tp"
    ) {
        return <img src={wallet.icons?.iconSrc} height="50" width="50" className="m-t-10" style={{ width: "50px" }} />
    }
    return <img src={`data:image/svg+xml;utf8,${encodeURIComponent(wallet.icons?.svg)}`} height="50" width="50" className="m-t-10" style={{ width: "50px" }} />
}

export default GetWalletIcon;