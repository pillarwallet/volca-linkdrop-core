//
// usage: clevis contract isFT Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.isFT(args[3]).call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
