import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twit-box',
  templateUrl: './twit-box.component.html',
  styleUrls: ['./twit-box.component.scss'],
})
export class TwitBoxComponent implements OnInit {
	button = ["comments", "retwits", "likes"]
  constructor() { }

  ngOnInit() {}

}
