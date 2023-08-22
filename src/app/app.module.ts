import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { AllAnimalsComponent } from './animals/all-animals/all-animals.component';
import { FiveAnimalsComponent } from './animals/five-animals/five-animals.component';
import { AnimalService } from './animal.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, AllAnimalsComponent, FiveAnimalsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot
    ([

      { path: 'all-animals', component: AllAnimalsComponent },
      { path: 'five-animals', component: FiveAnimalsComponent },
      { path: '', component: AllAnimalsComponent }
    ])

  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
