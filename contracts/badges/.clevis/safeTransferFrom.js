//
// usage: clevis contract safeTransferFrom Badges ##accountindex## _from _to _tokenId _amount _data
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running safeTransferFrom("+args[4]+","+args[5]+","+args[6]+","+args[7]+","+args[8]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.safeTransferFrom(args[4],args[5],args[6],args[7],args[8]).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
