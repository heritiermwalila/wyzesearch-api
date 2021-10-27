import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Res
} from '@nestjs/common';
import { Response } from 'express';
import { searchCategories } from './app/utils';
import { AppService, SearchType } from './services/app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Post('/search')
  async search(@Body() payload: any, @Res() res: Response) {
    try {
      
      const data = await this.appService.search(payload?.query)
      return res.status(200).json({ status: 200, data });
    } catch (error) {
      this.throwException(error)
    }
  }

  @Post('/search/:type')
  async searchByType(@Param('type') type: SearchType, @Res() res: Response){

    try {
      const data = await this.appService.searchByType(type);
      return res.status(200).json({data})
    } catch (error) {
      this.throwException(error)
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
      this.throwException(error)
    }
  }

  private throwException(error: any){
    throw new HttpException(
      {
        status: error?.status || 500,
        error: error?.error || 'Internal server error',
      },
      500,
    );
  }
}
