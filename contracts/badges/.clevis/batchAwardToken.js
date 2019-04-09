//
// usage: clevis contract batchAwardToken Badges ##accountindex## _tokenId _to _amount
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running batchAwardToken("+args[4]+","+args[5]+","+args[6]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.batchAwardToken(args[4],args[5],args[6]).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
