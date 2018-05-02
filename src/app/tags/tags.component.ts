
import { Component,Output, EventEmitter  } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.css']
})
export class TagsComponent {
	
	@Output() 
	public changed: EventEmitter<string[]>;

	public tags: string[];

	public current: string;

	constructor() {
		this.changed = new EventEmitter();
	}

	public setValue(value: string[]) {
		this.tags = value;
	}

	public remove(tag: string) {
		var index = this.tags.indexOf(tag, 0);
		if (index != undefined) {
			this.tags.splice(index, 1);
			this.changed.emit(this.tags);
		}
	}

	public add() {
		this.tags.push(this.current);
		this.changed.emit(this.tags);
		this.current = '';
	}
}