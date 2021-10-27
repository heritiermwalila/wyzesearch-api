import { Injectable } from '@nestjs/common';
import { IMovie, ISearchQuery } from './service.dto';

@Injectable()
export class MovieService {
  /**
   * Search moview review
   * @param query 
   * @returns 
   */
  async search(query: ISearchQuery): Promise<{movies: IMovie[]}> {
    try {
      return {
        movies: [],
      };
    } catch (error) {}
  }

  /**
   * Get movie reviews that are critics' picks:
   */
  async getCriticsReviews(){
    try {
      return []
    } catch (error) {
      
    }
  }
}
