import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {RecipeComponent} from "./recipes/recipe.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: "full"},
  {path: 'recipes', component: RecipeComponent, children: [
      { path: '' }
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{
}
