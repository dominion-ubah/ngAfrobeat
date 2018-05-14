import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MusicService } from 'app/modules/music/music.service';

@Component({
  selector: 'app-musicpage',
  templateUrl: './musicpage.component.html',
  styleUrls: ['./musicpage.component.scss']
})
export class MusicpageComponent implements OnInit {
  @ViewChild('carousel') public el: any;
  public track$;
  public track;
  public myInterval: Number = 3000;
  public activeSlideIndex: Number = 0;
  public noWrapSlides: Boolean = false;
  public newArr;
  constructor(private musicService: MusicService) {

    }
    ngOnInit() {
      this.getMusicService();

      // this.infiniteLoop(this.news, 3);
    }


    getMusicService() {
      this.track = this.musicService.getSongs()

      .subscribe(d => {
        this.track$ = d;
        this.track = this.track$.track.data;
        this.breakIntoThrees(this.track);
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
     this.newArr = [];

        this.ar (xos);

        return this.newArr;


    }
     ar (xos) {
      if (xos.length ) {

      
        // take out the first three as an array
        const a = xos.slice(0, 3);
        // push that sliced array of three into newArr Array
        this.newArr.push(a);
        // delete the copy of three that is left in the original array and present the new array
        xos = xos.splice(3, 3);
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




