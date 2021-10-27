import { Injectable } from '@nestjs/common';
import { IArticle } from 'src/services/service.dto';
import { NyTime } from './nytime';

@Injectable()
export class NyTimesArticleProvider {
  private readonly endpoint = '/search/v2';
  constructor(private nytime: NyTime) {}

  /**
   * Search articles
   * @param q
   */
  async search(q: { key: string; value: string }): Promise<IArticle[]> {
    try {
      return await this.nytime.request(`${this.endpoint}/articlesearch`, q);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Get top latest articles
   * @returns
   */
  async getLatest(): Promise<IArticle[]> {
    try {
      return await this.nytime.request(`${this.endpoint}/articlesearch`);
    } catch (error) {}
  }
}
