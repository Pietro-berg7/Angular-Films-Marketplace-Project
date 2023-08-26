import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout/checkout.service';
import { Film } from './film.model';
import { Router } from '@angular/router';

import { filmsMock } from 'src/app/utils/films.mock';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
})
export class ListFilmsComponent implements OnInit {
  listFilms: Film[] = [];
  listSelectedFilms!: number;
  hidden: boolean = false;

  constructor(
    private checkoutService: CheckoutService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.checkoutService.totalPrice = 0;
    this.checkoutService.listSelectedFilms = [];
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    });

    if (this.listFilms.length === 0) {
      this.listFilms = filmsMock;
    }
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  toggleCount() {
    return (this.listSelectedFilms =
      this.checkoutService.listSelectedFilms.length);
  }

  toCheckout(): void {
    this.route.navigate(['../checkout']);
  }
}
