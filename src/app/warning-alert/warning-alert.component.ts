import { Component } from "@angular/core";

@Component({
    selector:'app-warning-alert',
    template:`
    <p>This is a warning, you are in danger!</p>
    `,
    styles: [`
    p{
        font-size:20px;
        background-color:red;
        border:2px solid black;
    }
    `]
})
export class WarningAlertComponent{

}