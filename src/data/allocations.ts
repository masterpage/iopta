export interface Allocation {
  allocatedQty: number;
  allocationId: string;
  avgPrice: number;
  orderId: string;
  portfolio: string;
}

export const allocations: Allocation[] = [
  {
    allocatedQty: 150000,
    allocationId: "ALLOC-20260119-1001",
    avgPrice: 93.1,
    orderId: "ORD-20260119-0003",
    portfolio: "MSR-EventDriven",
  },
  {
    allocatedQty: 1000000,
    allocationId: "ALLOC-20260112-0001",
    avgPrice: 1.1181,
    orderId: "ORD-20260112-0001",
    portfolio: "GMF-Alpha",
  },
  {
    allocatedQty: 2000000,
    allocationId: "ALLOC-20260113-0001",
    avgPrice: 146.2,
    orderId: "ORD-20260113-0001",
    portfolio: "GMF-Alpha",
  },
  {
    allocatedQty: 6000,
    allocationId: "ALLOC-20260114-0001",
    avgPrice: 160.2,
    orderId: "ORD-20260114-0001",
    portfolio: "ELS-Value",
  },
  {
    allocatedQty: 90000,
    allocationId: "ALLOC-20260115-0001",
    avgPrice: 92.85,
    orderId: "ORD-20260115-0001",
    portfolio: "MSR-EventDriven",
  },
  {
    allocatedQty: 1500000,
    allocationId: "ALLOC-20260116-0001",
    avgPrice: 99.4,
    orderId: "ORD-20260116-0001",
    portfolio: "CRO-HY",
  },
];
