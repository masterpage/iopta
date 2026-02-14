import { Dispatch, SetStateAction } from "react";

import { ICellRendererParams } from "ag-grid-community";
import { Link } from "@mui/material";

import { Id, SecurityDialogProps } from "@/components";

import { Order } from "src/data";

interface CellRendererSecurityProps extends ICellRendererParams<Order, string> {
  setSelectedSecurity: Dispatch<
    SetStateAction<SecurityDialogProps["security"]>
  >;
}

export function CellRendererSecurity(props: CellRendererSecurityProps) {
  const { data, setSelectedSecurity, value } = props;

  if (!value) return "";

  const formattedValue = <Id value={value} />;

  if (data) {
    const { securityType } = data;

    if (securityType === "Equity") {
      return (
        <Link
          onClick={() => {
            setSelectedSecurity(value);
          }}
          sx={{ cursor: "pointer" }}
        >
          {formattedValue}
        </Link>
      );
    }
  }

  return formattedValue;
}
