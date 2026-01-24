import {

  Box,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";


type KeyValueRow = {
  label: string;
  value: React.ReactNode;
};

export function KeyValueTable(props: { title?: string; rows: KeyValueRow[] }) {
  const { title, rows } = props;
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <TableContainer
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Table size="small" aria-label={title}>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={row.label}
                sx={{
                  backgroundColor:
                    idx % 2 === 0
                      ? theme.palette.action.hover
                      : "transparent",
                }}
              >
                <TableCell
                  sx={{
                    width: "45%",
                    color: theme.palette.text.secondary,
                    fontSize: "0.8125rem",
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  {row.label}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: theme.typography.fontFamilyMono,
                    fontSize: "0.8125rem",
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}