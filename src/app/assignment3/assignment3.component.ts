import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  showSecret = false;
  log = [];
  count= [];

  onPlus(){
    console.log('>check2',this.count);
    this.count.push(this.count.length +1)
  }
  onMinus(){
    console.log('>check2',this.count);
    this.count.splice(this.count.length-1)
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date())
    console.log('>check1',this.log);

  }
 
  constructor() { 
  }

  ngOnInit(): void {

    


  }

}
