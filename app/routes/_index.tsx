import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { css } from "styled-system/css";
import ArticleOverview from "~/components/ArticleOverview";
import Logo from "~/components/Logo";
import { TextField } from "@radix-ui/themes";
import { LetterCaseUppercaseIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import {LapTimerIcon} from "@radix-ui/react-icons";
import { sortAlphabetically, sortPublishingDate } from "~/services/sorting";
import { ApiResponse, Sorting } from "~/types/types";
 
export const meta: MetaFunction = () => {
  return [
    { title: "Flights" },
    { name: "description", content: "Welcome to the Flights App" },
  ];
};

export const loader:LoaderFunction = async():Promise<ApiResponse> => {
  const url = 'https://api.spaceflightnewsapi.net/v4/articles';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data:ApiResponse = await response.json();
  return data;
}

export default function Index() {
  let {results} = useLoaderData<typeof loader>();
  const [query, setQuery] = useState("");
  const [tempQuery, setTempQuery] = useState(""); 
  const [wayOfSorting, setWayOfSorting]= useState<Sorting>(Sorting.Alphabetically);

  switch (wayOfSorting) {
    case Sorting.PublishingDate: 
        sortPublishingDate(results);
    break;
      default:
      	sortAlphabetically(results);
      break;
  }  

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
      })}>
      <TextField.Root  placeholder="Search" className={css({width:"200px"})} 
      value={tempQuery} onChange={(e => {setTempQuery(e.target.value)})}>
        <TextField.Slot side={"right"}  >
          <MagnifyingGlassIcon  height="16" width="16" onClick={(e)=>{setQuery(tempQuery)}}  className={css({_hover: { cursor: 'pointer' }})}/>
        </TextField.Slot>
      </TextField.Root>
      {
      wayOfSorting == Sorting.Alphabetically ? 
        <LapTimerIcon  
        className={css({_hover: { cursor: 'pointer' }, margin:"auto 0"})}
        onClick={()=>{setWayOfSorting(Sorting.PublishingDate)}}
        /> 
        :
         <LetterCaseUppercaseIcon  
         className={css({_hover: { cursor: 'pointer' },margin:"auto 0"})}
         onClick={()=>{setWayOfSorting(Sorting.Alphabetically)}}
         />
      }
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
