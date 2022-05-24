const GetWalletIcon = ({ wallet }) => {
    console.log('wallet agent orange', wallet)
    console.log('wallet agent label', wallet.label)
    // if (
    //     wallet.label === "MetaMask" ||
    //     wallet.label === "Keystone" ||
    //     wallet.label === "KeepKey" ||
    //     wallet.label === "Opera" ||
    //     wallet.label === "Liquality" ||
    //     wallet.label === "Authereum" ||
    //     wallet.label === "XDEFI Wallet" ||
    //     wallet.label === "MEETONE" ||
    //     wallet.label === "MYKEY" ||
    //     wallet.label === "HyperPay" ||
    //     wallet.label === "AToken" ||
    //     wallet.label === "TokenPocket" ||
    //     wallet.label === "tp"
    // ) {
    //     return <img src={`data:image/svg+xml;utf8,${encodeURIComponent(wallet.icon)}`} height="50" width="50" className="m-t-10" style={{ width: "50px" }} />
    //     // return <img src={wallet.icon} height="50" width="50" className="m-t-10" style={{ width: "50px" }} />
    // }
    // return <img src={wallet.icon} height="50" width="50" className="m-t-10" style={{ width: "50px" }} />
    return <img src={`data:image/svg+xml;utf8,${encodeURIComponent(wallet.icon)}`} height="50" width="50" className="m-t-10" />
}

export default GetWalletIcon;