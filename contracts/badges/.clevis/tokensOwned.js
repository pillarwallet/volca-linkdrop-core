//
// usage: clevis contract tokensOwned Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.tokensOwned(args[3]).call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
