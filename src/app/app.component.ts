import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-example';

  constructor(private httpService: HttpService) {

  }
  getPost() {
    this.httpService.getPost(1).subscribe(post => {
      console.log(post);
    });
  }

  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }

  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe(post => {
      console.log(post);
    });
  }

  addPost() {
    const post: Post = ({
      userId: 1,
      id: null,
      title: 'Mój Post',
      body: 'Testowy text'
    });
  }


  updatePost() {
    const post: Post = ({
      userId: 1,
      id: 1,
      title: 'abecadło',
      body: 'abecadło z pieca spadło',
    });
  }

  deletePost() {

  }

  changePost() {

  }
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}



