import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MusicService } from 'app/modules/music/music.service';

@Component({
  selector: 'app-artist-carousel',
  templateUrl: './artist-carousel.component.html',
  styleUrls: ['./artist-carousel.component.scss']
})
export class ArtistCarouselComponent implements OnInit {
  @ViewChild('carousel') public el: any;
  public artist$;
  public artist;
  public myInterval: Number = 3000;
  public activeSlideIndex: Number = 0;
  public noWrapSlides: Boolean = false;
  public newArr;
  constructor(private musicService: MusicService) {

    }
    ngOnInit() {
      this.getArtistService();

      // this.infiniteLoop(this.news, 3);
    }


    getArtistService() {
      this.musicService.getArtists()

// console.log('carousel twothirty', this.track);

      .subscribe(d => {
        this.artist$ = d;
        this.artist = this.artist$;
        console.log('console two thirty:', this.artist);
        this.breakIntoThrees(this.artist);
      },
      err => console.log(err),
      () => console.log('done')
    )
    }




    @HostListener('swipeleft', ['$event']) public swipePrev(event: any) {
      this.el.previousSlide();
  }

  @HostListener('swiperight', ['$event']) public swipeNext(event: any) {
      this.el.nextSlide();
  }


   breakIntoThrees (xos) {
     console.log('from carousel:' + xos)
     this.newArr = [];

        this.ar (xos);

        return this.newArr;


    }
     ar (xos) {
      if (xos.length ) {

        // tslint:disable-next-line:no-console
        console.log('initial:', xos);
        // take out the first three as an array
        const a = xos.slice(0, 3);
        // push that sliced array of three into newArr Array
        this.newArr.push(a);
        // delete the copy of three that is left in the original array and present the new array
        xos = xos.splice(3, 3);
        // tslint:disable-next-line:no-console
        console.log(xos);
        // tslint:disable-next-line:no-console
        console.log(a);
        // tslint:disable-next-line:no-console
        console.log(this.newArr);
         this.ar (xos);
      }
      // this.newArr.map(e => {
      //   return e
      // }


    }


    compare(i) {
         if (i === 1) {
             return true;
         }
         return false;
    }

}




