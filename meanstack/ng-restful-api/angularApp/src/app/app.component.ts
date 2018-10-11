import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	tasks = [];
	thistask: any;
	show_form = false;
	showeditform = false;
	idtask = []; //was for interating through a list of tasks i searched for (restful tasks interactive)
	showthistask = {
		_id:""
	}
	newtask = {
			title: "",
			description:"",
		};
	constructor(private _httpService: HttpService){
	}

	ngOnInit(){
		// this.getTasksFromService(); //lets all tasks show up as the page loads instead of on click
		
	}

	getTasksFromService(){
		console.log(event);
		console.log(this);
		let observable = this._httpService.getTasks();
		console.log(this);
		observable.subscribe(data => {
			console.log("Got out Tasks!", data.json().tasks);
			console.log(this.tasks);
			this.tasks = data.json().tasks;
		});
	}

	onEdit(event){
		event.preventDefault();
		console.log(this);
		let observable = this._httpService.editTask(this.thistask);
		console.log(this);
		observable.subscribe();
		this.getTasksFromService();
	}

	onDelete(event, _id, title, description){
		event.preventDefault();
		let task = {
			_id: _id,
			title: title,
			description: description,
		}
		console.log(task);
		console.log(this);
		let observable = this._httpService.deleteTask(task);
		observable.subscribe();
		this.getTasksFromService();
	}

	showEditField(event, _id, title, description, completed){
		event.preventDefault();
		this.thistask = {
			_id: _id,
			title: title,
			description: description,
			completed: completed,
		};
		console.log(this.thistask); // seeing what data im pulling
		this.showeditform = true;
	}

	addNewTask(event){
		event.preventDefault();
		let observable = this._httpService.addTask(this.newtask);
		observable.subscribe();
		this.newtask = {
			title: "",
			description: "",
		};
	}
// was for the project restful tasks interactive.
	showTaskFromService(){
		event.preventDefault();
		console.log(this); //showing my data being sent
		let observable = this._httpService.showTask(this.showthistask);
		console.log(this.showthistask); //showing how my data is being binded
		observable.subscribe(data =>{
			console.log(data.json().tasks);
			this.idtask = data.json().tasks;
		this.show_form = true; //having the field only show up when i go to search for a task
		});
	}

}
