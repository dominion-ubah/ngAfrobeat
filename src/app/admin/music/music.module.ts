import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared-module/shared.module';
import { ListMusicComponent } from './list-music/list-music.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ListGenreComponent } from './list-genre/list-genre.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
 ],
  declarations: [ListMusicComponent, ListArtistsComponent, ListAlbumsComponent, ListGenreComponent],
  exports: [ListMusicComponent, ListArtistsComponent, ListAlbumsComponent, ListGenreComponent]
})
export class MusicModule { }
