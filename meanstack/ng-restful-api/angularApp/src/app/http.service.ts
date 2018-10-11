import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
	constructor(private _http: Http){
	}

	getTasks(){
		return this._http.get('/tasks');
	}
	showTask(task){
		return this._http.get(`/tasks/${task._id}`, task);
	}
	editTask(task){
		return this._http.put(`/tasks/${task._id}`, task);
	}
	deleteTask(task){
		return this._http.delete(`/tasks/${task._id}`, task);
	}
	addTask(task){
		return this._http.post("/tasks", task);
	}
}