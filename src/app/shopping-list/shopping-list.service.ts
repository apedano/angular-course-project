import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

    ingredientsSubject: Subject<Ingredient[]> = new Subject<Ingredient[]>(); 

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        this.emitIngredients();
    }

    add(...ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.emitIngredients();    
    }

    emitIngredients() {
        this.ingredientsSubject.next(this.ingredients);
    }



}