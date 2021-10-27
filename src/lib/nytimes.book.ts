import { Injectable } from '@nestjs/common';

@Injectable()
export class NyTimesBookProvider {
  private endpoint = '/books/v3';
}
