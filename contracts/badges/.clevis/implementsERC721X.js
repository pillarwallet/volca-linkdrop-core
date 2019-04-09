//
// usage: clevis contract implementsERC721X Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.implementsERC721X().call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
