//
// usage: clevis contract implementsERC721 Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.implementsERC721().call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
