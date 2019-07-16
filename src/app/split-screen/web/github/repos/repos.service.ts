import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { map, filter } from 'rxjs/operators';
import { Repo } from './repos';

@Injectable({
	providedIn: 'root'
})
export class ReposService {

	constructor(private http: HttpClient) { }

	getRepos(perPage = 50, currentPage = 1): Observable<Repo[]> {
	// getRepos(perPage = 50, currentPage = 1): Observable<any> {
		const githubUser = environment.githubUser;

		const req = new HttpRequest('GET',
			`https://api.github.com/users/${githubUser}/repos?per_page=${perPage}&page=${currentPage}`
		);

		return this.http.request(req).pipe(
			filter(res => res instanceof HttpResponse)
			, map((res: HttpResponse<any>) => {
				return res.body.map(repo => new Repo(repo));
			})
		);
	}
}
