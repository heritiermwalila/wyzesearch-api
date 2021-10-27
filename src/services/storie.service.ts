import { Injectable } from '@nestjs/common';

@Injectable()
export class StoryService {
  async search(query: string) {
    try {
      return {
        stories: [],
      };
    } catch (error) {}
  }
}
