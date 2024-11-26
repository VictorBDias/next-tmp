"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { Footer, Header } from "@/components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: ReactNode;
}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (isHydrated)
    return (
      <div className="App">
        <Header />
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
          <main className="AppBody">{children}</main>
        </StyleSheetManager>
        <Footer />
      </div>
    );
}
