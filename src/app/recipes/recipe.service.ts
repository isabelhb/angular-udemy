import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            "Cinnamon rolls",
            "Tasty treat",
            "https://www.countdown.co.nz/Content/Recipes/227600-large-Cinnamon_Scrolls-810x520.jpg",
            [new Ingredient('Cinnamon', 1), new Ingredient('Roll', 4)]
            ),
        new Recipe(
            "Crompouce",
            "It's a croissant tompouce.",
            "https://www.leukerecepten.nl/wp-content/uploads/2023/11/crompouce.jpg",
            [new Ingredient('Croissant', 2), new Ingredient('Tompouce', 1)])
    ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
      return this.recipes.slice()[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
