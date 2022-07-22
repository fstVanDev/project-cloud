import React from 'react'
import { Block } from './styled'
import ConnectWallet from "../ConnectWallet/ConnectWallet";


const Navbar = () => {
  return (
    <Block>
      <p>Hello</p>
      <ConnectWallet />
    </Block>
  );
}

export default Navbar