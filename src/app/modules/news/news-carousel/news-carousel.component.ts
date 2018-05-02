import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NewsService } from 'app/modules/news/news.service';
// import { SlideComponent } from './typescripts/free/carousel/slide.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.scss']
})
export class NewsCarouselComponent implements OnInit {
  @ViewChild('carousel') public el: any;
  public news$;
  public news;
  public myInterval: Number = 3000;
  public activeSlideIndex: Number = 0;
  public noWrapSlides: Boolean = false;
  public newArr;
  // public slides: Array<Object> = [

  //     {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg'},
  //     {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'},
  //     {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'},
  //     {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'},
  // ];
  @HostListener('swipeleft', ['$event']) public swipePrev(event: any) {
    this.el.previousSlide();
}

@HostListener('swiperight', ['$event']) public swipeNext(event: any) {
    this.el.nextSlide();
}
// mockdata
// public news: Array<object> =  [
//   {
//       'id': '01',
//       'title': 'hue',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '02',
//       'title': 'hora',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '03',
//       'title': 'dosis',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '04',
//       'title': 'rona',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '05',
//       'title': 'serd',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '06',
//       'title': 'akdj',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   }
//   ]

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

  activeSlideChange() {
    // console.log(this.activeSlideIndex);
}

constructor(private newsService: NewsService) {

}
ngOnInit() {
  this.getNewsService();

  // this.infiniteLoop(this.news, 3);
}

getNewsService() {
  this.newsService.getNews().subscribe(d => {
    this.news$ = d;
    this.news = this.news$.data;
    console.log(this.news);
    this.breakIntoThrees(this.news);
  },
  err => console.log(err),
  () => console.log('done')
)
}

compare(i) {
     if (i === 1){
         return true;
     }
     return false;
}

}




