import { Component, OnInit } from '@angular/core';
import { Repo } from './repos';
import { ReposService } from './repos.service';

@Component({
	selector: 'app-repos',
	templateUrl: './repos.component.html',
	styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

	repos: Repo[];

	constructor(private reposService: ReposService) { }

	ngOnInit() {
		this.reposService.getRepos().subscribe(repos => {
			debugger;
			this.repos = repos;
		});
	}

}
