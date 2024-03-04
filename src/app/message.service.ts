import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:string[] = []

  //Add message

  add(message:string): void {
    this.messages.push(message);
  }

  //Clear all messages
  clear(){
    this.messages=[];
  }

}
