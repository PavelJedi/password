import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

library.add(faEye, faEyeSlash, faLock);

@NgModule({
  declarations: [AppComponent, PasswordStrengthComponent],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
