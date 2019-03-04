import {Component, OnInit} from '@angular/core';
import {FormsModule, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private builder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private router: Router) {
    this.loginForm = this.builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).toPromise().then(resp => {
      if (resp === 'Incorrect username or password') {
        this.toastrService.warning(resp);
      } else {
        this.toastrService.success('Authorized');
        this.authService.authorized.next(true);
        localStorage.setItem(environment.apiToken, resp);
        this.router.navigateByUrl('/');
      }


    }, err => {
      this.toastrService.error('Failed');
      console.log(err);
    });
  }


}
