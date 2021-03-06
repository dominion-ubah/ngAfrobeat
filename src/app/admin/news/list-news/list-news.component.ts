import { Component,
  // EventEmitter,
   OnInit, ViewChild } from '@angular/core';
// import { UploadFile, UploadInput, UploadOutput } from '../../../../app/typescripts/pro/file-input';
// import { humanizeBytes } from '../../../../app/typescripts/pro/file-input';
import { NewsService } from 'app/modules/news/news.service';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {ToastService} from '../../../typescripts/pro/alerts';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  @ViewChild('newsModal') newsModal;

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'sammiestarks', uploadPreset: 'hk2z3dtq', autoUpload: true, })
   );
public news$;
public singleNews;
public singleNews$;
public editContent;
   public loading;
  public newsArray;
  public imgArr = [];
  // public e;
      // formData: FormData;
      // files: UploadFile[];
      // uploadInput: EventEmitter<UploadInput>;
      // humanizeBytes: Function;
      // dragOver: boolean;

      constructor(
        private newsService: NewsService,
        private toastService: ToastService
      ) {
          // this.files = [];
          // this.uploadInput = new EventEmitter<UploadInput>();
          // this.humanizeBytes = humanizeBytes;
      }

      ngOnInit() {
        this.getNewsService();

      }

      getNewsService() {
        this.newsService.getNews().subscribe(d => {
          this.news$ = d;
          this.newsArray = this.news$.data;
        },
        err => console.log(err),
        () => console.log('done')
      )
      }
      getSingleNews(news_id) {
        // console.log('get single news:', news_id, this.newsArray.map(e => {
        //   return e.id;
        // }));
        // return this.singleNews = this.newsArray.filter(e => e.id === news_id);
        this.newsService.getOneNews(news_id).subscribe(d => {

          this.singleNews$ = d;
          console.log('get singlenews with id' , this.singleNews$)

          this.singleNews = this.singleNews$.data;
        })
      }
      populateImgArr(res) {
        if (this.imgArr.length < 2) {
          this.imgArr.push(res.url);
          console.log(this.imgArr)
          if (this.imgArr.length === 1 ) {
            this.toastService.success('Your First Image has been Uploaded');
          }else if (this.imgArr.length === 2 ) {
            this.toastService.success('Your Second Image has been Uploaded');
          }

        }else {
            this.toastService.info('You have uploaded the maximum number of images');
        }
      }
      upload() {
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = (
          item: any,
          response: string,
          status: number,
          headers: any
        ): any => {
             let res: any = JSON.parse(response);
             console.log(res.url, item, status, headers, this.loading);
           this.populateImgArr(res);
           
            

         }
         this.uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
            this.toastService.success('Your Image did not upload please click to refresh www.afrobeat.com/admin/admin-news');
          };

          
      }

      // showFiles() {
      //     let files = '';
      //     for (let i = 0; i < this.files.length; i ++) {
      //       files += this.files[i].name
      //        if (!(this.files.length - 1 === i)) {
      //          files += ', '
      //       }
      //     }
      //     return files;
      //  }


      // startUpload(): void {
      //     const event: UploadInput = {
      //     type: 'uploadAll',
      //     url: '/upload',
      //     method: 'POST',
      //     data: { foo: 'bar' },
      //     concurrency: 1
      //     }
      //     this.uploadInput.emit(event);
      // }

      // cancelUpload(id: string): void {
      //     this.uploadInput.emit({ type: 'cancel', id: id });
      // }

      // onUploadOutput(output: UploadOutput | any): void {

      //             if (output.type === 'allAddedToQueue') {
      //             } else if (output.type === 'addedToQueue') {
      //               this.files.push(output.file); // add file to array when added
      //             } else if (output.type === 'uploading') {
      //               // update current data in files array for uploading file
      //               const index = this.files.findIndex(file => file.id === output.file.id);
      //               this.files[index] = output.file;
      //             } else if (output.type === 'removed') {
      //               // remove file from array when removed
      //               this.files = this.files.filter((file: UploadFile) => file !== output.file);
      //             } else if (output.type === 'dragOver') {
      //               this.dragOver = true;
      //             } else if (output.type === 'dragOut') {
      //             } else if (output.type === 'drop') {
      //               this.dragOver = false;
      //             }
      //             this.showFiles();

      //         }
      setFormEdit(news) {
        this.editContent = news;
        this.newsModal.show();
      }
      submitNewsForm(f, edit) {
        if ( edit ) {
          console.log('show news for edit:' , edit);
          console.log('Editing News:', f.value, this.editContent.id);

          // this.newsArray.unshift(f.value);
          this.newsService.updateNews( this.editContent.id, f.value ).subscribe(res => {
            console.log(res);
            this.toastService.success('News Content has been Edited');
          },
        error => {
          console.error(error);
          this.toastService.error('News Content edit has failed click to refresh www.afrobeat.com/admin/admin-news');
        })

        } else {
          console.log('Creating News:' , f.value);
          if(this.imgArr.length === 2) {
            let a = this.imgArr.slice(0, 1);
            let b = this.imgArr.splice(1, 1);
            f.value.main_image = a[0];
            f.value.images = b[0];
          }else{
            f.value.main_image = '';
            f.value.images = '';
          }
          this.newsArray.unshift(f.value);
        this.newsService.postNews(f.value).subscribe(res => {
          console.log(res);
          this.toastService.success('News Content has been Posted');
        },
      error => {
        console.error(error);
        this.toastService.error('News Content was not posted due to an error click to refresh www.afrobeat.com/admin/admin-news');

      })
        }
        console.log(this.imgArr);
      
   //         let e = {};
   // e.title = 'qwwetrsjdv';
   // e.subtitle = 'lsmdnkvlsdjv';
   // e.content = 'mdslvknvjds';
   // e.main_image = 'ml;dnckls';
   // e.images = 'mlkncjabc';
        this.newsModal.hide();

      }


   }




