"use client";

import {
  DesignSwitcher,
  HomeDefault,
  HomeTerminal,
  HomeTerminalOp,
  HomeCards,
  HomeCompact,
  type DesignVariant,
  type HomeVariantsProps,
} from "./home-variants";

export function HomeClient(props: HomeVariantsProps & { design: DesignVariant }) {
  const { design, ...variantProps } = props;

  return (
    <>
      {design === "terminal" && <HomeTerminal {...variantProps} />}
      {design === "terminal-op" && <HomeTerminalOp {...variantProps} />}
      {design === "cards" && <HomeCards {...variantProps} />}
      {design === "compact" && <HomeCompact {...variantProps} />}
      {design === "default" && <HomeDefault {...variantProps} />}
      <DesignSwitcher current={design} />
    </>
  );
}
