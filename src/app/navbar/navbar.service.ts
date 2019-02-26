import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  categories = [
    {
      ru: "Универсиада2019",
      en: "Universiade2019",
      color: 'red'
    },
    {
      ru: "Универсиада2019",
      en: "Politics",
    },
    {
      ru: "Универсиада2019",
      en: "Society",
    },
    {
      ru: "Универсиада2019",
      en: "Busines",
    },
    {
      ru: "Универсиада2019",
      en: "Culture",
    },
    {
      ru: "Универсиада2019",
      en: "Science",
    },
    {
      ru: "Универсиада2019",
      en: "Technology",
    },
    {
      ru: "Универсиада2019",
      en: "Health",
    },
    {
      ru: "Универсиада2019",
      en: "Travel",
    },
    {
      ru: "Универсиада2019",
      en: "Style",
    },
    {
      ru: "Универсиада2019",
      en: "Design",
    },
    {
      ru: "Универсиада2019",
      en: "BlackSkyKRSK",
      color: 'black'
    }
  ]

  constructor() { }
}
