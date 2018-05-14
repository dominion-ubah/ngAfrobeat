import { Component, OnInit, ViewChild  } from '@angular/core';
import { MusicService } from 'app/modules/music/music.service';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {ToastService} from '../../../typescripts/pro/alerts';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.scss']
})
export class ListArtistsComponent implements OnInit {
  @ViewChild('artistModal') artistModal;

    uploader: CloudinaryUploader = new CloudinaryUploader(
      new CloudinaryOptions({ cloudName: 'sammiestarks', uploadPreset: 'hk2z3dtq', autoUpload: true, })
     );
  public artist$;
  public singleartist;
  public singleartist$;
  public editContent;
     public loading;
    public artistArray;
    public imgArr = [];

        constructor(
          private musicService: MusicService,
          private toastService: ToastService
        ) {
        }

        ngOnInit() {
          this.getartistService();

        }

        getartistService() {
          this.artistArray =
          
          this.musicService.getArtists()



        //   .subscribe(d => {
        //     this.artist$ = d;
        //     this.artistArray = this.artist$.data;
        //   },
        //   err => console.log(err),
        //   () => console.log('done')
        // )
        }
        getSingleartist(artist_id) {
          // console.log('get single artist:', artist_id, this.artistArray.map(e => {
          //   return e.id;
          // }));
          // return this.singleartist = this.artistArray.filter(e => e.id === artist_id);
          this.musicService.getArtist(artist_id)
          // .subscribe(d => {

          //   this.singleartist$ = d;
          //   console.log('get singleartist with id' , this.singleartist$)

          //   this.singleartist = this.singleartist$.data;
          // })
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
              this.toastService.success('Your Image did not upload please click to refresh www.afrobeat.com/admin/admin-artist');
            };


        }


        setFormEdit(artist) {
          this.editContent = artist;
          this.artistModal.show();
        }
        submitArtistForm(f, edit) {
          if ( edit ) {
            console.log('show artist for edit:' , edit);
            console.log('Editing artist:', f.value, this.editContent.id);

            // this.artistArray.unshift(f.value);
            this.musicService.updateArtist( this.editContent.id, f.value )
          //   .subscribe(res => {
          //     console.log(res);
          //     this.toastService.success('artist Content has been Edited');
          //   },
          // error => {
          //   console.error(error);
          //   this.toastService.error('artist Content edit has failed click to refresh www.afrobeat.com/admin/admin-artist');
          // })

          } else {
            console.log('Creating artist:' , f.value);
            if (this.imgArr.length === 2) {
              const a = this.imgArr.slice(0, 1);
              const b = this.imgArr.splice(1, 1);
              f.value.main_image = a[0];
              f.value.images = b[0];
            }else {
              f.value.main_image = '';
              f.value.images = '';
            }
            this.artistArray.unshift(f.value);
          // this.musicService.createArtist(f.value)
        //   .subscribe(res => {
        //     console.log(res);
        //     this.toastService.success('artist Content has been Posted');
        //   },
        // error => {
        //   console.error(error);
        //   this.toastService.error('artist Content was not posted due to an error click to refresh www.afrobeat.com/admin/admin-artist');

        // })
          }
          console.log(this.imgArr);
          this.artistModal.hide();

        }


}



