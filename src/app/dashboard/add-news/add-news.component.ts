import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { News } from 'src/app/models/news';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  newsForm: FormGroup;

  constructor(private dasboardService: DashboardService) { }

  onSubmit() {
    const news = new News(
      null,
      this.newsForm.value.title,
      this.newsForm.value.author,
      this.newsForm.value.date,
      this.newsForm.value.article,
      this.newsForm.value.category
    )
    this.dasboardService.addNews(news).subscribe();
    this.newsForm.reset();
  }

  ngOnInit() {
    this.newsForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      article: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
    })
  }

}
