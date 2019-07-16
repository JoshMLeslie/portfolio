import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposModule } from './repos/repos.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule
		, ReposModule
	]
	, exports: [ ReposModule ]
})
export class GithubModule { }
