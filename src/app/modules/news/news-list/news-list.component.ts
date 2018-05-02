import { Component, OnInit, ViewChild, HostListener  } from '@angular/core';
import { NewsService } from 'app/modules/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @ViewChild('carousel') public el: any;
  public news$
  public news;
  public myInterval: Number = 3000;
  public activeSlideIndex: Number = 0;
  public noWrapSlides: Boolean = false;

  // public slides: Array<Object> = [
  //     {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg'},
  //     {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'},
  //     {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'},
  //     {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'},
  // ];

public newArr;

@HostListener('swipeleft', ['$event']) public swipePrev(event: any) {
  this.el.previousSlide();
}

@HostListener('swiperight', ['$event']) public swipeNext(event: any) {
  this.el.nextSlide();
}
 breakIntoThrees (xos) {
   this.newArr = [];
      // tslint:disable-next-line:no-console
      // console.log(xos, xos.length, xos.slice(0, 3));
      this.ar (xos);
      return this.newArr;
  }
  ar (xos) {
    if (xos.length ) {

      // tslint:disable-next-line:no-console
      // console.log('initial:', xos);
      const a = xos.slice(0, 3);
      this.newArr.push(a);
      xos = xos.splice(3, 3);
      // tslint:disable-next-line:no-console
      // console.log(xos);
      // tslint:disable-next-line:no-console
      // console.log(a);
      // tslint:disable-next-line:no-console
      // console.log(this.newArr);
       this.ar (xos);
    }
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
     if (i === 1) {
        //  console.log(i)
         return true;
     }
     return false;
  }

}
