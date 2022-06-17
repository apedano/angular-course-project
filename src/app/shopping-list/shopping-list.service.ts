import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

    ingredientsEventEmitter: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>(); 

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        this.emitIngredients();
    }

    add(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.emitIngredients();    
    }

    emitIngredients() {
        this.ingredientsEventEmitter.emit(this.ingredients);
    }



}