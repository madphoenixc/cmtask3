import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';

import {SocialAuthService,SocialUser,GoogleLoginProvider} from 'angularx-social-login'
declare var pdfupload: any;
declare var pdfcreate: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulaauth';

  user !: SocialUser;
  loggedIn !: boolean;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(){
   
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signinwithgoogle():any{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
  signout():any{
    this.authService.signOut();
  }
  splitpdf():any{
    
  }
//   afuConfig = {
//     uploadAPI: {
//       url:"https://slack.api/files/uploads"
//     }
// };

}
