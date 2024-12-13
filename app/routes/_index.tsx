import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { css } from "styled-system/css";
import ArticleOverview from "~/components/ArticleOverview";
import Logo from "~/components/Logo";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";

 
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
  let {results} = useLoaderData<typeof loader>();
  const [query, setQuery] = useState("");


  if(query !== "") {
    const lowerCaseQuery = query.toLocaleLowerCase();
    results = results.filter((elment:any)=>elment.title.toLowerCase().includes(lowerCaseQuery));
  }

  return (    
    <>
      <Logo/>
    <div   
        className={css({
        display: "flex",
        justifyContent: "center"
      })} >
      <TextField.Root  placeholder="Search" className={css({width:"200px"})} 
      value={query} onChange={(e => {setQuery(e.target.value)})}>
        <TextField.Slot side={"right"}>
          <MagnifyingGlassIcon height="16" width="16"/>
        </TextField.Slot>
      </TextField.Root>
    </div>

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
