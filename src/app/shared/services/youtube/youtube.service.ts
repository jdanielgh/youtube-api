import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { YoutubeParams } from '../../models/youtube.model';
import { key } from '../../constants/youtube.constant';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private readonly urlSearchVideos = 'https://www.googleapis.com/youtube/v3/search/';

  constructor(private readonly http: HttpClient) { }

  getVideosWithParam(parameters: YoutubeParams): Observable<any> {
    console.log(parameters, key);
    const params = this.transformerModelToParams(parameters);
    return this.http.get<any>(this.urlSearchVideos, {params})
  }

  transformerModelToParams(params: YoutubeParams): HttpParams {
    return new HttpParams()
      .set('part', params.part)
      .set('maxResults', params.maxResults)
      .set('q', params.maxResults)
      .set('key', key);
  }

  getRecommendedVideos(): Observable<any> {
    return of();
  }
}
