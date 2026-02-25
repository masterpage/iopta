type DateValue = Record<string, number>;

export interface ReturnsLast {
  fund: string;
  mtd: number;
  totalLast12mo: number;
  values: DateValue;
  ytd: number;
}
