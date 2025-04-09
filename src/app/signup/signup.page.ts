import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { SignInWithApple } from '@capacitor-community/apple-sign-in';

@Component({
  standalone: false,
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async loginWithGoogle() {
    try {
      const result = await GoogleAuth.signIn();
      console.log('Google user:', result);
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  }

  async loginWithApple() {
    try {
      const result = await SignInWithApple.authorize({
        clientId: 'com.your.app',
        scopes: 'email name',
        redirectURI: ''
      });
      console.log('Apple user:', result);
      // Handle Apple login result
    } catch (error) {
      console.error('Apple login failed:', error);
    }
  }

}
