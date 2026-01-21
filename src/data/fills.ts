export interface Fill {
  broker: string;
  execId: string;
  executionTime: string;
  fillPrice: number;
  fillQty: number;
  orderId: string;
  venue: string;
}

export const fills: Fill[] = [
  {
    broker: "Goldman Sachs",
    execId: "EXEC-20260119-00112",
    executionTime: "2026-01-19T08:45:22-06:00",
    fillPrice: 1.1184,
    fillQty: 1000000,
    orderId: "ORD-20260119-0001",
    venue: "EBS",
  },
  {
    broker: "Goldman Sachs",
    execId: "EXEC-20260119-00113",
    executionTime: "2026-01-19T09:00:04-06:00",
    fillPrice: 1.1186,
    fillQty: 1000000,
    orderId: "ORD-20260119-0001",
    venue: "HotspotFX",
  },
  {
    broker: "J.P. Morgan",
    execId: "EXEC-20260118-0098",
    executionTime: "2026-01-18T15:04:10-06:00",
    fillPrice: 93.1,
    fillQty: 150000,
    orderId: "ORD-20260119-0003",
    venue: "NASDAQ",
  },
  {
    broker: "Goldman Sachs",
    execId: "EXEC-20260112-1001",
    executionTime: "2026-01-12T09:12:33-06:00",
    fillPrice: 1.118,
    fillQty: 500000,
    orderId: "ORD-20260112-0001",
    venue: "EBS",
  },
  {
    broker: "Goldman Sachs",
    execId: "EXEC-20260112-1002",
    executionTime: "2026-01-12T10:01:05-06:00",
    fillPrice: 1.1182,
    fillQty: 500000,
    orderId: "ORD-20260112-0001",
    venue: "HotspotFX",
  },

  {
    broker: "HSBC",
    execId: "EXEC-20260113-2001",
    executionTime: "2026-01-13T08:52:44-06:00",
    fillPrice: 146.2,
    fillQty: 2000000,
    orderId: "ORD-20260113-0001",
    venue: "HSBC-FX",
  },

  {
    broker: "Goldman Sachs",
    execId: "EXEC-20260113-2002",
    executionTime: "2026-01-13T09:08:12-06:00",
    fillPrice: 455.14,
    fillQty: 4000,
    orderId: "ORD-20260113-0002",
    venue: "ARCA",
  },

  {
    broker: "J.P. Morgan",
    execId: "EXEC-20260114-3001",
    executionTime: "2026-01-14T09:27:22-06:00",
    fillPrice: 160.2,
    fillQty: 6000,
    orderId: "ORD-20260114-0001",
    venue: "NYSE",
  },

  {
    broker: "Citadel Securities",
    execId: "EXEC-20260114-3002",
    executionTime: "2026-01-14T10:21:14-06:00",
    fillPrice: 71.6,
    fillQty: 20,
    orderId: "ORD-20260114-0003",
    venue: "CME",
  },

  {
    broker: "Goldman Sachs",
    execId: "EXEC-20260115-4001",
    executionTime: "2026-01-15T09:05:41-06:00",
    fillPrice: 92.85,
    fillQty: 90000,
    orderId: "ORD-20260115-0001",
    venue: "NASDAQ",
  },

  {
    broker: "Morgan Stanley",
    execId: "EXEC-20260115-4002",
    executionTime: "2026-01-15T09:15:22-06:00",
    fillPrice: 372.4,
    fillQty: 3000,
    orderId: "ORD-20260115-0002",
    venue: "NASDAQ",
  },

  {
    broker: "Barclays",
    execId: "EXEC-20260116-5001",
    executionTime: "2026-01-16T09:20:16-06:00",
    fillPrice: 99.4,
    fillQty: 1500000,
    orderId: "ORD-20260116-0001",
    venue: "TRACE",
  },

  {
    broker: "Citadel Securities",
    execId: "EXEC-20260116-5002",
    executionTime: "2026-01-16T10:03:51-06:00",
    fillPrice: 55.12,
    fillQty: 15000,
    orderId: "ORD-20260116-0003",
    venue: "NYSE",
  },
];
