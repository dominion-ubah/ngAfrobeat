import { Component, OnInit, ViewChild } from '@angular/core';
import { MusicService } from 'app/modules/music/music.service';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {ToastService} from '../../../typescripts/pro/alerts';
@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {
  @ViewChild('songModal') songModal;

public song$;
public singleSong;
public singleSong$;
public editContent;
   public loading;
  public songArray;
  public imgArr = [];
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'sammiestarks', uploadPreset: 'hk2z3dtq', autoUpload: true, })
   ) ;
   uploader2: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ resourceType: 'video', cloudName: 'sammiestarks', uploadPreset: 'hk2z3dtq', autoUpload: true, })
   ) ;

  fileType: Array<any>;
  AssetType: Array<any>;
  artists$;
  artistArray;

      constructor(
        private musicService: MusicService,
        private toastService: ToastService
      ) {
      }

      ngOnInit() {
        this.getSongService();
        this.getArtistsService();

                this.fileType = [
                    // { value: 'Image', label: 'Image', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' },
                    { value: 'Audio', label: 'Audio', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' },
                    { value: 'Video', label: 'Video', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' }

                ];

                this.AssetType = [
                  { value: 'Main Image', label: 'Main Image', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' },
                  { value: 'File', label: 'File', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' },
                  { value: 'More Images', label: 'More Images', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' },
              ];

              this.artistArray = [
                // { value: 'Image', label: 'Image', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' },
                { value: 'Audio', label: 'Audio', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' },
                { value: 'Video', label: 'Video', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' }

            ];


      }


      getSongService() {
        // this.songArray =

        this.musicService.getSongs()



        .subscribe(d => {
          this.song$ = d;
          this.songArray = this.song$.track.data;
          console.log(this.songArray);
        },
        err => console.log(err),
        () => console.log('done')
      )
      }
      getArtistsService() {
        this.musicService.getArtists()
                .subscribe(d => {
                  this.artists$ = d;
                  this.artistArray = this.artists$.map(a => {
                    return {
                      value: a.id,
                      label: a.name,
                      icon: a.cover_image
                    }
                  });
                  console.log( 'artist array', this.artistArray);
                },
                err => console.log(err),
                () => console.log('done')
              )
      }
      getSingleSong(song_id) {
        // console.log('get single song:', song_id, this.songArray.map(e => {
        //   return e.id;
        // }));
        // return this.singlesong = this.songArray.filter(e => e.id === song_id);
        this.musicService.getSong(song_id)
        // .subscribe(d => {

        //   this.singlesong$ = d;
        //   console.log('get singlesong with id' , this.singlesong$)

        //   this.singlesong = this.singlesong$.data;
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
      upload(f) {
        console.log('upload f', f.value);

        // if (f.value.type === 'Image' && (f.value.kind === 'Main Image' || f.value.kind === 'More Images')) {

        // }else if ((f.value.type === 'Video' || f.value.type === 'Audio') && f.value.kind === 'File') {
          // this.uploader
          
           this.uploader2.uploadAll();
            this.uploader2.onSuccessItem = (
              item: any,
              response: string,
              status: number,
              headers: any
            ): any => {
                const res: any = JSON.parse(response);
                if (f.value.type === 'Video') {
                  console.info( response, status, headers);
                  this.toastService.success('Your Video file has uploaded');
                  console.log( 'Video cloud', res.url);
                  return f.value.music_video = res.url
                }else {
                  this.toastService.success('Your Audio file has uploaded');
                  console.log( 'Audio cloud', res.url);
                  return f.value.file = res.url
                }

            }

            // ddkmsnvjdshvjsndk
            this.uploader2.onErrorItem = function(fileItem, response, status, headers) {

                if (f.value.type === 'Video') {
                  console.info('onErrorItem', fileItem, response, status, headers);
                  this.toastService.error('Your Video did not upload please click to refresh www.afrobeat.com/admin/admin-song');
                }else {
                  console.info('onErrorItem', fileItem, response, status, headers);
                  this.toastService.error('Your Audio did not upload please click to refresh www.afrobeat.com/admin/admin-song');
                }
              };
              this.uploader.uploadAll();
              this.uploader.onSuccessItem = (
                item: any,
                response: string,
                status: number,
                headers: any
              ): any => {
                  const res: any = JSON.parse(response);
                  console.log('Image cloud', res.url);
                  return f.value.cover_image = res.url
              }
              this.uploader.onErrorItem = function(fileItem, response, status, headers) {
                  console.info('onErrorItem', fileItem, response, status, headers);
                  this.toastService.error('Your Image did not upload please click to refresh www.afrobeat.com/admin/admin-song');
              };
        // }
        // 'Image'
        // 'Audio'
        // 'Video'
        // 'Main Image'
        // 'File'
        // 'More Images'


        // this.uploader.uploadAll();
        // this.uploader.onSuccessItem = (
        //   item: any,
        //   response: string,
        //   status: number,
        //   headers: any
        // ): any => {
        //      const res: any = JSON.parse(response);
        //      console.log(res.url, item, status, headers, this.loading);
        //    this.populateImgArr(res);



        //  }
        //  this.uploader.onErrorItem = function(fileItem, response, status, headers) {
        //     console.info('onErrorItem', fileItem, response, status, headers);
        //     this.toastService.success('Your Image did not upload please click to refresh www.afrobeat.com/admin/admin-song');
        //   };


      }


      setFormEdit(song) {
        this.editContent = song;
        this.songModal.show();
      }
      submitSongForm(f, edit) {
        if ( edit ) {
          console.log('show song for edit:' , edit);
          console.log('Editing song:', f.value, this.editContent.id);

          // this.songArray.unshift(f.value);
          this.musicService.updateSong( this.editContent.id, f.value )
        //   .subscribe(res => {
        //     console.log(res);
        //     this.toastService.success('song Content has been Edited');
        //   },
        // error => {
        //   console.error(error);
        //   this.toastService.error('song Content edit has failed click to refresh www.afrobeat.com/admin/admin-song');
        // })

        } else {
          console.log('Creating song:' , f.value);
          this.songArray.unshift(f.value);
        this.musicService.createSong(f.value)
        .subscribe(res => {
          console.log(res);
          this.toastService.success('song Content has been Posted');
        },
      error => {
        console.error(error);
        this.toastService.error('song Content was not posted due to an error click to refresh www.afrobeat.com/admin/admin-song');

      })
        }
        // console.log(this.imgArr);
        this.songModal.hide();

      }

}








