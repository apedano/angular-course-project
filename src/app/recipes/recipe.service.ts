import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";


@Injectable({ providedIn: 'root' })
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe', 
            'This is a test', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
            [new Ingredient('Recipe1 Ingre1', 2), new Ingredient('Recipe1 Ingre2', 4)]
            ),
        new Recipe(
            'A test recipe 2', 
            'This is a test2', 
            'https://www.fattoincasadabenedetta.it/wp-content/uploads/2019/07/spaghetti-con-le-vongole.jpg',
            [new Ingredient('Recipe2 Ingre1', 2), new Ingredient('Recipe2 Ingre2', 10), new Ingredient('Recipe2 Ingre3', 500)]
            )
    ];

    selectedRecipeEE: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    /**
     * 
     * @returns returns a copy of recipes via slice
     * no passed by reference
     */
    getRecipes() {
        return this.recipes.slice();
    }

    

}