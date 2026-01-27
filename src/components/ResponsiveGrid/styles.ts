import { type SxProps, type Theme } from "@mui/material";

/**
 * @see `node_modules/react-grid-layout/css/styles.css`
 */
export const reactGridLayout: SxProps<Theme> = (theme) => {
  const {
    palette: { primary },
    shape: { borderRadius },
  } = theme;

  return {
    ".react": {
      "&-grid": {
        "&-layout": {
          position: "relative",
          transition: "height 200ms ease",
        },
        "&-item": {
          img: {
            pointerEvents: "none",
            userSelect: "none",
          },
          "&.cssTransforms": {
            transitionProperty: "transform, width, height",
          },
          "&.resizing": {
            transition: "none",
            willChange: "width, height",
            zIndex: 1,
          },
          "&.react-draggable-dragging": {
            transition: "none",
            willChange: "transform",
            zIndex: "3",
          },
          "&.dropping": {
            visibility: "hidden",
          },
          "&.react-grid-placeholder": {
            background: primary.light,
            borderRadius: `${borderRadius}px`,
            opacity: "0.1",
            transitionDuration: "100ms",
            userSelect: "none",
            zIndex: "2",
            "&.placeholder-resizing": {
              transition: "none",
            },
          },
          "> .react-resizable-handle": {
            height: "20px",
            opacity: "0",
            position: "absolute",
            width: "20px",
            "&:after": {
              borderBottom: "2px solid rgba(0, 0, 0, 0.4)",
              borderRight: "2px solid rgba(0, 0, 0, 0.4)",
              bottom: "3px",
              content: "''",
              height: "5px",
              position: "absolute",
              right: "3px",
              width: "5px",
            },
            "&.react-resizable-handle": {
              "&-sw": {
                bottom: 0,
                cursor: "sw-resize",
                left: 0,
                transform: "rotate(90deg)",
              },
              "&-se": {
                bottom: 0,
                cursor: "se-resize",
                right: 0,
              },
              "&-nw": {
                cursor: "nw-resize",
                left: 0,
                top: 0,
                transform: "rotate(180deg)",
              },
              "&-ne": {
                cursor: "ne-resize",
                right: 0,
                top: 0,
                transform: "rotate(270deg)",
              },
              "&-w, &-e": {
                cursor: "ew-resize",
                marginTop: "-10px",
                top: "50%",
              },
              "&-w": {
                left: 0,
                transform: "rotate(135deg)",
              },
              "&-e": {
                right: 0,
                transform: "rotate(315deg)",
              },
              "&-n, &-s": {
                cursor: "ns-resize",
                left: "50%",
                marginLeft: "-10px",
              },
              "&-n": {
                top: 0,
                transform: "rotate(225deg)",
              },
              "&-s": {
                bottom: 0,
                transform: "rotate(45deg)",
              },
            },
          },
          "&:hover": {
            "> .react-resizable-handle": {
              opacity: 1,
            },
          },
        },
        "&-resizable": {
          "&-hide": {
            "> .react-resizable-handle": {
              display: "none",
            },
          },
        },
      },
    },
  };
};
