import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
   Outlet
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "./index.css?url";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";



export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (<>
          <Theme>
            <Outlet/>
          </Theme>
        </>)
}
