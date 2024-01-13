import {Component, OnInit} from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {Recipe} from "./recipe.model";
import {NgIf} from "@angular/common";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeDetailComponent,
    NgIf
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit{
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) => {
          this.selectedRecipe = recipe
    }
      );
  }
}
