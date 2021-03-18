import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.model';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ytService: YoutubeService) { }

  ngOnInit(): void {
  }

  
}
