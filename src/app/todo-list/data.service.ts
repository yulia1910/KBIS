import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  SERVER_URL: string = "http://localhost:5300/api/";

  constructor(private httpClient: HttpClient) { }

  public getList(){ 
    return this.httpClient.get(this.SERVER_URL + 'todoitems');
  }

/* public getItem(itemId){
    return this.httpClient.get(`${this.SERVER_URL + 'todoitems'}/${itemId}`); 
}
public createPolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
   return this.httpClient.post(`${this.SERVER_URL + 'todoitems'}`, policy)
}

public deletePolicy(itemId){
   return this.httpClient.delete(`${this.SERVER_URL + 'todoitems'}/${itemId}`)
}
public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
   return this.httpClient.put(`${this.SERVER_URL + 'todoitems'}/${policy.id}`, policy)
} */
}
