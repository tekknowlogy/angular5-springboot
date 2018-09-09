import { Injectable } from '@angular/core';
import { Item } from '../item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {
   public isDataChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }
  saveItem (item: Item) {
    alert(item.name);
   this.http.post('/api/item/save', item).subscribe(res => console.log(res));;
  }
  defaultItem () {
    return new Item('Amine Doukkani', 'FullStack java/JEE Engineer', 'Angular 5!');
  }
  emptyItem () {
    return new Item('', '', '');
  }
  getItems(): Observable<Item[]> {
        return this.http.get<Item[]>('/api/item/list');
    }

}
