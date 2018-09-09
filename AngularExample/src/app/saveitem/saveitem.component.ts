import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../itemservice/item.service';

@Component({
  selector: 'app-saveitem',
  templateUrl: './saveitem.component.html',
  styleUrls: ['./saveitem.component.css']
})
export class SaveitemComponent implements OnInit {

  item = null;
  itemService:  ItemService = null;
  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }
  ngOnInit() {
    this.item = this.itemService.defaultItem();
  }
  onSubmit() {
    this.itemService.saveItem(this.item);
    this.item = this.itemService.emptyItem();
    this.itemService.isDataChanged.next(true);
  }

}
