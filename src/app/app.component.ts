import { Component, OnInit } from '@angular/core';
import { MDBSpinningPreloader } from './typescripts/pro/index';
import { NewsService } from 'app/modules/news/news.service';
// import { ToastService } from './typescripts/pro/alerts';

@Component({
  selector: 'mdb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {
  public newsSignal;
  constructor(private mdbSpinningPreloader: MDBSpinningPreloader, private newsService: NewsService) {}

  ngOnInit() {
    this.mdbSpinningPreloader.start();
    this.newsService.getNews().subscribe(e => {
      this.newsSignal = e
      this.mdbSpinningPreloader.stop();
      return this.newsSignal;
      
    });
    
  }
}
