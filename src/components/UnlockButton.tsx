import React from 'react'
import { useWalletModal } from '@pancakeswap-libs/uikit'
// import { useWallet } from 'use-wallet'
import useI18n from '../hooks/useI18n'
import useAuth from '../hooks/useAuth'
import styled from "styled-components";

 interface BButtonProps {
   size?: "sm" | "block";
   isCancel?: boolean;
 }
 

 const Button = styled.button<BButtonProps>`
   cursor: pointer;
   display: block;
   margin-left: auto;
   margin-right: auto;
   padding: 0px;
   left: 30px;
   right: 30px;
   display: block;
   height: 40px;
   width: 100%;
   border: 1px solid #fb075f;
   color: #fff;
   box-sizing: content-box;
   border-radius: 8px;
   font-family: Urbanist;
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   text-align: center;
   background: #fb075f;
   z-index: 0;
 `;

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)



  return (
        <Button onClick={onPresentConnectModal}>
          {TranslateString(292, 'Unlock Wallet')}
        </Button>
  )
}

export default UnlockButton
