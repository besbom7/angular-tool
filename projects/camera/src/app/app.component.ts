import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';


//01. npm i ngx-webcam
//02. import module import { WebcamModule } from 'ngx-webcam';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  private trigger: Subject<any> = new Subject();

  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  ttt = true;
  captureImage  = '';

  ngOnInit() {
    setTimeout(() => {
    }, 3000)
  }

  /*------------------------------------------
  --------------------------------------------
  triggerSnapshot()
  --------------------------------------------
  --------------------------------------------*/
  public triggerSnapshot() {
      this.trigger.next(true);
  }

  /*------------------------------------------
  --------------------------------------------
  handleImage()
  --------------------------------------------
  --------------------------------------------*/
  public handleImage(webcamImage: WebcamImage): void {
      this.webcamImage = webcamImage;
      this.captureImage = webcamImage!.imageAsDataUrl;
      // this.urlToBinary(this.captureImage);
      this.urlToFile(this.captureImage , "TEST");
      console.info('received webcam image', this.captureImage);
  }

  /*------------------------------------------
  --------------------------------------------
  triggerObservable()
  --------------------------------------------
  --------------------------------------------*/
  public get triggerObservable(): Observable<any> {

      return this.trigger.asObservable();
  }

  public handleInitError(error: WebcamInitError): void {
    console.log(error);
    
    // if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
    //   console.warn("Camera access was not allowed by user!");
    // }
  }

  /*------------------------------------------
  --------------------------------------------
  nextWebcamObservable()
  --------------------------------------------
  --------------------------------------------*/
  public get nextWebcamObservable(): Observable<any> {

      return this.nextWebcam.asObservable();
  }

  async urlToFile(url : string, filename : string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
  
        // Create a local file from the blob
        const file = new File([blob], filename, { type: blob.type });
  
        // You can now use the 'file' as a local file, for example, save it or display it.
        console.log('File:', file);
      } else {
        console.error('Failed to fetch the image:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

}
