import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router'; //or updated version


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    $('.header-accountbox-trigger').on('click', () => {
      $('.header-accountbox').slideToggle();
    });
  }

  logout() {
    this.authService.logout();
  }
    navigateTo(value) {
    if (value) {
        this.router.navigate([value]);
    }
    return false;
}

}
