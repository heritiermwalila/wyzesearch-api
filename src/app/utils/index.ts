export interface ISearchCategory {
  name: string;
  key: string;
}
export const searchCategories: ISearchCategory[] = [
  {
    name: 'Articles',
    key: 'articles',
  },
  {
    name: 'Books',
    key: 'books',
  },
  {
    name: 'Movie reviews',
    key: 'movies',
  },
  {
    name: 'Top stories',
    key: 'stories',
  },
];
