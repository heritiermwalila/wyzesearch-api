import { Injectable } from '@nestjs/common';
import { NyTimesBookProvider } from 'src/lib/nytimes.book';
import { IBook, ISearchQuery } from './service.dto';

@Injectable()
export class BookService {
  constructor(private bookProvider: NyTimesBookProvider) {}
  /**
   * https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=
   * Search book
   * @param query
   * @returns
   */
  async search(query: ISearchQuery): Promise<{ books: IBook[] }> {
    try {
      return {
        books: await this.bookProvider.search(query),
      };
    } catch (error) {}
  }

  /**
   * https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=
   * Get latest books
   */
  async getLatest() {
    try {
      return await this.bookProvider.getLatest();
    } catch (error) {}
  }

  async searchByAuthorname(name: string) {
    try {
    } catch (error) {}
  }

  /**
   *
   * @param date
   */
  async searchByDate(date: string) {
    try {
    } catch (error) {}
  }

  async getReviewsBy(payload: {
    author?: string;
    isbn: string;
    title?: string;
  }) {
    try {
    } catch (error) {}
  }
}
