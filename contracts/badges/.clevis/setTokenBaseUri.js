//
// usage: clevis contract setTokenBaseUri Badges ##accountindex## _newUri
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running setTokenBaseUri("+args[4]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.setTokenBaseUri(args[4]).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
