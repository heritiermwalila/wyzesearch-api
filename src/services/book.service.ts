import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  async search(query: string) {
    try {
      return {
        books: [],
      };
    } catch (error) {}
  }
}
