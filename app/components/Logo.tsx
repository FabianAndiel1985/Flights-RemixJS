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
          position: "relative",
          pt: "10px",
          mb: "40px",
        })}
      >
        <div
          className={cx(
            flexCenter,
            css({
              width: "50%",
              margin: "auto",
              height: "80px",
              border: "2px solid black",
            })
          )}
        >
          <Heading>Hello Im the Logo</Heading>
        </div>
      </div>
    </>
  );
};

export default Logo;
