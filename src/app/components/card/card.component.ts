import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.model';
import { YoutubeService } from 'src/app/services/youtube.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items: Video[] = []

  constructor(private ytService: YoutubeService) {

  }

  ngOnInit(): void {

    
  }

  mostrarVideo(video: Video) {
    
    console.log(video)
    Swal.fire({
     
      html: `
      <h3>${video.title}</h3>
      <b>
         <h4>${video.channelTitle}</h4>
      </b>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/${video.resourceId.videoId}"
      frameborder="0" allow="accelerometer; autoplay;
      clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    })

  }
  

}
