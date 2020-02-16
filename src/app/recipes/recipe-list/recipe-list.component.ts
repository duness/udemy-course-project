import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Just a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/480px-Honeycrisp.jpg'),
    new Recipe('Another recipe', 'This is another fine food', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Rice_grains_%28IRRI%29.jpg/640px-Rice_grains_%28IRRI%29.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
