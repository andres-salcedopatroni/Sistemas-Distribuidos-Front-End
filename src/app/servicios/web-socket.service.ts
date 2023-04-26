import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io}  from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket=io('http://localhost:3000');;    
  message:any;
  
  constructor() {
    
  }

  public sendMessage(message: any) {
    console.log('sendMessage: ', message);
    this.socket.emit('message', message);
  }

  public getNewMessage():Observable<any>{
    this.socket.on('sendMessage', (message) =>{
      this.message=message;
      console.log(message);
    });
    return this.message;
  };

}
