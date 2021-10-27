import { Injectable } from '@nestjs/common';
import { IBook, ISearchQuery } from 'src/services/service.dto';
import { NyTime } from './nytime';

@Injectable()
export class NyTimesBookProvider {
  private endpoint = '/books/v3/lists/current/hardcover-fiction';
  private reviewsEndpoint = '/reviews';

  constructor(private nytime: NyTime){}

  /**
   * Will require more work, comeback later
   * @param query 
   */
  async search(query: ISearchQuery){ 
    /** arg query can be {key: string; value: string} 
     * so we can search by keys and value 
     * books?.filter(book => book?.[query?.key] === query?.value)
     * */

    try {
      const books = await this.nytime.request(this.endpoint) as IBook[] //will return all latest books

      return  books?.filter(book => book?.[query?.key] === query?.value)
    } catch (error) {
      
    }
    
  }

  async getLatest(){
    try {
      return await this.nytime.request(this.endpoint) as IBook[] //will return all
    } catch (error) {
      
    }
  }
}
