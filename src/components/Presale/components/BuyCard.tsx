/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useCallback, useState, useMemo } from 'react'
import { Card, CardBody, CardFooter, Flex, Button } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { provider } from 'web3-core'
import { getContract } from '../../../utils/erc20'
import useI18n from '../../../hooks/useI18n'
import UnlockButton from '../../UnlockButton'
import {  useApprovePresale } from '../../../hooks/useApprove'
import { getBusdAddress } from '../../../utils/addressHelpers'
import { getBalanceNumber } from '../../../utils/formatBalance'
import BuyAction from './BuyAction'
import styles from '../styles/presale.module.css'
import ClaimAction from './ClaimAction'

interface BuyCardProps {
   account?: string
   ethereum?: provider
   allowance?: BigNumber
   busdBalance?: BigNumber
   tokensUnclaimed?: BigNumber
   tokenBalance?: BigNumber
   tokensLeft?: BigNumber
}

const BuyCard: React.FC<BuyCardProps> = ({ account, ethereum, allowance, busdBalance, tokensUnclaimed, tokenBalance, tokensLeft }) => {
   const TranslateString = useI18n()
   const [requestedApproval, setRequestedApproval] = useState(false)

   const isApproved = account && allowance && allowance.isGreaterThan(0)

   const busdContract = useMemo(() => {
      return getContract(ethereum as provider, getBusdAddress())
   }, [ethereum])

   const { onApprove } = useApprovePresale(busdContract)

   const handleApprove = useCallback(async () => {
      try {
         setRequestedApproval(true)
         await onApprove()
         setRequestedApproval(false)
      } catch (e) {
         console.error(e)
      }
   }, [onApprove])

   const renderApprovalOrBuyButton = () => {
      return isApproved ? (
         <BuyAction busdBalance={busdBalance} tokensUnclaimed={tokensUnclaimed} tokenBalance={tokenBalance} tokensLeft={tokensLeft} />
      ) : (
         <Button mt="8px" fullWidth onClick={handleApprove}>
            {TranslateString(999, 'Approve Contract')}
         </Button>
      )
   }

   const renderClaimButton = () => {
      return <ClaimAction />
   }

   return (
      <div>
         <Flex className={styles.cardContainer} justifyContent="space-between" style={{ marginTop: '30px' }}>

            <Card className={styles.card}>
               <CardBody
                  style={{
                     textAlign: 'left',
                     fontSize: '24px',
                     position: 'absolute',
                     fontFamily: 'Urbanist',
                     fontStyle: 'normal',
                     fontWeight: 'bold',
                     lineHeight: '29px',
                     color: '#4A5A72',
                     boxSizing: 'content-box',
                     marginLeft: '30px',
                     paddingBottom: '0px',
                     paddingTop: '30px',
                     border: 'none'
                  }}> Buy 6RMB
               </CardBody>

               <CardFooter>
                  <div className={styles.flex}>
                     <div className={styles.item}>
                        6RMB Price
                        <div className={styles.colored}>3.00 BUSD</div>
                     </div>

                     <div className={styles.item2}>
                        Max Per Wallet
                        <div className={styles.colored}>200 6RMB</div>
                     </div>
                  </div>

                  <div style={{
                     display: 'block',
                     marginLeft: 'auto',
                     marginRight: 'auto',
                     boxSizing: 'content-box',
                     marginTop: '245px'
                  }}>
                     {!account ? <UnlockButton mt="8px" fullWidth /> : renderApprovalOrBuyButton()}
                  </div>

               </CardFooter>
            </Card>

            <Card className={styles.card}>
               <CardBody style={{
                  textAlign: 'left',
                  fontSize: '24px',
                  position: 'absolute',
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  lineHeight: '29px',
                  color: '#4A5A72',
                  boxSizing: 'content-box',
                  marginLeft: '30px',
                  paddingBottom: '0px',
                  paddingTop: '30px',
                  border: 'none'
               }}>Claim 6RMB
               </CardBody>

               <CardFooter>

                  <div className={styles.flex}>
                     <div className={styles.item}>
                        Unclaimed 6RMB
                        <div className={styles.colored}>{getBalanceNumber(tokensUnclaimed)} 6RMB</div>
                     </div>

                     <div className={styles.item2}>
                        Claimed 6RMB
                        <div className={styles.colored}>{getBalanceNumber(tokenBalance)} 6RMB </div>
                     </div>
                  </div>

                  <div style={{
                     display: 'block',
                     marginLeft: 'auto',
                     marginRight: 'auto',
                     boxSizing: 'content-box',
                     marginTop: '245px'
                  }}>
                     {!account ? <UnlockButton mt="8px" fullWidth /> : renderClaimButton()}
                  </div>

               </CardFooter>
            </Card>

         </Flex>
      </div>
   )
}

export default BuyCard