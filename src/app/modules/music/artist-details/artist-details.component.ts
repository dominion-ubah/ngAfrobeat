import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MusicService } from 'app/modules/music/music.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  public artist$;
  public artist;
  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute,
    // private router: Router

  ) {

   }

  ngOnInit() {

    const item_id = this.route.snapshot.params['id']
    this.getArtistDetails(item_id);
  }
  getArtistDetails( id ) {

    this.musicService.getArtist(id).subscribe(d => {
      this.artist$ = d;
      this.artist = this.artist$;
      console.log('new4', this.artist$, this.artist);
      return this.artist$
    })

  }
}

