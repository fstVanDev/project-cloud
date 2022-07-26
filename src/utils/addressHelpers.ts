import addresses from '../config/constants/contracts'

// const chainId = process.env.REACT_APP_CHAIN_ID
const chainId = '56'

export const getCakeAddress = () => {
  return addresses.cake[chainId]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}
export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
export const getWbnbAddress = () => {
  return addresses.wbnb[chainId]
}
export const getBusdAddress = () => {
  return addresses.busd[chainId]
}
export const getLotteryAddress = () => {
  return addresses.lottery[chainId]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[chainId]
}
export const getReferralStorageAddress = () => {
  return addresses.referralStorage[chainId]
}
export const getPresaleAddress = () => {
  return addresses.presale[chainId]
}

