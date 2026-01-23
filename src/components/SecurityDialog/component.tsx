import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, type DialogProps } from '@mui/material';

interface SecurityDialogProps extends DialogProps {
  security?: string;
  onClose: () => void;
}

export function SecurityDialog(props: SecurityDialogProps) {
  const { security, onClose, ...dialogProps } = props;

  return (
    <Dialog {...dialogProps} open={Boolean(security)} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>Security details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {security ? `Security: ${security}` : ""}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}