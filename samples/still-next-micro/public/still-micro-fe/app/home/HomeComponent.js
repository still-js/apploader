export class HomeComponent extends ViewComponent {

	isPublic = true;

	template = `
		<div class="itWorked still-worked-home-container">
			<h1><u>Still.js Microfrontend Project</u></h1>
			<h2 class="still-fw-before-logo">Still.js Framework</h2>
			<h1>It Worked</h1>
			<p class="still-home-orientation-text">
				This is the HomeComponent, go to 
				<b>app/home/HomeComponent&#46;js</b> path<br>
				and do you adjustments accordingly
			</p>
		</div>
	`;
}