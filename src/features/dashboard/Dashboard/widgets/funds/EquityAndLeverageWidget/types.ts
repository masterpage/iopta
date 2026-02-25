type IsoDateMonthEnd = string;

interface EquityAndLeverage {
  equity_usd_mm: number;
  leverage_x: number;
}

type EquityAndLeverageValues = Record<IsoDateMonthEnd, EquityAndLeverage>;

export interface EquityAndLeverageByFund {
  fund: string;
  values: EquityAndLeverageValues;
}
