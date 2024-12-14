import { Heading } from "@radix-ui/themes";
import { ReactElement } from "react";
import { css, cx } from "styled-system/css";

const Logo = (): ReactElement => {
  const flexCenter: string = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <div className={cx(flexCenter, css({ height: "100px", mb: "40px" }))}>
      <div
        className={cx(
          flexCenter,
          css({ width: "400px", height: "80px", border: "2px solid black" })
        )}
      >
        <Heading>Hello Im the Logo</Heading>
      </div>
    </div>
  );
};

export default Logo;
