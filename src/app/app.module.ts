import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FileUploadModule} from 'ng2-file-upload';
import {GoogleLoginProvider,SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import { AngularFileUploaderModule } from "angular-file-uploader";



@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,FileUploadModule,
    AppRoutingModule,AngularFileUploaderModule,
    SocialLoginModule,HttpClientModule,AngularFileUploaderModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '956711150386-rgjub56osdhr1g3ohp5s0th6piqomei5.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
