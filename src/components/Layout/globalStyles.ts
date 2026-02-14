import { css } from "@emotion/react";

export const globalStyles = () => css`
  .grecaptcha-badge {
    visibility: hidden;
  }

  .nobreak {
    white-space: nowrap;
  }

  svg:focus,
  svg *:focus {
    outline: none;
  }
`;
