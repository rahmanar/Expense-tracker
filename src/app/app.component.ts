import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uspend: any;
  udesc: any;
  usalary: any;
  udelete: any;
  list: any = [];
  bal: any;
  sum: any;
  qua: any;
  finalAns!: number;
  constructor() {
    let a = localStorage.getItem('list');
    if (a) {
      this.list = JSON.parse(a);
    }
  }
  save() {
    if (this.uspend == "" || this.usalary == null) {
      alert("Please fill the All fields")
    }
    else {
      let f =
      {
        spend: this.uspend,
        Description: this.udesc,
        Balance: this.bal
      };
      this.list.push(f);
      console.log(this.list)
      localStorage.setItem('list', JSON.stringify(this.list));
      this.answer();
    }
  }
  answer() {
    this.sum = this.list.reduce((a: number, b: any) => {
      return a + parseInt(b.spend);
    }, 0)
    var totalSalary = this.usalary;
    this.bal = totalSalary - this.sum;
   
    //  this.list.push(this.bal)
    console.log(this.bal);
 }
  refresh() {
    setInterval(function () {
      document.location.reload();
    }, 100);
    window.localStorage.removeItem('list');
  }

  delete(i: any) {
    var arrEl = this.list[i];
    var qua = arrEl.spend;
    this.bal=(parseInt(qua)+parseInt(this.bal));
    this.list.splice(i, 1);
    // this.z = this.list.find((x:any) => x.Description === 'food' );
    // console.log(this.z);
  }

}



