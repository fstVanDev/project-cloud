import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js/bignumber'
// import { BButton } from '../uiKit/basicComponents'
import useI18n from '../../hooks/useI18n'
import Input, { InputProps } from '../Input'

interface BButtonProps {
  size?: "sm" | "block";
  isCancel?: boolean;
}

const BButton = styled.button<BButtonProps>`
  height: 40px;
  width: ${({ size }) => (size === "sm" ? "140px" : "100%")};
  background: ${({ isCancel }) => (isCancel ? "white" : "#FB075F")};
  border: ${({ isCancel }) => (isCancel ? "solid 2px !important" : "")};
  border-color: ${({ isCancel }) => (isCancel ? "#4A5A72" : "")};
  border-radius: 8px;
  font-family: Urbanist;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${({ isCancel }) => (isCancel ? "#4A5A72" : "#FFFFFF")};
  border: none;
  cursor: pointer;

  &:disabled {
    background: grey;
    color: white;

    cursor: default;
  }
`;

interface TokenInputProps extends InputProps {
  max: number | string
  symbol: string
  onSelectMax?: () => void
  depositFeeBP?: number
}

const TokenInput: React.FC<TokenInputProps> = ({ max, symbol, onChange, onSelectMax, value, depositFeeBP = 0 }) => {
  const TranslateString = useI18n()
  return (
    <StyledTokenInput>
      <StyledMaxText>
        {max.toLocaleString()} {symbol} {TranslateString(526, 'Available')}
      </StyledMaxText>
      <Input
        endAdornment={
          <StyledTokenAdornmentWrapper>
            <StyledTokenSymbol>{symbol}</StyledTokenSymbol>
            <StyledSpacer />
            <div>
              <BButton onClick={onSelectMax}>
                {TranslateString(452, 'Max')}
              </BButton>
            </div>
          </StyledTokenAdornmentWrapper>
        }
        onChange={onChange}
        placeholder="0"
        value={value}
      />
      {depositFeeBP > 0 ? (
        <StyledMaxText>
          {TranslateString(10001, 'Deposit Fee')}: {new BigNumber(value || 0).times(depositFeeBP / 10000).toString()}{' '}
          {symbol}
        </StyledMaxText>
      ) : null}
    </StyledTokenInput>
  )
}

const StyledTokenInput = styled.div`

`

const StyledSpacer = styled.div`
  width: ${(props) => props.theme.spacing[3]}px;
`

const StyledTokenAdornmentWrapper = styled.div`
  align-items: center;
  display: flex;
`

const StyledMaxText = styled.div`
  align-items: center;
  color: #4A5A72;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 44px;
  justify-content: flex-end;
`

const StyledTokenSymbol = styled.span`
  color: #4A5A72;
  font-weight: 700;
`

export default TokenInput
