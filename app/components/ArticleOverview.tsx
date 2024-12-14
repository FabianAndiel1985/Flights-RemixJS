import { css } from "styled-system/css";
import { Text, Heading } from "@radix-ui/themes";
import Image from "./Image";

interface ArticleOverviewProps {
  imgSrc: string;
  title: string;
  summary: string;
  published_at: string;
  news_site: string;
  imgLink: string;
}

const ArticleOverview = ({
  title,
  summary,
  published_at,
  news_site,
  imgSrc,
  imgLink,
}: ArticleOverviewProps) => {
  return (
    <>
      <div className={css({ maxWidth: "800px", mt: "80px" })}>
        <Image imgSrc={imgSrc} imgLink={imgLink} />
        <br />
        <Heading> {title} </Heading>
        <br />
        <Text> {summary}</Text>
        <br />
        <br />
        <Text>
          {news_site} | {published_at}
        </Text>
      </div>
    </>
  );
};

export default ArticleOverview;
