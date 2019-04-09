//
// usage: node contract BatchTransfer Badges
//
module.exports = (contract,params,args)=>{
  return contract.getPastEvents('BatchTransfer', {
      fromBlock: params.blockNumber,
      toBlock: 'latest'
  })
}
