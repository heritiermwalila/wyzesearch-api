import { Injectable } from '@nestjs/common';
import { NyTime } from './nytime';

@Injectable()
export class NyTimesStorieProvider {
  private readonly endpoint = '/topstories/v2';
}
