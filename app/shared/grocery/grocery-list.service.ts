import { Injectable, OnInit } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Grocery } from "./grocery";
// import { Database } from "../../providers/database/database";
@Injectable()
export class GroceryListService {
  baseUrl = Config.apiUrl + "appdata/" + Config.appKey + "/Groceries";
  groceryList = [];
  counter = 0;
  // constructor(private http: Http, private database: Database) { }
  constructor(private http: Http) { }

  public ngOnInit() {
    // let rows = this.database.getDatabase().executeQuery("stocks");
    // for (let i = 0; i < rows.length; i++) {
    //   this.groceryList.push(rows[i]);
    // }
  }

  load() {
    // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
    let params = new URLSearchParams();
    params.append("sort", "{\"_kmd.lmt\": 1}");

    return this.http.get(this.baseUrl, {
      headers: this.getCommonHeaders(),
      params: params
    })
      .map(res => res.json())
      .map(data => {
        let groceryList = [];
        data.forEach((grocery) => {
          groceryList.push(new Grocery(grocery._id, grocery.Name));
        });
        return this.groceryList;
      })
      .catch(this.handleErrors);
  }
  add(name: string) {
    return this.http.post(
      this.baseUrl,
      JSON.stringify({ Name: name }),
      { headers: this.getCommonHeaders() }
    )
    .map(res => res.json())
    .map(data => {
      return new Grocery(data._id, name);
    })
    .catch(this.handleErrors);
    // var grocery = new Grocery(name+this.counter++, name);
    // this.database.getDatabase().createDocument(grocery);
    // return grocery;
  }
  delete(id: string) {
    return this.http.delete(
      this.baseUrl + "/" + id,
      { headers: this.getCommonHeaders() }
    )
      .map(res => res.json())
      .catch(this.handleErrors);
  }
  getCommonHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Kinvey " + Config.token);
    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);

  }
}
