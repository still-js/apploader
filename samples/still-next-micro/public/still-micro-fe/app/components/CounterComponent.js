export class CounterComponent extends ViewComponent {

	isPublic = true;

	count = 0;

	increment(){
		this.count = this.count.value + 1;
	}

}