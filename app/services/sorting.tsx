export const sortAlphabetically = (results:[]):void=> {
  results.sort((a:any, b:any) => {
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

export const sortPublishingDate = (results:[]):void=> {
  results.sort((a:any, b:any) => 
    Date.parse(b.published_at) - Date.parse(a.published_at)
  )
}
