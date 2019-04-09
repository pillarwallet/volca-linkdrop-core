//
// usage: clevis contract isNFT Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.isNFT(args[3]).call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
