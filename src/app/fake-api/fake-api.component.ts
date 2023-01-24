import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fake-api',
  templateUrl: './fake-api.component.html',
  styleUrls: ['./fake-api.component.scss']
})
export class FakeApiComponent implements OnInit {
  posts: any;
  public getJsonValue: any;
  public postJsonValue: any;
  sampleData = 'sreekanth'
  postId: any
  postIdIndex: any = 'as';
  postsEl: any;
  elIndex: any;
  postIdIndexEl: any;
  postsId: any;
  element: any;
  showCard: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      this.posts = data
    });
  }

  addToView(i: any) {
    this.showCard = true;
    this.postIdIndex = this.posts[i]
    console.log(this.postIdIndex)
  }
}
