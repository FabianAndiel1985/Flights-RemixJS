import { css } from "styled-system/css";
import { Flex, Text, Button, Heading } from "@radix-ui/themes";

interface ArticleOverviewProps {
    title: string;
    summary: string;
    published_at:string;
    news_site:string;
  }

const ArticleOverview = ({title,summary,published_at,news_site}:ArticleOverviewProps) => {
  
    return (
    <>
        <div className={css({ border:"2px solid black", maxWidth:"600px" })}>
            <img/>
            <Heading> {title} </Heading>
            <br/>
            <Text> {summary}</Text>
            <br/>
            <br/>
            <Text> {news_site} | {published_at} </Text>
        </div>
    </>
  )
}

export default ArticleOverview