import { mockSecurityDetails, type SecurityDetails } from 'src/data'

export function resolveSecurityDetails(symbol: string): SecurityDetails {
  const key = symbol.toUpperCase()

  if (mockSecurityDetails[key]) {
    return mockSecurityDetails[key]
  }

  return {
    symbol: key,
    companyName: 'Unknown Security',
    issuer: 'N/A',
    sector: 'N/A',
    securityType: 'Common Stock',
    primaryExchange: 'N/A',

    lastPrice: 0,
    dayChange: 0,
    priorDayVolume: 0,

    marketCap: 0,
    adv: 0,
    advType: '30D',

    dividend: null,
    exDividendDate: null,
    recordDate: null,
    payDate: null,

    countryOfIncorporation: 'N/A',
    countryOfIssue: 'N/A',
    countryOfRisk: 'N/A',

    cusip: 'N/A',
    isin: 'N/A',
    sedol: 'N/A',
    ric: 'N/A',
    quickCode: key,
    pdpId: 'N/A',
  }
}
