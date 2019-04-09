//
// usage: clevis contract safeBatchTransferFrom Badges ##accountindex## _from _to _tokenIds _amounts _data
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running safeBatchTransferFrom("+args[4]+","+args[5]+","+args[6]+","+args[7]+","+args[8]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.safeBatchTransferFrom(args[4],args[5],args[6],args[7],args[8]).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
