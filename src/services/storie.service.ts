import { Injectable } from '@nestjs/common';
import { ISearchQuery, IStorie } from './service.dto';


export type StoryType = 'arts' | 'home' | 'science' | 'us' | 'world'

@Injectable()
export class StoryService {

  /**
   * Search stories
   * @param query 
   * @returns 
   */
  async search(query: ISearchQuery, filter?: Record<string, any>): Promise<{stories: IStorie[]}> {
    try {
      return {
        stories: [],
      };
    } catch (error) {}
  }

  async getStoryBy(type: StoryType){
    try {
      return []
    } catch (error) {
      
    }
  }
}
