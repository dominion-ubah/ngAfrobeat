import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { NewsService } from 'app/modules/news/news.service';

import {InitParams, FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  @ViewChild(FBVideoComponent) video: FBVideoComponent;

  public news$;
  public news;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private fb: FacebookService
    // private router: Router

  ) {
//     let initParams: InitParams = {
//       // appId: '1927971220769787',
//       appId: '2130518847191362',
//       // xfbml: true,
//       version: 'v2.8'
//     };
// console.log('Initializing Facebook');
//     this.fb.init(initParams);
   }

  ngOnInit() {

    // console.log(this.newsService.getOneNews(1));

    // this.news$ = this.route.paramMap.switchMap((params: ParamMap) => this.newsService.getOneNews(params.get('id')).map(e => {
    //   return e;
    // });
    // this.newsSingleArray$ = this.getNewsDetails(this.route.snapshot.params['id']);
    const item_id = this.route.snapshot.params['id']
    this.getNewsDetails(item_id);
    // this.newsSingleArray$ = this.getNewsDetails(this.route.snapshot.params['id']);

    // const obj = this.news$.reduce((o, key) => Object.assign(o, {[key]: 'data'}), {});
    // this.news$ = this.newsSingleArray$[0];

  }
  getNewsDetails( id ) {

    this.newsService.getOneNews(id).subscribe(d => {
      this.news$ = d;
      this.news = this.news$.data;
      console.log('new4', this.news$);
      return this.news$
    })
      // this.news$[0] = 'loading...';
      // this.newsService.getNews().subscribe(d => {
      //   this.news$ = d.data.filter(e => e.id == id);
      //   console.log(this.news$[0]) ;
      //   return this.news$[0];
      // })


  }










   /**
   * Login with minimal permissions. This allows you to see their public profile only.
   */
  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  /**
   * Login with additional permissions/options
   */
  loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);

  }

  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }


  /**
   * Get the user's profile
   */
  getProfile() {
    this.fb.api('/me')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);
  }


  /**
   * Get the users friends
   */
  getFriends() {
    this.fb.api('/me/friends')
      .then((res: any) => {
        console.log('Got the users friends', res);
      })
      .catch(this.handleError);
  }


  /**
   * Show the share dialog
   */
  share() {

    const options: UIParams = {
      method: 'share',
      href: 'https://github.com/zyramedia/ng2-facebook-sdk'
    };

    this.fb.ui(options)
      .then((res: UIResponse) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);

  }


  playVideo() {
    this.video.play();
  }

  onVideoEvent(ev) {
    console.log('Video event fired: ' + ev);
  }

  pauseVideo() {
    this.video.pause();
  }



  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }




}
