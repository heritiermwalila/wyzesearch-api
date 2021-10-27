interface IArticleMultimedia {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: number;
  width: number;
}
interface IArticleHeadline {
  main: string;
  print_headline: string;
  name: string;
  subtype: string;
}

interface IArticleKeyWords {
  name: string;
  value: string;
  rank: number;
  major: string;
}
export interface IArticle {
  web_url: string;
  snippet: string;
  print_page: string;
  source: string;
  multimedia: IArticleMultimedia[];
  headline: IArticleHeadline;
  keywords: IArticleKeyWords[]
  pub_date: string;
  document_type: string;
  news_desk: string;
  _id: string;
  score: number;
  uri: string
}

export interface IBookReview {
  url: string;
  publication_dt: string;
  book_title: string;
  book_author: string;
  summary: string;
  isbtn13: string[]
}

export interface IBook {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  primary_isbn10: string;
  primary_isbn13: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string
  contributor_note: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  [key: string]: any

}

export interface IMovie {
  display_title: string;
  mpaa_rating: string;
  critis_pick: number;
  headline: string;
  summary_short: string;
  publication_date: string;
  opening_date: string;
  date_updated: string;
  link: {
    type: string;
    url: string;
    suggested_link_text?: string;
  }
  multimedia: {
    type: string;
    src: {
      height: number
      width: number
    }
  }
}

interface IStorieMultimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}
export interface IStorie {
  section: string;
  subsection?: string
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  update_date: string;
  publish_date: string;
  des_facet: string[];
  org_facet?: string[];
  per_facet: string[]
  geo_facet?: string[]
  multimedia: IStorieMultimedia[]
}

export interface ISearchResponse {
  articles: IArticle[];
  books: IBook[];
  movies: IMovie[];
  stories: IStorie[];
}

export interface ISearchQuery {
  key: string;
  value: string
}