//
// usage: clevis contract mintToken Badges ##accountindex## _tokenId _supply _isTransferable
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running mintToken("+args[4]+","+args[5]+","+args[6]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.mintToken(args[4],args[5],(args[6]==="true")).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
