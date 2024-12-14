import { Article } from "~/types/types";

export const sortAlphabetically = (results:Article[]):void=> {
  results.sort((a:Article, b:Article) => {
    const titleA = a.title.toLowerCase(); 
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  }
  )
}

export const sortPublishingDate = (results:Article[]):void=> {
  results.sort((a:Article, b:Article) => 
    Date.parse(b.published_at) - Date.parse(a.published_at)
  )
}
