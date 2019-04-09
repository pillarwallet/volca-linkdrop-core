//
// usage: clevis contract individualSupply Badges
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.individualSupply(args[3]).call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}
