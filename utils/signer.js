import { ethers } from 'ethers'

class UncheckedJsonRpcSigner extends ethers.Signer {
  constructor(signer) {
    super()
    ethers.utils.defineReadOnly(this, 'signer', signer)
    ethers.utils.defineReadOnly(this, 'provider', signer.provider)
  }

  getAddress() {
    return this.signer.getAddress()
  }

  sendTransaction(transaction) {
    return this.signer.sendUncheckedTransaction(transaction).then(hash => ({
      hash,
      nonce: null,
      gasLimit: null,
      gasPrice: null,
      data: null,
      value: null,
      chainId: null,
      confirmations: 0,
      from: null,
      wait: confirmations =>
        this.provider.waitForTransaction(hash, confirmations)
    }))
  }
}

function getSigner(provider) {
  // console.log("provider", provider)
  // console.log("new UncheckedJsonRpcSigner(provider.getSigner())", new UncheckedJsonRpcSigner(provider.getSigner()))
  return new UncheckedJsonRpcSigner(provider.getSigner())
}

export default getSigner