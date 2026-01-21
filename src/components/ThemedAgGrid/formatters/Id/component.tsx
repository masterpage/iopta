import { ICellRendererParams } from "ag-grid-community";
import { Box, BoxProps } from "@mui/material";

type IdProps = BoxProps & Pick<ICellRendererParams, "value">;

export function Id(props: IdProps) {
  const { value, ...boxProps } = props;

  return (
    <Box
      component="span"
      {...boxProps}
      sx={(theme) => {
        const {
          typography: { fontFamilyMono },
        } = theme;

        return {
          fontFamily: fontFamilyMono,
          fontSize: "small",
        };
      }}
    >
      {value}
    </Box>
  );
}
