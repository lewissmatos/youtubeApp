import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.model';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Video[] = []
  nombreCanal = ''
  constructor(private ytService: YoutubeService) {

  }

  ngOnInit(): void {

    this.cargarVideos()
  }

  cargarVideos() {
    this.ytService.getVideos()
      .subscribe(resp => {

        this.videos.push(...resp)

        this.nombreCanal = this.videos[0].channelTitle
        console.log(this.videos)
      }

      )
  }

}
