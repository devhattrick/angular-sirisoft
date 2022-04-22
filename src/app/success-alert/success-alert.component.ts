import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  username = '';
  allowNewServer =false; // ตั้งต้น
  createName =false;
  status="Error";
  name="TEstName";
  testArray=['one','two','three'];
  myName="Hattrick"

  constructor() { 
    this.status = Math.random() > 0.5 ? 'Success':'Error'
    setTimeout(()=>{
      this.allowNewServer=true; //2 sec
    },2000);

    }

  ngOnInit(): void {
  }
  onCreateStatus(){
   this.status ="Success"
   this.testArray.push(this.myName)

  }
  onUpdateName(){
    this.createName=true;
    // console.log('Event>>',event)
    // this.name=event.target.value;
  }
  getColor(){
    return this.status === 'Success' ? 'green':'red';
  }

}
