//
// usage: node contract TokenMinted Badges
//
module.exports = (contract,params,args)=>{
  return contract.getPastEvents('TokenMinted', {
      fromBlock: params.blockNumber,
      toBlock: 'latest'
  })
}
