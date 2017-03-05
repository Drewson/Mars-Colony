import { Component, OnInit } from '@angular/core';

import { BlogAPIService } from '../apiService/blog';
import { Response } from '@angular/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogAPIService]
})
export class BlogComponent implements OnInit {

    blogList: Response;

  constructor( private blogAPIService: BlogAPIService ) { 
      this.getBlog();
  }

    htmlToPlaintext(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }


  getBlog() {

    this.blogAPIService.getBlog()
      .subscribe((result) => {
        this.blogList = result;
        console.log(this.blogList);
      });
  }

  ngOnInit() {
  }

}
