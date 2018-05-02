import { RouterModule } from '@angular/router';
import { BaseComponent } from 'app/base/base.component';
import { NgModule } from '@angular/core';
import { HomepageComponent } from 'app/pages/homepage/homepage.component';
import { NewspageComponent } from 'app/pages/newspage/newspage.component';
import { MusicpageComponent } from 'app/pages/musicpage/musicpage.component';
import { TvpageComponent } from 'app/pages/tvpage/tvpage.component';
import { EventpageComponent } from 'app/pages/eventpage/eventpage.component';
import { CelebpageComponent } from 'app/pages/celebpage/celebpage.component';
import { IreportpageComponent } from 'app/pages/ireportpage/ireportpage.component';
// import { DetailpageComponent } from 'app/pages/detailpage/detailpage.component';
import { NewsDetailsComponent } from 'app/modules/news/news-details/news-details.component';
import {MusicDetailsComponent} from 'app/modules/music/music-details/music-details.component';
import {AlbumDetailsComponent} from './modules/music/album-details/album-details.component';
import {ArtistDetailsComponent} from './modules/music/artist-details/artist-details.component';


const routes = RouterModule.forRoot([
  {
    path: '',
    component: BaseComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'newspage',
        component: NewspageComponent
      },
      {
        path: 'musicpage',
        component: MusicpageComponent
      },
      {
        path: 'tvpage',
        component: TvpageComponent
      },
      {
        path: 'eventpage',
        component: EventpageComponent
      },
      {
        path: 'celebpage',
        component: CelebpageComponent
      },
      {
        path: 'ireportpage',
        component: IreportpageComponent
      },
      {
        path: 'news-details-page/:id',
        component: NewsDetailsComponent
      },
      {
        path: 'music-details-page',
        component: MusicDetailsComponent
        },
        {
            path: 'album-details-page',
            component: AlbumDetailsComponent
        },
        {
            path: 'artist-details-page',
            component: ArtistDetailsComponent
        },
      // { path: '', redirectTo: 'home', pathMatch: 'full' },

    ]
  }



  // { path: "**", component: NotFoundComponent }
]);

@NgModule({
  imports: [routes],
  exports: [RouterModule]
})



export class AppRoutingModule {

}
