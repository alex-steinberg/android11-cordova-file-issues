import { Component } from '@angular/core';

declare const cordova: any;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const Ionic: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fileUri = '';
  imageToDownload = 'https://afktravel.com/wp-content/uploads/2015/08/table-mountain-ocean.jpg';

  constructor() {}

  fetchImage() {
    const filePath = cordova.file.externalDataDirectory; // ends in '/'
    const fileName = 'visit-cape-town.jpg';
    const filePromise = new Promise<string>((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      cordova.plugin.http.downloadFile(this.imageToDownload, {}, {Accept: '*'}, filePath + fileName,
        (entry) => {
          resolve(entry.nativeURL);
        },
        (response) => {
          reject(response.error);
        });
    });
    filePromise
      .then(res => {
        this.fileUri = res;
      })
      .catch(err => console.log(err));
  }

  getImageForWeb(): string {
    return Ionic.WebView.convertFileSrc(this.fileUri);
  }

}
