//
// usage: clevis contract batchMintNftTokens Badges ##accountindex## _tokenIds _isTransferable
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running batchMintNftTokens("+args[4]+","+args[5]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.batchMintNftTokens(args[4],args[5]).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
