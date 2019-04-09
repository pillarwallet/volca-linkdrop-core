//
// usage: clevis contract mintNftToken Badges ##accountindex## _tokenId _isTransferable
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running mintNftToken("+args[4]+","+args[5]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.mintNftToken(args[4],(args[5]==="true")).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}
