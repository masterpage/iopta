import { isValidElement, PropsWithChildren } from "react";
import reactStringReplace from "react-string-replace";

import { Box, BoxProps } from "@mui/material";

import type { Smcp, SmcpOptions } from "./types";

export function StyledSmcp(props: BoxProps<"span", SmcpOptions>) {
  const { allCaps, children, ...spanProps } = props;
  const serializableSpanProps = JSON.parse(JSON.stringify(spanProps));

  return (
    <Box
      component="span"
      data-test="StyledSmcp"
      sx={{
        display: "contents",
        fontVariantCaps: allCaps ? "all-small-caps" : "small-caps",
        textTransform: "lowercase",
      }}
      {...serializableSpanProps}
    >
      {children}
    </Box>
  );
}

/**
 * Finds two (or more) consequetive uppercased letters in the given `text` string,
 * and wraps it with `<span class="smcp">`.
 */
export const smcp: Smcp = (...args) => {
  const [node, options] = args;
  const { allCaps } = options || {};
  /**
   * Finds two (or more) consequetive uppercased chars and/or digits.
   */
  const twoMoreUppercaseLetters = /\b([\p{Lu}\d.]{2,})\b/gu;

  if (typeof node === "string") {
    return reactStringReplace(node, twoMoreUppercaseLetters, (match, i) => (
      <StyledSmcp key={i} allCaps={allCaps} data-testid="smcp">
        {match}
      </StyledSmcp>
    ));
  }

  if (isValidElement<PropsWithChildren>(node)) {
    const { props } = node;
    const children = Array.isArray(props.children)
      ? props.children.map((c) => (isValidElement(c) ? smcp(c) : c))
      : smcp(props.children);

    return {
      ...node,
      props: {
        ...node.props,
        children,
      },
    };
  }

  return node;
};

export const isServer = typeof window === "undefined";
