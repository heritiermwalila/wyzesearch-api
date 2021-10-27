import { Controller, Get, HttpException, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { searchCategories } from './app/utils';
import { AppService } from './services/app.service';
import { ArticleService } from './services/article.service';
import { BookService } from './services/book.service';
import { MovieService } from './services/movie.service';
import { StoryService } from './services/storie.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly articleService: ArticleService,
    private readonly bookService: BookService,
    private readonly movieService: MovieService,
    private readonly storyService: StoryService,
  ) {}

  @Post('/search')
  async search() {
    try {
    } catch (error) {
      throw new HttpException(
        {
          status: error?.status || 500,
          error: error?.error || 'Internal server error',
        },
        500,
      );
    }
  }

  @Get('/categories')
  async getSearchCategory(@Res() res: Response) {
    try {
      return res.status(200).json({
        status: 200,
        data: searchCategories,
      });
    } catch (error) {
      throw new HttpException(
        {
          status: error?.status || 500,
          error: error?.error || 'Internal server error',
        },
        500,
      );
    }
  }
}
