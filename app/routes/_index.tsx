import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { css } from "styled-system/css";
import ArticleOverview from "~/components/ArticleOverview";
import Logo from "~/components/Logo";
import { useState } from "react";
import { sortAlphabetically, sortPublishingDate } from "~/services/sorting";
import { ApiResponse, Article, Sorting } from "~/types/types";
import { Searchbar } from "~/components/Searchbar";
import { SortIcon } from "~/components/SortIcon";

export const meta: MetaFunction = () => {
  return [
    { title: "Flights" },
    { name: "description", content: "Welcome to the Flights App" },
  ];
};

export const loader: LoaderFunction = async (): Promise<ApiResponse> => {
  const url = "https://api.spaceflightnewsapi.net/v4/articles";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data: ApiResponse = await response.json();
  return data;
};

export default function Index() {
  let { results }: { results: Article[] } = useLoaderData<typeof loader>();
  const [query, setQuery] = useState<string>("");
  const [tempQuery, setTempQuery] = useState<string>("");
  const [wayOfSorting, setWayOfSorting] = useState<Sorting>(
    Sorting.Alphabetically
  );

  switch (wayOfSorting) {
    case Sorting.PublishingDate:
      sortPublishingDate(results);
      break;
    default:
      sortAlphabetically(results);
      break;
  }

  if (query !== "") {
    const lowerCaseQuery: string = query.toLocaleLowerCase();
    results = results.filter((elment: any) =>
      elment.title.toLowerCase().includes(lowerCaseQuery)
    );
  }

  return (
    <>
      <Logo />

      <div
        className={css({
          position: "relative",
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr 4fr 1fr",
          },
        })}
      >
        <div></div>
        <div>
          <Searchbar
            tempQuery={tempQuery}
            setTempQuery={setTempQuery}
            setQuery={setQuery}
          />
        </div>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            pl: "20px",
          })}
        >
          <SortIcon
            wayOfSorting={wayOfSorting}
            setWayOfSorting={setWayOfSorting}
          />
        </div>
      </div>

      <div
        className={css({
          pl: { lg: "20px" },
          padding: { smToLg: "20px" },
          display: { smToLg: "flex" },
          justifyContent: { smToLg: "center" },
        })}
      >
        <ul>
          {results.length > 0 ? (
            results.map((result: any) => (
              <li key={result.id}>
                <ArticleOverview
                  imgSrc={result.image_url}
                  title={result.title}
                  summary={result.summary}
                  news_site={result.news_site}
                  published_at={result.published_at}
                  imgLink={result.url}
                />
              </li>
            ))
          ) : (
            <p>Keine Artikel zu Ihrer Suche</p>
          )}
        </ul>
      </div>
    </>
  );
}
