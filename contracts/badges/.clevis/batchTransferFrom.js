//
// usage: clevis contract batchTransferFrom Badges ##accountindex## _from _to _tokenIds _amounts
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running batchTransferFrom("+args[4]+","+args[5]+","+args[6]+","+args[7]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.batchTransferFrom(args[4],args[5],args[6],args[7]).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
