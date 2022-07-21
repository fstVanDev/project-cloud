import React, { useState } from "react";
import styled from "styled-components";
import Walletconnect from "../ConnectWallet/WalletConnect";
import ConnectMetamask from "../ConnectWallet/Metamask";

const ConnectWalletButton = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 140px;
  height: 40px;
  background-color: #ccc;
  border: none;
  margin: 10px 15px;
  border-radius: 6px;

  &:hover {
    background: black;
    color: white;
  }

  p {
    align-items: center;
    text-align: center;
    margin: auto;
    font-size: 16px;
  }
`;

const BlockModal = styled.div`
  position: absolute;
  display: column;
  right: 15px;
  padding: 10px;
  width: 280px;
  height: 180px;
  background: #ccc;
  border-radius: 6px;
  z-index: 0;

  p {
    align-items: center;
    text-align: center;
    margin: auto;
    font-size: 16px;
  }
`;

const NavBar = () => {
   const [clicked, setClicked] = useState(false);
   const [currentAccount, setCurrentAccount] = useState('')

  const modalClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid red",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ConnectWalletButton onClick={() => modalClicked()}>
          <p>Connect Wallet</p>
        </ConnectWalletButton>
      </div>

      {clicked ? (
        <BlockModal>
          <Walletconnect />
          {/* <ConnectMetamask /> */}
        </BlockModal>
      ) : (
        <div style={{ display: "none" }}>
          <BlockModal></BlockModal>
        </div>
      )}
    </div>
  );
};

export default NavBar;
