//
// usage: clevis contract batchMintTokens Badges ##accountindex## _tokenIds _tokenSupplies _isTransferable
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running batchMintTokens("+args[4]+","+args[5]+","+args[6]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.batchMintTokens(args[4],args[5],args[6]).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
