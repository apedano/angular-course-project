import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { throttleTime } from 'rxjs';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, 
    private recipeService: RecipeService,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRoute.params
    .subscribe(
      (updatedParams: Params) => {
        if (updatedParams['id']) {
          const id: number = +updatedParams['id'];
          this.recipe = this.recipeService.getRecipe(id);
        }
      }
    );
  }

  toShoppingListClick() {
    this.shoppingListService.add(...this.recipe.ingredients);
    alert("Ingrdients added to the shopping list!");
    
  }

}
