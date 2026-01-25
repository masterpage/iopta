"use client";

import { Dashboard, DashboardTabs, DashType } from "@/features";
import { useState } from "react";

export function HomePage() {
  const [dashType, setDashType] = useState<DashType>(DashType.FUNDS);

  return (
    <>
      <DashboardTabs onChange={setDashType} />
      <Dashboard type={dashType} />
    </>
  );
}
