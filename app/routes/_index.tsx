import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { css } from "styled-system/css";
import Logo from "~/components/Logo";

 
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const url = 'https://api.spaceflightnewsapi.net/v4/articles';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  return json;
}
 
export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (    
    <>
      <Logo/>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
    </>
  );
}
