//
// usage: node contract TransferWithQuantity Badges
//
module.exports = (contract,params,args)=>{
  return contract.getPastEvents('TransferWithQuantity', {
      fromBlock: params.blockNumber,
      toBlock: 'latest'
  })
}
