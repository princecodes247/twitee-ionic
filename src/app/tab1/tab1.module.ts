import { IonicModule } from '@ionic/angular';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { FABComponent } from '../components/fab/fab.component';
import { TwitBoxComponent } from '../components/twit-box/twit-box.component';
import { AnimatedButtonComponent } from '../components/animated-button/animated-button.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, FABComponent,
    TwitBoxComponent, AnimatedButtonComponent]
})
export class Tab1PageModule implements OnInit {
	twits: any[];

	constructor() { }

  ngOnInit() {
  	this.load()
  }
  load() {
  	this.twits = Array(9).fill(null)
  }
}
