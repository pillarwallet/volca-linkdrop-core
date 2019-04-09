//
// usage: clevis contract tokensMinted Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.tokensMinted().call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
