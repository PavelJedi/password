import { Component } from '@angular/core';
import {
  faEye,
  faEyeSlash,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faQuestionCircle = faQuestionCircle;
  password: string = '';
  sectionColors: string[] = ['white', 'white', 'white'];
  showPassword: boolean = false;
  showHint: boolean = false;
  passwordHint: string = '';
  hint: string =
    'Minimum 8 chars, with 1 letter, 1 number, and 1 symbol (!@#$%^&*()).';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  togglePasswordHint() {
    this.showHint = !this.showHint;
  }

  checkPasswordStrength() {
    const length = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()]/.test(this.password);

    switch (true) {
      case length === 0:
        this.sectionColors = ['white', 'white', 'white'];
        this.passwordHint = '';
        break;
      case length < 8:
        this.sectionColors = ['red', 'red', 'red'];
        this.passwordHint = 'The password is too short.';
        break;
      case hasLetters && hasDigits && hasSymbols:
        this.sectionColors = ['green', 'green', 'green'];
        this.passwordHint = 'The password is strong.';
        break;
      case (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols):
        this.sectionColors = ['yellow', 'yellow', 'gray'];
        this.passwordHint = 'The password is medium strength.';
        break;
      default:
        this.sectionColors = ['red', 'gray', 'gray'];
        this.passwordHint = 'The password is weak.';
        break;
    }
  }
}
