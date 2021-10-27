import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class NyTime {
  private readonly API_HOST = 'https://api.nytimes.com/svc';
  private readonly API_KEY = process.env.NYTIME_API_KEY;

  constructor(private http: HttpService) {}

  /**
   * Send a quest to https://api.nytimes.com api
   * @param path
   * @param q
   * @param filter
   * @returns
   */
  request(path: string, q: string, filter?: string): Promise<any> {
    try {
      let endpoint = `${this.API_HOST}${path}.json?q=${q}&api_key=${this.API_KEY}`;
      if (filter && Object.values(filter).length > 0) {
        endpoint += `&filter=${filter}`;
      }
      return new Promise((resolve, reject) => {
        this.http.get(endpoint).subscribe({
          next: (response) => resolve(response),
          error: (error) => reject(error),
        });
      });
    } catch (error) {}
  }
}
