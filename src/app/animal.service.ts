import { Injectable } from '@angular/core';
export interface Animal {
  name: string;
  species: string;
  foods: {
    likes: string[];
    dislikes: string[];
  };
}
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }
  animals: Animal[] = [
    
      {
        name: "Meowsy",
        species : "cat",
        foods: {
        likes: ["tuna", "catnip"],
        dislikes: ["ham", "zucchini"]
        }
      },
      {
        name: "Barky",
        species : "dog",
        foods: {
        likes: ["bones", "carrots"],
        dislikes: ["tuna"]
        }
      },
      {
        name: "Purrpaws",
        species : "cat",
        foods: {
        likes: ["mice"],
        dislikes: ["cookies"]
        }
      },
      
        {
          name: "Whiskers",
          species: "cat",
          foods: {
          likes: ["tuna", "milk"],
          dislikes: ["lettuce", "chocolate"]
          }
        },
        {
          name: "Rover",
          species: "dog",
          foods: {
          likes: ["steak", "potatoes"],
          dislikes: ["spinach"]
          }
        },
        {
          name: "Squeaky",
          species: "mouse",
          foods: {
          likes: ["cheese", "seeds"],
          dislikes: ["broccoli"]
          }
        },
        {
         name: "Fluffy",
         species: "rabbit",
         foods: {
            likes: ["carrots", "hay"],
            dislikes: ["meat"]
          }
        },
        {
          name: "Oscar",
          species: "fish",
          foods: {
            likes: ["fish flakes", "worms"],
            dislikes: ["lettuce"]
          }
        },
        {
          name: "Charlie",
          species: "parrot",
          foods: {
            likes: ["fruit", "nuts"],
            dislikes: ["spicy food"]
          }
        },
        {
          name: "Lola",
          species: "hamster",
          foods: {
          likes: ["seeds", "fruits"],
          dislikes: ["cabbage"]
          }
        }
      
    
  ];

  getFirstFiveAnimals(): Animal[] {
    return this.animals.slice(0, 5);
  }
}
