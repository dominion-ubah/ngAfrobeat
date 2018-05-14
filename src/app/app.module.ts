import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { MDBSpinningPreloader } from './typescripts/pro/index';
import { FacebookModule } from 'ngx-facebook';
// import { MDBSpinningPreloader } from 'ng-mdb-pro';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './base/base.component';

import { SharedModule } from 'app/shared/shared-module/shared.module';
import { PagesModule } from './pages/pages.module';
import { MusicModule } from './modules/music/music.module';
import { TvModule } from './modules/tv/tv.module';
import { CelebModule } from './modules/celeb/celeb.module';
import { IreportModule } from './modules/ireport/ireport.module';
import { EventsModule } from './modules/events/events.module';
import { AdvertsModule } from './modules/adverts/adverts.module';
import { NewsService } from 'app/modules/news/news.service';
import { AdminModule } from './admin/admin.module';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MusicService } from './modules/music/music.service';

declare var Hammer: any;


export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pan': { direction: Hammer.DIRECTION_All },
    'swipe': { direction: Hammer.DIRECTION_VERTICAL },
  };

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'auto',
          inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
          recognizers: [
            [Hammer.Swipe, {
              direction: Hammer.DIRECTION_HORIZONTAL
            }]
          ]
    });
    return mc;
  }
}
@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    FacebookModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    PagesModule,
    MusicModule,
    TvModule,
    CelebModule,
    IreportModule,
    EventsModule,
    AdvertsModule,
    AdminModule
  ],
  providers: [MDBSpinningPreloader, NewsService, MusicService,
    {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig,

    }
],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
