import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "./index.css?url";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { css } from "styled-system/css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={css({
        width: "100%",
        maxWidth: "100%",
        margin: "0",
        padding: "0",
        overflowX: "hidden",
        boxSizing: "border-box",
      })}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body
        className={css({
          width: "100%",
          maxWidth: "100%",
          margin: "0",
          padding: "0",
          overflowX: "hidden",
          boxSizing: "border-box",
        })}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Theme>
        <Outlet />
      </Theme>
    </>
  );
}
