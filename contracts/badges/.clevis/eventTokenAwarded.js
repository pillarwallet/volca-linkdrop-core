//
// usage: node contract TokenAwarded Badges
//
module.exports = (contract,params,args)=>{
  return contract.getPastEvents('TokenAwarded', {
      fromBlock: params.blockNumber,
      toBlock: 'latest'
  })
}
