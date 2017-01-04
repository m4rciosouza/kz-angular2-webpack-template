import { Component } from '@angular/core';

@Component({
	selector: 'kz-demo',
	templateUrl: 'demo.component.html',
	styleUrls: ['demo.component.css']
})
export class DemoComponent {
	data = new Date(2016, 6, 21, 16, 53, 54);
}
