import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  type DialogProps,
  Grid,
  Box,
  useTheme,
} from "@mui/material";
import { resolveSecurityDetails } from "@/utils/resolveSecurityDetails";
import { useMemo } from "react";
import { KeyValueTable } from "../KeyValueTable";
import { QuickFactTile } from "../QuickFactTile";

export interface SecurityDialogProps
  extends Omit<DialogProps, "security" | "open" | "onClose"> {
  security: string | null;
  onClose: () => void;
}

function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(n);
}



export function SecurityDialog(props: SecurityDialogProps) {
  const { security, onClose, ...dialogProps } = props;
  const {
    palette: { text },
    typography: { fontFamilyMono },
  } = useTheme();

  const securityDetails = useMemo(() => {
    if (!security) return null;
    return resolveSecurityDetails(security);
  }, [security]);

  return (
    <Dialog
      {...dialogProps}
      maxWidth="lg"
      onClose={onClose}
      open={Boolean(security)}
      fullWidth
    >
      <DialogTitle>
        <Box
          sx={{
            fontFamily: fontFamilyMono,
          }}
        >
          {securityDetails?.symbol ?? security}
        </Box>
        <Box sx={{ color: text.secondary, fontSize: "small" }}>
          {securityDetails?.companyName ?? ""}
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid
            columns={4}
            container
            minWidth={600}
            size={{ md: 12 }}
            spacing={1}
          >
            <Grid size={{ md: 1 }}>
              <QuickFactTile
                title="Last Price (USD)"
                value={
                  securityDetails == null
                    ? "-"
                    : formatCurrency(securityDetails.lastPrice)
                }
              />
            </Grid>
            <Grid size={{ md: 1 }}>
              <QuickFactTile
                title="Day's Change (%)"
                value={
                  securityDetails == null
                    ? "-"
                    : `${securityDetails.dayChange.toFixed(2)}%`
                }
              />
            </Grid>
            <Grid size={{ md: 1 }}>
              <QuickFactTile
                title="Prior Day Volume (Shares)"
                value={
                  securityDetails == null
                    ? "-"
                    : formatNumber(securityDetails.priorDayVolume)
                }
              />
            </Grid>
          </Grid>
          <Grid size={{ md: 4 }}>
            <KeyValueTable
              rows={
                securityDetails == null
                  ? [{ label: "Status", value: "No security selected" }]
                  : [
                      { label: "Symbol", value: securityDetails.symbol },
                      { label: "Company", value: securityDetails.companyName },
                      { label: "Issuer", value: securityDetails.issuer },
                      { label: "Sector", value: securityDetails.sector },
                      {
                        label: "Security Type",
                        value: securityDetails.securityType,
                      },
                      {
                        label: "Primary Exchange",
                        value: securityDetails.primaryExchange,
                      },
                    ]
              }
            />
          </Grid>
          <Grid size={{ md: 4 }}>
            <KeyValueTable
              rows={
                securityDetails == null
                  ? [{ label: "Status", value: "No security selected" }]
                  : [
                      {
                        label: "Market Cap",
                        value: formatCurrency(securityDetails.marketCap),
                      },
                      {
                        label: `ADV (${securityDetails.advType})`,
                        value: formatNumber(securityDetails.adv),
                      },
                      {
                        label: "Dividend",
                        value:
                          securityDetails.dividend == null
                            ? "—"
                            : formatCurrency(securityDetails.dividend),
                      },
                      {
                        label: "Ex-Dividend Date",
                        value: securityDetails.exDividendDate ?? "—",
                      },
                      {
                        label: "Record Date",
                        value: securityDetails.recordDate ?? "—",
                      },
                      {
                        label: "Pay Date",
                        value: securityDetails.payDate ?? "—",
                      },
                    ]
              }
            />
          </Grid>
          <Grid size={{ md: 4 }}>
            <KeyValueTable
              rows={
                securityDetails == null
                  ? [{ label: "Status", value: "No security selected" }]
                  : [
                      { label: "CUSIP", value: securityDetails.cusip },
                      { label: "ISIN", value: securityDetails.isin },
                      { label: "SEDOL", value: securityDetails.sedol },
                      { label: "RIC", value: securityDetails.ric },
                      { label: "Quick Code", value: securityDetails.quickCode },
                      { label: "PDP ID", value: securityDetails.pdpId },
                      {
                        label: "Country (Incorporation)",
                        value: securityDetails.countryOfIncorporation,
                      },
                      {
                        label: "Country (Issue)",
                        value: securityDetails.countryOfIssue,
                      },
                      {
                        label: "Country (Risk)",
                        value: securityDetails.countryOfRisk,
                      },
                    ]
              }
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
