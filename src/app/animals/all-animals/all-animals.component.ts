import { Component, OnInit } from '@angular/core';
import { Animal, AnimalService } from 'src/app/animal.service';


@Component({
  selector: 'app-all-animals',
  templateUrl: './all-animals.component.html',
  styleUrls: ['./all-animals.component.css']
})
export class AllAnimalsComponent implements OnInit {
  firstFiveAnimals: Animal[] = [];

  constructor(public animalService: AnimalService)
   {}

  ngOnInit(): void {
    this.firstFiveAnimals = this.animalService.getFirstFiveAnimals();
  }

  
}