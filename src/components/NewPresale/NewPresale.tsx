import React, { useState, useMemo, useCallback } from "react";
// import { PresaleBlock, H1, Details, TokenBlock, Token } from "./styles";
// import BigNumber from "bignumber.js";
// import { getBalanceNumber } from "../../utils/formatBalance";
// import { useApprovePresale } from "../../hooks/useApprove";
// import { getContract } from "../../utils/erc20";
// import { getBusdAddress } from "../../utils/addressHelpers";
// import useI18n from "../../hooks/useI18n";
// import ClaimAction from "../Presale/components/ClaimAction";
// import UnlockButton from "../UnlockButton";
// import { provider } from "web3-core";
// import { Button } from "@pancakeswap-libs/uikit";
// import BuyAction from "../Presale/components/BuyAction";

// interface BuyCardProps {
//   account?: string;
//   ethereum?: provider;
//   allowance?: BigNumber;
//   busdBalance?: BigNumber;
//   tokensUnclaimed?: BigNumber;
//   tokenBalance?: BigNumber;
//   tokensLeft?: BigNumber;
// }

// const NewPresale: React.FC<BuyCardProps> = ({
//   account,
//   ethereum,
//   allowance,
//   busdBalance,
//   tokensUnclaimed,
//   tokenBalance,
//   tokensLeft,
// }) => {
//   const TranslateString = useI18n();
//   const [requestedApproval, setRequestedApproval] = useState(false);

//   const isApproved = account && allowance && allowance.isGreaterThan(0);

//   const busdContract = useMemo(() => {
//     return getContract(ethereum as provider, getBusdAddress());
//   }, [ethereum]);

//   const { onApprove } = useApprovePresale(busdContract);

//   const handleApprove = useCallback(async () => {
//     try {
//       setRequestedApproval(true);
//       await onApprove();
//       setRequestedApproval(false);
//     } catch (e) {
//       console.error(e);
//     }
//   }, [onApprove]);

//   const renderApprovalOrBuyButton = () => {
//     return isApproved ? (
//       <BuyAction
//         busdBalance={busdBalance}
//         tokensUnclaimed={tokensUnclaimed}
//         tokenBalance={tokenBalance}
//         tokensLeft={tokensLeft}
//       />
//     ) : (
//       <Button mt="8px" fullWidth onClick={handleApprove}>
//         {TranslateString(999, "Approve Contract")}
//       </Button>
//     );
//   };

//   const renderClaimButton = () => {
//     return <ClaimAction />;
//   };

//   return (
//     <PresaleBlock>
//       <H1>Presale</H1>
//       <hr />
//       {/* <Details>
//         <h1>Details</h1>
//         <h3>Only 15.000 6RMB available</h3>
//         <h3>Each time you can buy up to 180 6RMB (540 BUSD)</h3>
//       </Details>

//       <hr />

//       <TokenBlock>
//         <Token>
//           <h2> Buy 6RMB </h2>
//           <br />
//           <h2>6RMB Price</h2>
//           <h1>3.00 BUSD</h1>

//           <h2>Max Per Wallet</h2>
//           <h1>200 6RMB</h1>

//           {!account ? (
//             <UnlockButton mt="8px" fullWidth />
//           ) : (
//             renderApprovalOrBuyButton()
//           )}
//         </Token>

//         <Token>
//           <h2> Claim 6RMB </h2>
//           <br />
//           <h2>Unclaimed 6RMB</h2>
//           <h1> {getBalanceNumber(tokensUnclaimed)} 6RMB</h1>

//           <h2>Claimed 6RMB</h2>
//           <h1>{getBalanceNumber(tokenBalance)} 6RMB</h1>

//           {!account ? <UnlockButton mt="8px" fullWidth /> : renderClaimButton()}
//         </Token>
//       </TokenBlock> */}
//     </PresaleBlock>
//   );
// };

// export default NewPresale;
