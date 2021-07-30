import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FileUploadModule} from 'ng2-file-upload';
import {GoogleLoginProvider,SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
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
              '956711150386-vu17mqj3hpomv1vgggln33a256l5uees.apps.googleusercontent.com'
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
