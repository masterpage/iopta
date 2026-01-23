import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface SecurityDialogProps {
  security: string | null;
  onClose: () => void;
}

export function SecurityDialog(props: SecurityDialogProps) {
  const { security, onClose } = props;

  return (
    <Dialog open={Boolean(security)} onClose={onClose} maxWidth="lg" fullWidth>
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