import { Box, IconButton, IconButtonProps } from '@mui/material';

const rem = (n: number) => `${n}rem`;

const ICON_BUTTON_HEIGHT = 2;
const ICON_HEIGHT: number = 1;
const ICON_WIDTH: number = 1.5;
const LINE_HEIGHT: number = 0.125;

const TRANSITION_TIME = '0.4s';
const ROTATION = '45deg';
const TRANSLATE_Y = rem(ICON_HEIGHT / 2);
const TRANSLATE_X = 0;

export interface HamburgerProps extends IconButtonProps {
  open: boolean;
}

export function Hamburger(props: Readonly<HamburgerProps>) {
  const { open, ...propsToggleButton } = props;

  return (
    <IconButton
      aria-controls="hamburger-menu"
      aria-haspopup="true"
      aria-label="Toggle navigation menu"
      sx={{
        height: rem(ICON_BUTTON_HEIGHT),
        marginLeft: rem(-(ICON_BUTTON_HEIGHT - ICON_WIDTH) / 2),
        padding: 'unset',
        width: rem(ICON_BUTTON_HEIGHT),
      }}
      title="Menu"
      {...propsToggleButton}
    >
      <Box
        sx={{
          '> *': {
            backgroundColor: 'text.primary',
            height: rem(LINE_HEIGHT),
            left: 0,
            position: 'absolute',
            transition: `all ${TRANSITION_TIME}`,
            width: rem(ICON_WIDTH),
          },
          height: rem(ICON_HEIGHT),
          marginBottom: rem(LINE_HEIGHT),
          position: 'relative',
          width: rem(ICON_WIDTH),
        }}
      >
        <Box
          component="span"
          sx={{
            top: 0,
            ...(open
              ? {
                  transform: `translateY(${TRANSLATE_Y}) translateX(${TRANSLATE_X}) rotate(${ROTATION})`,
                }
              : {}),
          }}
        >
          &nbsp;
        </Box>
        <Box
          component="span"
          sx={{ top: '50%', ...(open ? { opacity: 0 } : {}) }}
        >
          &nbsp;
        </Box>
        <Box
          component="span"
          sx={{
            top: '100%',
            ...(open
              ? {
                  transform: `translateY(-${TRANSLATE_Y}) translateX(${TRANSLATE_X}) rotate(-${ROTATION})`,
                }
              : {}),
          }}
        >
          &nbsp;
        </Box>
      </Box>
    </IconButton>
  );
}
