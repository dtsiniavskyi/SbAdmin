import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'badge',
    templateUrl: './badge.component.html'
})
export class BadgeComponent implements OnInit {
    @Input() count: number;

    constructor() {
        this.count = 0;
    }

    ngOnInit() {
        console.log(this.count);
    }
}