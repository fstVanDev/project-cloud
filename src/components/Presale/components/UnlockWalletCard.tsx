import React from 'react'
import { Card, CardBody } from '@pancakeswap-libs/uikit'
import UnlockButton from '../../UnlockButton'
import useI18n from '../../../hooks/useI18n'

const UnlockWalletCard: React.FC = () => {
    const TranslateString = useI18n()

    return (
        <Card>
            <CardBody style={{ textAlign: 'center' }}>
                <UnlockButton />

                <p style={{ marginTop: '24px' }}>{TranslateString(10011, 'Unlock wallet to take part in the presale!')}</p>
            </CardBody>
        </Card>
    )
}

export default UnlockWalletCard
