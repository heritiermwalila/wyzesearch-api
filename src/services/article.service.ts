import { Injectable } from '@nestjs/common';
import { NyTimesArticleProvider } from 'src/lib/nytimes.article';
import { IArticle } from './service.dto';

@Injectable()
export class ArticleService {

  constructor(private articleProvider: NyTimesArticleProvider){}

  /**
   * Search articles by the passed arg
   * @param {string} query 
   * @returns 
   */
  async search(query: {key: string; value: string}): Promise<{articles: IArticle[]}> {
    try {
      return {
        articles: await this.articleProvider.search(query)
      };
    } catch (error) {}
  }

  /**
   * 
   */
  async getLatest(){
    try {
      return await this.articleProvider.getLatest()
    } catch (error) {
      
    }
  }
}
