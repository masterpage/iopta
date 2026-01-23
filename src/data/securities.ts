export interface SecurityDetails {
  symbol: string
  companyName: string
  issuer: string
  sector: string
  securityType: 'Common Stock' | 'ADR' | 'ETF'
  primaryExchange: string

  lastPrice: number
  dayChange: number // %
  priorDayVolume: number

  marketCap: number // USD
  adv: number // average daily volume
  advType: '30D' | '60D' | '90D'

  dividend: number | null
  exDividendDate: string | null
  recordDate: string | null
  payDate: string | null

  countryOfIncorporation: string
  countryOfIssue: string
  countryOfRisk: string

  cusip: string
  isin: string
  sedol: string
  ric: string
  quickCode: string
  pdpId: string
}

export const mockSecurityDetails: Record<string, SecurityDetails> = {
  AAPL: {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
    issuer: 'Apple Inc.',
    sector: 'Technology',
    securityType: 'Common Stock',
    primaryExchange: 'NASDAQ',

    lastPrice: 192.45,
    dayChange: 1.23,
    priorDayVolume: 68750000,

    marketCap: 2980000000000,
    adv: 73200000,
    advType: '30D',

    dividend: 0.24,
    exDividendDate: '2026-02-07',
    recordDate: '2026-02-09',
    payDate: '2026-02-13',

    countryOfIncorporation: 'United States',
    countryOfIssue: 'United States',
    countryOfRisk: 'United States',

    cusip: '037833100',
    isin: 'US0378331005',
    sedol: '2046251',
    ric: 'AAPL.O',
    quickCode: 'AAPL US',
    pdpId: 'PDP-10001',
  },

  ATVI: {
    symbol: 'ATVI',
    companyName: 'Activision Blizzard Inc.',
    issuer: 'Activision Blizzard Inc.',
    sector: 'Communication Services',
    securityType: 'Common Stock',
    primaryExchange: 'NASDAQ',

    lastPrice: 94.18,
    dayChange: -0.34,
    priorDayVolume: 9120000,

    marketCap: 74000000000,
    adv: 9800000,
    advType: '30D',

    dividend: 0.47,
    exDividendDate: '2026-01-15',
    recordDate: '2026-01-17',
    payDate: '2026-01-30',

    countryOfIncorporation: 'United States',
    countryOfIssue: 'United States',
    countryOfRisk: 'United States',

    cusip: '00507V109',
    isin: 'US00507V1098',
    sedol: 'B1LQHW9',
    ric: 'ATVI.O',
    quickCode: 'ATVI US',
    pdpId: 'PDP-10002',
  },

  AMZN: {
    symbol: 'AMZN',
    companyName: 'Amazon.com, Inc.',
    issuer: 'Amazon.com, Inc.',
    sector: 'Consumer Discretionary',
    securityType: 'Common Stock',
    primaryExchange: 'NASDAQ',

    lastPrice: 178.92,
    dayChange: 2.01,
    priorDayVolume: 55400000,

    marketCap: 1840000000000,
    adv: 61200000,
    advType: '30D',

    dividend: null,
    exDividendDate: null,
    recordDate: null,
    payDate: null,

    countryOfIncorporation: 'United States',
    countryOfIssue: 'United States',
    countryOfRisk: 'United States',

    cusip: '023135106',
    isin: 'US0231351067',
    sedol: 'B58MWR9',
    ric: 'AMZN.O',
    quickCode: 'AMZN US',
    pdpId: 'PDP-10003',
  },

  NFLX: {
    symbol: 'NFLX',
    companyName: 'Netflix, Inc.',
    issuer: 'Netflix, Inc.',
    sector: 'Communication Services',
    securityType: 'Common Stock',
    primaryExchange: 'NASDAQ',

    lastPrice: 612.34,
    dayChange: -1.11,
    priorDayVolume: 6900000,

    marketCap: 272000000000,
    adv: 7200000,
    advType: '30D',

    dividend: null,
    exDividendDate: null,
    recordDate: null,
    payDate: null,

    countryOfIncorporation: 'United States',
    countryOfIssue: 'United States',
    countryOfRisk: 'United States',

    cusip: '64110L106',
    isin: 'US64110L1061',
    sedol: 'B7TL820',
    ric: 'NFLX.O',
    quickCode: 'NFLX US',
    pdpId: 'PDP-10004',
  },

  TSLA: {
    symbol: 'TSLA',
    companyName: 'Tesla, Inc.',
    issuer: 'Tesla, Inc.',
    sector: 'Consumer Discretionary',
    securityType: 'Common Stock',
    primaryExchange: 'NASDAQ',

    lastPrice: 247.88,
    dayChange: 3.52,
    priorDayVolume: 104300000,

    marketCap: 790000000000,
    adv: 112000000,
    advType: '30D',

    dividend: null,
    exDividendDate: null,
    recordDate: null,
    payDate: null,

    countryOfIncorporation: 'United States',
    countryOfIssue: 'United States',
    countryOfRisk: 'United States',

    cusip: '88160R101',
    isin: 'US88160R1014',
    sedol: 'B616C79',
    ric: 'TSLA.O',
    quickCode: 'TSLA US',
    pdpId: 'PDP-10005',
  },

  F: {
    symbol: 'F',
    companyName: 'Ford Motor Company',
    issuer: 'Ford Motor Company',
    sector: 'Consumer Discretionary',
    securityType: 'Common Stock',
    primaryExchange: 'NYSE',

    lastPrice: 12.44,
    dayChange: 0.64,
    priorDayVolume: 43100000,

    marketCap: 49000000000,
    adv: 46500000,
    advType: '30D',

    dividend: 0.15,
    exDividendDate: '2026-01-25',
    recordDate: '2026-01-27',
    payDate: '2026-02-01',

    countryOfIncorporation: 'United States',
    countryOfIssue: 'United States',
    countryOfRisk: 'United States',

    cusip: '345370860',
    isin: 'US3453708600',
    sedol: '2615468',
    ric: 'F.N',
    quickCode: 'F US',
    pdpId: 'PDP-10006',
  },

  KO: {
    symbol: 'KO',
    companyName: 'The Coca-Cola Company',
    issuer: 'The Coca-Cola Company',
    sector: 'Consumer Staples',
    securityType: 'Common Stock',
    primaryExchange: 'NYSE',

    lastPrice: 61.12,
    dayChange: -0.42,
    priorDayVolume: 15600000,

    marketCap: 264000000000,
    adv: 17100000,
    advType: '30D',

    dividend: 0.46,
    exDividendDate: '2026-03-01',
    recordDate: '2026-03-03',
    payDate: '2026-03-15',

    countryOfIncorporation: 'United States',
    countryOfIssue: 'United States',
    countryOfRisk: 'United States',

    cusip: '191216100',
    isin: 'US1912161007',
    sedol: '2206657',
    ric: 'KO.N',
    quickCode: 'KO US',
    pdpId: 'PDP-10007',
  },

  PG: {
    symbol: 'PG',
    companyName: 'Procter & Gamble Co.',
    issuer: 'Procter & Gamble Co.',
    sector: 'Consumer Staples',
    securityType: 'Common Stock',
    primaryExchange: 'NYSE',

    lastPrice: 153.77,
    dayChange: 0.88,
    priorDayVolume: 6200000,

    marketCap: 362000000000,
    adv: 7000000,
    advType: '30D',

    dividend: 0.94,
    exDividendDate: '2026-01-20',
    recordDate: '2026-01-22',
    payDate: '2026-02-05',

    countryOfIncorporation: 'United States',
    countryOfIssue: 'United States',
    countryOfRisk: 'United States',

    cusip: '742718109',
    isin: 'US7427181091',
    sedol: '2704407',
    ric: 'PG.N',
    quickCode: 'PG US',
    pdpId: 'PDP-10008',
  },

  MRNA: {
    symbol: 'MRNA',
    companyName: 'Moderna, Inc.',
    issuer: 'Moderna, Inc.',
    sector: 'Health Care',
    securityType: 'Common Stock',
    primaryExchange: 'NASDAQ',

    lastPrice: 102.31,
    dayChange: -2.67,
    priorDayVolume: 8900000,

    marketCap: 39200000000,
    adv: 9100000,
    advType: '30D',

    dividend: null,
    exDividendDate: null,
    recordDate: null,
    payDate: null,

    countryOfIncorporation: 'United States',
    countryOfIssue: 'United States',
    countryOfRisk: 'United States',

    cusip: '60770K107',
    isin: 'US60770K1079',
    sedol: 'BKM4GZ8',
    ric: 'MRNA.O',
    quickCode: 'MRNA US',
    pdpId: 'PDP-10009',
  },
}
