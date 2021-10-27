import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { ArticleService } from './services/article.service';
import { BookService } from './services/book.service';
import { MovieService } from './services/movie.service';
import { StoryService } from './services/storie.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ArticleService,
    BookService,
    MovieService,
    StoryService,
  ],
})
export class AppModule {}
