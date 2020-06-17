import { Component } from '@angular/core';
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  firstName = new Date()

  doSomething(val:string) : void{
    console.log('My Name is : ' ,val);
  }

  todoValue:string;
  list:Todo[];

  ngOnInit(){ //same as componentDidMount
    this.list = [];
    this.todoValue = ""
  }

  addItem(){
    if(this.todoValue !== ""){

      const newItem:Todo = {
        id:Date.now(),
        value:this.todoValue,
        isDone:false
      };

      this.list.push(newItem);

    } 
    this.todoValue = ""
  }


  deleteItem(id:number){
    this.list = this.list.filter(item => item.id !== id);
  }


}
