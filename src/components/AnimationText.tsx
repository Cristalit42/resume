import React, { type ReactNode } from "react";

const DELAY_STEP = 0.02;

/**
 * Разбивает текст на слова-span'ы прямо при рендере,
 * чтобы React сам управлял DOM (без ручного replaceWith).
 */
export function splitWords(node: ReactNode, counter = { i: 0 }): ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
      .split(/(\s+)/)
      .map((part, idx) =>
        part.trim() ? (
          <span
            key={idx}
            className="animate-word"
            style={{ transitionDelay: `${counter.i++ * DELAY_STEP}s` }}
          >
            {part}
          </span>
        ) : (
          part
        )
      );
  }

  if (Array.isArray(node)) {
    return node.map((child, idx) => (
      <React.Fragment key={idx}>{splitWords(child, counter)}</React.Fragment>
    ));
  }

  if (
    React.isValidElement<{ children?: ReactNode }>(node) &&
    node.props.children !== undefined
  ) {
    return React.cloneElement(node, undefined, splitWords(node.props.children, counter));
  }

  return node;
}
