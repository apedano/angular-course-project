import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


@Injectable({ providedIn: 'root' })
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
        new Recipe('A test recipe 2', 'This is a test2', 'https://www.fattoincasadabenedetta.it/wp-content/uploads/2019/07/spaghetti-con-le-vongole.jpg')
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