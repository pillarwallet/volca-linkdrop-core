//
// usage: clevis contract InterfaceId_ERC165 Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.InterfaceId_ERC165().call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
