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
    key: 'book',
  },
  {
    name: 'Movie reviews',
    key: 'movie reviews',
  },
  {
    name: 'Top stories',
    key: 'top stories',
  },
];
