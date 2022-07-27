import React from "react";
// import styled from 'styled-components'
import BigNumber from "bignumber.js";
import { Button, Flex, useModal } from "@pancakeswap-libs/uikit";
import useI18n from "../../../hooks/useI18n";
// import { getBalanceNumber } from 'utils/formatBalance'
import { useBuy } from "../../../hooks/usePresale";
// import { useFarmUser } from 'state/hooks'
import BuyModal from "./BuyModal";

// const IconButtonWrapper = styled.div`
//   display: flex;
//   svg {
//     width: 20px;
//   }
// `

interface BuyActionProps {
   busdBalance?: BigNumber;
   tokensUnclaimed?: BigNumber;
   tokenBalance?: BigNumber;
   tokensLeft?: BigNumber;
}

const BuyAction: React.FC<BuyActionProps> = ({
   busdBalance,
   tokensUnclaimed,
   tokenBalance,
   tokensLeft,
}) => {
   const TranslateString = useI18n();
   const { onBuy } = useBuy();

   //  const OnPresentBuy =>(
   // <BuyModal
   //       max={busdBalance}
   //       onConfirm={onBuy}
   //   tokenName="BUSD"
   //  tokensUnclaimed={tokensUnclaimed}
   //   tokenBalance={tokenBalance}
   //       tokensLeft={tokensLeft}
   //     />
   //   );
   // tochange
   // const renderStakingButtonss = () => {
   //    return (
   //  <Button fullWidth onClick={onPresentBuy}>
   // Buy
   //   </Button>
   // );
   //  };

   const renderStakingButtons = () => {
      return (
         <BuyModal
            max={busdBalance}
            onConfirm={onBuy}
            tokenName="BUSD"
            tokensUnclaimed={tokensUnclaimed}
            tokenBalance={tokenBalance}
            tokensLeft={tokensLeft}
         />
      );
   };

   return (
      <Flex justifyContent="space-between" alignItems="center">
         {renderStakingButtons()}
      </Flex>
   );
};

export default BuyAction;
