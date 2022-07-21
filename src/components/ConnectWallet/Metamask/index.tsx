import React, { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";
import { ConnectWallet } from "./styled";






const ConnectMetamask = () => {
  return (
    <ConnectWallet type="button">
      <p>Wallet</p>
    </ConnectWallet>
  );
};

export default ConnectMetamask;
