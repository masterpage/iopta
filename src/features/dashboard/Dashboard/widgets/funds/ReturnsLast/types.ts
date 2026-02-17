type DateValue = Record<string, number>;

export interface ReturnsLast {
  fund: string;
  mtd: number;
  values: DateValue;
  ytd: number;
  totalLast12mo: number;
}
