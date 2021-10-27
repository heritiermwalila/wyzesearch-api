import { Injectable } from '@nestjs/common';
import { ArticleService } from './article.service';
import { BookService } from './book.service';
import { MovieService } from './movie.service';
import { ISearchQuery, ISearchResponse } from './service.dto';
import { StoryService } from './storie.service';

export type SearchType = 'articles' | 'movies' | 'stories' | 'books';

export interface IRequestException {
  status: number;
  error: string;
}

@Injectable()
export class AppService {
  constructor(
    private readonly articleService: ArticleService,
    private readonly bookService: BookService,
    private readonly movieService: MovieService,
    private readonly storyService: StoryService,
  ) {}
  /**
   * Do a global search for articles, books, movies and stories
   * @param query
   */
  async search(query: ISearchQuery): Promise<ISearchResponse> {
    try {
      /** We can do promise.all if we want to request all entities */
      const data = (await Promise.race([
        this.articleService.search(query),
        this.bookService.search(query),
        this.movieService.search(query),
        this.storyService.search(query),
      ])) as ISearchResponse;
      return data;
    } catch (error) {}
  }

  /**
   * Search by type
   * @param type //articles, movies, stories, books
   */
  async searchByType(
    type: SearchType,
    opts?: Record<string, any>,
  ): Promise<Partial<ISearchResponse> | IRequestException | null> {
    try {
      switch (type) {
        case 'articles': {
          return {
            articles: await this.articleService.getLatest(),
          };
        }
        case 'books': {
          return {
            books: await this.bookService.getLatest(),
          };
        }
        case 'movies': {
          return {
            movies: await this.movieService.getCriticsReviews(),
          };
        }
        case 'stories': {
          return {
            stories: await this.storyService.getStoryBy(opts?.type),
          };
        }
        default: {
          return {
            status: 404,
            error: 'Invalid search type',
          };
        }
      }
    } catch (error) {}
  }
}
