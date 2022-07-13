import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients : Ingredient[];
  ingredientsSubjectSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }
  

  ngOnInit(): void {
    this.ingredientsSubjectSubscription = this.shoppingListService.ingredientsSubject.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
    this.shoppingListService.getIngredients();
  }

  ngOnDestroy(): void {
    this.ingredientsSubjectSubscription.unsubscribe();
  }



}
