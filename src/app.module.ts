import { HttpModule, HttpService, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NyTime } from './lib/nytime';
import { NyTimesArticleProvider } from './lib/nytimes.article';
import { NyTimesBookProvider } from './lib/nytimes.book';
import { AppService } from './services/app.service';
import { ArticleService } from './services/article.service';
import { BookService } from './services/book.service';
import { MovieService } from './services/movie.service';
import { StoryService } from './services/storie.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    ArticleService,
    BookService,
    MovieService,
    StoryService,
    NyTimesArticleProvider,
    NyTimesBookProvider,
    NyTime
  ],
})
export class AppModule {}
