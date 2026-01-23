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

  return (
    <Dialog
      {...dialogProps}
      maxWidth="lg"
      onClose={onClose}
      open={Boolean(security)}
    >
      <DialogTitle>
        <Box
          component="span"
          sx={{
            fontFamily: fontFamilyMono,
          }}
        >
          {security}
        </Box>{" "}
        <Box sx={{ color: text.secondary, fontSize: "small" }}>
          [Security Name]
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid size={{ md: 12 }}>
            <Placeholder height={75} minWidth={600}>
              Tiles
            </Placeholder>
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
