import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test title', 'this is simple test', 'http://static.inven.co.kr/image_2011/overwatch/common/logo1_overwatch.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
