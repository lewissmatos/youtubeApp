import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private ytService: YoutubeService) { }

  ngOnInit(): void {
    this.cargarVideos()
  }



  @Input() items: any[] = []

  videos: Video[] = []


  cargarVideos() {
    this.ytService.getVideos()
      .subscribe(resp => {

        this.videos.push(...resp)
      })
  }

  vidsFiltrados: Video[] = []

  busqueda = false
  buscar(termino: string) {
    this.busqueda = true

    this.vidsFiltrados = this.videos.filter(x => x.title.toLowerCase().includes(termino))
    console.log(this.videos)
    console.log(this.vidsFiltrados)
  }

}
