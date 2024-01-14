import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {RecipeComponent} from "./recipes/recipe.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {FormsModule} from "@angular/forms";
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import { AppRoutingModule} from "./app.routes";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    RecipeComponent,
    ShoppingListComponent,
    FormsModule,
    DropdownDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'udemy';
}
