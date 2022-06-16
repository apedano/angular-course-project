import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') ampuntInput: ElementRef;
  @Output('ingredientAdded') ingredientAddedEM: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    const addedIngredient: Ingredient = new Ingredient(this.nameInput.nativeElement.value, this.ampuntInput.nativeElement.value);
    this.ingredientAddedEM.emit(addedIngredient);
  }

}
