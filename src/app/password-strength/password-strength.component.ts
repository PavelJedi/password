import { Component } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  password: string = '';
  sectionColors: string[] = ['white', 'white', 'white'];
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  handlePasswordChange(event: any) {
    this.password = event.target.value;
    this.checkPasswordStrength();
  }

  checkPasswordStrength() {
    const length = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()]/.test(this.password);

    switch (true) {
      case length === 0:
        this.sectionColors = ['white', 'white', 'white'];
        break;
      case length < 8:
        this.sectionColors = ['red', 'red', 'red'];
        break;
      case hasLetters && hasDigits && hasSymbols:
        this.sectionColors = ['green', 'green', 'green'];
        break;
      case (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols):
        this.sectionColors = ['yellow', 'yellow', 'gray'];
        break;
      default:
        this.sectionColors = ['red', 'gray', 'gray'];
        break;
    }
  }
}
