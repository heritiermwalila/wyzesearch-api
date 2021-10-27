import { Injectable } from '@nestjs/common';
import { NyTime } from './nytime';

@Injectable()
export class NyTimesArticleProvider {
  private readonly endpoint = '/search/v2';
  constructor(private nytime: NyTime) {}
  async search(q: string) {
    try {
      const response = await this.nytime.request(
        `${this.endpoint}/articlesearch`,
        q,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}
