import { Injectable } from '@nestjs/common';
import { IMovie } from './service.dto';

@Injectable()
export class MovieService {
  /**
   * Search moview review
   * @param query 
   * @returns 
   */
  async search(query: string): Promise<{movies: IMovie[]}> {
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
