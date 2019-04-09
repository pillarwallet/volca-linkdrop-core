//
// usage: node contract OwnershipRenounced Badges
//
module.exports = (contract,params,args)=>{
  return contract.getPastEvents('OwnershipRenounced', {
      fromBlock: params.blockNumber,
      toBlock: 'latest'
  })
}
