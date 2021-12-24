import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.scss'],
})
export class AnimatedButtonComponent implements OnInit {
	count: number
	valid: boolean
	class: string
	@Input() type = "";

  ngOnInit() {
  		this.type = this.type.toLowerCase()
 		console.log(this.type)
 		if(this.type.toLowerCase() == "LIKES".toLowerCase()){
 			this.class = "heart"
 		} else if (this.type === "comments"){
 			this.class = "chatbubble"
 		} else {
 			this.class = "sync"
 		}
  }
 	constructor() {
 		this.count = 34
 		this.valid = true
 	
 	 }
 	 updateState () {

 	 		this.count = this.valid ? this.count + 1 : this.count - 1
 	 		this.valid = !this.valid
 	 }
}
