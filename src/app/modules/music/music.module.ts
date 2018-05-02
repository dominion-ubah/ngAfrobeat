import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicCarouselComponent } from './music-carousel/music-carousel.component';
import { SharedModule } from 'app/shared/shared-module/shared.module';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicListComponent } from './music-list/music-list.component';
import { ArtistCarouselComponent } from './artist-carousel/artist-carousel.component';
import { AlbumCarouselComponent } from './album-carousel/album-carousel.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MusicCarouselComponent, MusicDetailsComponent, MusicListComponent, ArtistCarouselComponent, AlbumCarouselComponent, ArtistListComponent, AlbumListComponent, AlbumDetailsComponent, ArtistDetailsComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
      MusicCarouselComponent,
      MusicDetailsComponent,
      MusicListComponent,
      ArtistCarouselComponent,
      AlbumCarouselComponent,
      ArtistListComponent,
      AlbumListComponent,
      AlbumDetailsComponent,
      ArtistDetailsComponent

  ]
})
export class MusicModule { }
