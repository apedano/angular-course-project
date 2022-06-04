import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
    new Recipe('A test recipe 2', 'This is a test2', 'https://www.fattoincasadabenedetta.it/wp-content/uploads/2019/07/spaghetti-con-le-vongole.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
