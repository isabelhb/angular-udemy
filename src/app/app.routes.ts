import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {RecipeComponent} from "./recipes/recipe.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: "full"},
  {path: 'recipes', component: RecipeComponent, children: [
      { path: '' , component: RecipeStartComponent},
      { path: 'new' , component: RecipeEditComponent},
      { path: ':id' , component: RecipeDetailComponent},
      { path: ':id/edit' , component: RecipeEditComponent},
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{
}
