import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  async search(query: string) {
    try {
      return {
        articles: [],
      };
    } catch (error) {}
  }
}
