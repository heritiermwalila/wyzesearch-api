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
  request(
    path: string,
    q?: { key: string; value: string },
    filter?: string,
  ): Promise<any> {
    try {
      /**
       * can be done in a very simple and clean way. just don't have time
       * [endpoint, query, filter, api_key].join('&') or use encodeURI() or encodeURIComponent API
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
       */
      let endpoint = `${this.API_HOST}${path}.json`;
      if (q) {
        endpoint += `?${q?.key}=${q?.value}&api_key=${this.API_KEY}`;
      } else if (filter && Object.values(filter).length > 0) {
        endpoint += `&filter=${filter}`;
      } else {
        endpoint += `?api_key=${this.API_KEY}`;
      }
      return new Promise((resolve, reject) => {
        this.http.get(endpoint).subscribe({
          next: (response) => resolve(response),
          error: (error) => reject(error),
          complete: () => console.log('Request completed'),
        });
      });
    } catch (error) {}
  }
}
