import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MusicService } from 'app/modules/music/music.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  public album$;
  public album;
  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute,
    // private router: Router

  ) {

   }

  ngOnInit() {

    const item_id = this.route.snapshot.params['id']
    this.getAlbumDetails(item_id);
  }
  getAlbumDetails( id ) {

    this.musicService.getAlbum(id).subscribe(d => {
      this.album$ = d;
      this.album = this.album$.data;
      console.log('new4', this.album$, this.album);
      return this.album$
    })

  }
}

