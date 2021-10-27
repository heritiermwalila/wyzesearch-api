import { Injectable } from '@nestjs/common';

@Injectable()
export class NyTimesMovieProvider {
  private readonly endpoint = '/movies/v2/reviews/';
}
