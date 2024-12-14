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
    <>
      <div
        className={css({
          display: "grid",
          height: "100px",
          mb: "40px",
          gridTemplateColumns: "1fr 3.2fr 1fr",
        })}
      >
        <div></div>
        <div
          className={cx(
            flexCenter,
            css({
              height: "80px",
              border: "2px solid black",
            })
          )}
        >
          <Heading>Hello Im the Logo</Heading>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Logo;
