//
// usage: clevis contract getTokenBaseUri Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.getTokenBaseUri().call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
