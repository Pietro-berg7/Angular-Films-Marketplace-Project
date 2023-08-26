import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';
import { Film } from 'src/app/views/list-films/film.model';

import { filmsMock } from 'src/app/utils/films.mock';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css'],
})
export class CardFilmComponent implements OnInit {
  listFilms: Film[] = [];

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    });

    if (this.listFilms.length === 0) {
      this.listFilms = filmsMock;
    }
  }

  selectFilm(film: Film): void {
    this.checkoutService.setFilm(film);
    this.checkoutService.setPrice(film.price);
  }
}
