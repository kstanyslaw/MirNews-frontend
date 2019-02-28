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
      ru: "Политика",
      en: "Politics",
    },
    {
      ru: "Общество",
      en: "Society",
    },
    {
      ru: "Бизнес",
      en: "Busines",
    },
    {
      ru: "Культура",
      en: "Culture",
    },
    {
      ru: "Наука",
      en: "Science",
    },
    {
      ru: "Технологии",
      en: "Technology",
    },
    {
      ru: "Здоровье",
      en: "Health",
    },
    {
      ru: "Путешествия",
      en: "Travel",
    },
    {
      ru: "Стиль",
      en: "Style",
    },
    {
      ru: "Дизайн",
      en: "Design",
    },
    {
      ru: "ЧерноеНебо",
      en: "BlackSkyKRSK",
      color: 'black'
    }
  ]

  constructor() { }
}
