import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
   //  {
   //   pid: 0,
   //   risk: 5,
   //   lpSymbol: 'BNB-BUSD LP',
   //   lpAddresses: {
   //     97: '',
   //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
   //   },
   //   tokenSymbol: 'OLYMP',
   //   tokenAddresses: {
   //     97: '',
   //     56: '0xd96A5399B44CaaC933b00776a27B0A4813b2E380',
   //   },
   //   harvestLockup: 0,
   //   quoteTokenSymbol: QuoteToken.BUSD,
   //   quoteTokenAdresses: contracts.busd,
   // },
   // {
   //   pid: 2,
   //   risk: 5,
   //   lpSymbol: 'OLYMP-BUSD LP',
   //   lpAddresses: {
   //     97: '',
   //     56: '0x9A1220AA64c86313E392cE7DAB0758a5BEa4B261',
   //   },
   //   tokenSymbol: 'OLYMP',
   //   tokenAddresses: {
   //     97: '',
   //     56: '0xd96A5399B44CaaC933b00776a27B0A4813b2E380',
   //   },
   //   harvestLockup: 0,
   //   quoteTokenSymbol: QuoteToken.BUSD,
   //   quoteTokenAdresses: contracts.busd,
   // },
   // {
   //   pid: 1,
   //   risk: 5,
   //   lpSymbol: 'OLYMP-BNB LP',
   //   lpAddresses: {
   //     97: '',
   //     56: '0x77d5013Bb3c592A6738cb1986Bc08C2eC38AACA8',
   //   },
   //   tokenSymbol: 'OLYMP',
   //   tokenAddresses: {
   //     97: '',
   //     56: '0xd96A5399B44CaaC933b00776a27B0A4813b2E380',
   //   },
   //   harvestLockup: 0,
   //   quoteTokenSymbol: QuoteToken.BNB,
   //   quoteTokenAdresses: contracts.wbnb,
   // },
   {
      pid: 0,
      risk: 3,
      lpSymbol: 'BNB-BUSD LP',
      lpAddresses: {
         97: '',
         56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      tokenSymbol: 'BNB',
      tokenAddresses: {
         97: '',
         56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
      harvestLockup: 0,
      quoteTokenSymbol: QuoteToken.BUSD,
      quoteTokenAdresses: contracts.busd,
   },
   // {
   //   pid: 41,
   //   risk: 5,
   //   isTokenOnly: true,
   //   lpSymbol: 'OLYMP',
   //   lpAddresses: {
   //     97: '',
   //     56: '0x9A1220AA64c86313E392cE7DAB0758a5BEa4B261', // EGG-BUSD LP
   //   },
   //   tokenSymbol: 'OLYMP',
   //   tokenAddresses: {
   //     97: '',
   //     56: '0xd96A5399B44CaaC933b00776a27B0A4813b2E380',
   //   },
   //   harvestLockup: 3,
   //   quoteTokenSymbol: QuoteToken.BUSD,
   //   quoteTokenAdresses: contracts.busd,
   // },
   //   {
   //     pid: 3,
   //     risk: 1,
   //     isTokenOnly: true,
   //     lpSymbol: 'BUSD',
   //     lpAddresses: {
   //       97: '',
   //       56: '0x9b06b1b8a05e55311ee79ae0f229e6956800bf2b', // EGG-BUSD LP (BUSD-BUSD will ignore)
   //     },
   //     tokenSymbol: 'BUSD',
   //     tokenAddresses: {
   //       97: '',
   //       56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
   //     },
   //     harvestLockup: 5,
   //     quoteTokenSymbol: QuoteToken.BUSD,
   //     quoteTokenAdresses: contracts.busd,
   //   },
   // {
   //   pid: 43,
   //   risk: 3,
   //   isTokenOnly: true,
   //   lpSymbol: 'WBNB',
   //   lpAddresses: {
   //     97: '',
   //     56: '0x7C65D6fe321E76a75Bc960AE01Ab0b177fDfc755', // BNB-BUSD LP
   //   },
   //   tokenSymbol: 'WBNB',
   //   tokenAddresses: {
   //     97: '',
   //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
   //   },
   //   harvestLockup: 5,
   //   quoteTokenSymbol: QuoteToken.BUSD,
   //   quoteTokenAdresses: contracts.busd,
   // },

   // {
   //   pid: 44,
   //   risk: 1,
   //   isTokenOnly: true,
   //   lpSymbol: 'USDT',
   //   lpAddresses: {
   //     97: '',
   //     56: '0x86fECdd041B6c70D44441b92339193FE0eC18505', // USDT-BUSD LP
   //   },
   //   tokenSymbol: 'USDT',
   //   tokenAddresses: {
   //     97: '',
   //     56: '0x55d398326f99059ff775485246999027b3197955',
   //   },
   //   harvestLockup: 5,
   //   quoteTokenSymbol: QuoteToken.BUSD,
   //   quoteTokenAdresses: contracts.busd,
   // },
   // {
   //   pid: 45,
   //   risk: 3,
   //   isTokenOnly: true,
   //   lpSymbol: 'CAKE',
   //   lpAddresses: {
   //     97: '',
   //     56: '0x9A1220AA64c86313E392cE7DAB0758a5BEa4B261',
   //   },
   //   tokenSymbol: 'CAKE',
   //   tokenAddresses: {
   //     97: '',
   //     56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
   //   },
   //   harvestLockup: 5,
   //   quoteTokenSymbol: QuoteToken.BUSD,
   //   quoteTokenAdresses: contracts.busd,
   // },
]

export default farms

/*

  {
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  */