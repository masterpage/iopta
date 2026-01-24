import {
  Box,
  useTheme,
  Typography,
} from "@mui/material";

export function QuickFactTile(props: { title: string; value: React.ReactNode }) {
  const { title, value } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        px: 2,
        py: 1.5,
        height: "100%",
        backgroundColor: theme.palette.action.hover,
      }}
    >
      <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary }}>
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 0.75,
          fontFamily: theme.typography.fontFamilyMono,
          fontSize: "1.25rem",
          lineHeight: 1.2,
          color: theme.palette.text.primary,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}