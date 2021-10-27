import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  async search(query: string) {
    try {
      return {
        movies: [],
      };
    } catch (error) {}
  }
}
