import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../itemservice/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent implements OnInit {
  itemList = null;
  items: Item[] = null;
  itemService: ItemService = null;

  constructor(itemService: ItemService) {
    this.itemService = itemService;
      itemService.isDataChanged.subscribe( value => {
        this.ngOnInit();
      });
  }

  ngOnInit() {
    this.itemList = this.itemService.getItems().subscribe(itms => this.items = itms);
  }

}
