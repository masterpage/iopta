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
import { Placeholder } from "../Placeholder";
import { resolveSecurityDetails } from "@/utils/resolveSecurityDetails";
import { useMemo } from "react";

export interface SecurityDialogProps
  extends Omit<DialogProps, "security" | "open"> {
  security: string | null;
  onClose: () => void;
}

export function SecurityDialog(props: SecurityDialogProps) {
  const { security, onClose, ...dialogProps } = props;
  const {
    palette: { text },
    typography: { fontFamilyMono },
  } = useTheme();

 const securityDetails = useMemo(() => {
  if (!security) return null
  return resolveSecurityDetails(security)
 }, [security])

  return (
    <Dialog
      {...dialogProps}
      maxWidth="lg"
      onClose={onClose}
      open={Boolean(security)}
    >
      <DialogTitle>
        <Box
          sx={{
            fontFamily: fontFamilyMono,
          }}
        >
          {security}
        </Box>
        <Box sx={{ color: text.secondary, fontSize: "small" }}>
          [Security Name]
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
              <Placeholder height={75}>Last Price</Placeholder>
            </Grid>
            <Grid size={{ md: 1 }}>
              <Placeholder height={75}>Day's Change</Placeholder>
            </Grid>
            <Grid size={{ md: 1 }}>
              <Placeholder height={75}>Prior Day's Volume</Placeholder>
            </Grid>
          </Grid>
          <Grid size={{ md: 4 }}>
            <Placeholder height={200}>A</Placeholder>
          </Grid>
          <Grid size={{ md: 4 }}>
            <Placeholder height={200}>B</Placeholder>
          </Grid>
          <Grid size={{ md: 4 }}>
            <Placeholder height={200}>C</Placeholder>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
