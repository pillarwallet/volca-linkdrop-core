//
// usage: clevis contract isTransferable Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.isTransferable(args[3]).call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
