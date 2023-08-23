import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout/checkout.service';
import { Film } from './film.model';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
})
export class ListFilmsComponent implements OnInit {
  listFilms: Film[] = [];

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    });
  }
}
