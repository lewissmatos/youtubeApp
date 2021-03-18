import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { YoutubeResponse } from '../models/youtube.model';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url: string = 'https://www.googleapis.com/youtube/v3'
  private apiKey: string = 'AIzaSyAn2SuxrMYu6dPyIeid8eIlqQ1r0tfE3Dg'
  private playlist: string = 'UU0_95MpNlRz9x7JmsXBClZA'
  private nextPageToken: string = ''

  constructor(private http: HttpClient) {

  }

  getVideos() {

    const url = `${this.url}/playlistItems`

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '9')
      .set('playlistId', this.playlist)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken)

    return this.http.get<YoutubeResponse>(url, { params })
      .pipe(


        map(resp => {
          this.nextPageToken = resp.nextPageToken
          return resp.items
        }),

        map(items => items.map(video => video.snippet))
      )

  }

}
