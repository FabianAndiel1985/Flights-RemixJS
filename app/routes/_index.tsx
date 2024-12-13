import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { css } from "styled-system/css";
import ArticleOverview from "~/components/ArticleOverview";
import Logo from "~/components/Logo";
import { Flex, Text, Button } from "@radix-ui/themes";

 
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
  const {results} = useLoaderData<typeof loader>();
  console.log(results)

  return (    
    <>
      <Logo/>
      <ul>
      { results.length > 0 &&
        results.map((result:any)=>(
          <li key={result.id}>
            <ArticleOverview  imgSrc={result.image_url} title={result.title} summary={result.summary} news_site={result.news_site} published_at={result.published_at} imgLink={result.url} />
          </li>
        ))
      }
    </ul>
    </>
  );
}
