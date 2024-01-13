import {Component, EventEmitter, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {DropdownDirective} from "../shared/dropdown.directive";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    DropdownDirective,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
