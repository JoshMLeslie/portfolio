import { Owner, IOwner } from '../owner';

export interface IRepo {
		'id': number;
		'node_id': string;
		'name': string;
		'full_name': string;
		'private': boolean;
		'owner': IOwner;
		'html_url': string;
		'description': null;
		'fork': boolean;
		'url': string;
		'forks_url': string;
		'keys_url': string;
		'collaborators_url': string;
		'teams_url': string;
		'hooks_url': string;
		'issue_events_url': string;
		'events_url': string;
		'assignees_url': string;
		'branches_url': string;
		'tags_url': string;
		'blobs_url': string;
		'git_tags_url': string;
		'git_refs_url': string;
		'trees_url': string;
		'statuses_url': string;
		'languages_url': string;
		'stargazers_url': string;
		'contributors_url': string;
		'subscribers_url': string;
		'subscription_url': string;
		'commits_url': string;
		'git_commits_url': string;
		'comments_url': string;
		'issue_comment_url': string;
		'contents_url': string;
		'compare_url': string;
		'merges_url': string;
		'archive_url': string;
		'downloads_url': string;
		'issues_url': string;
		'pulls_url': string;
		'milestones_url': string;
		'notifications_url': string;
		'labels_url': string;
		'releases_url': string;
		'deployments_url': string;
		'created_at': string;
		'updated_at': string;
		'pushed_at': string;
		'git_url': string;
		'ssh_url': string;
		'clone_url': string;
		'svn_url': string;
		'homepage': null | string;
		'size': number;
		'stargazers_count': number;
		'watchers_count': number;
		'language': string;
		'has_issues': boolean;
		'has_projects': boolean;
		'has_downloads': boolean;
		'has_wiki': boolean;
		'has_pages': boolean;
		'forks_count': number;
		'mirror_url': null;
		'archived': boolean;
		'disabled': boolean;
		'open_issues_count': number;
		'license': null;
		'forks': number;
		'open_issues': number;
		'watchers': number;
		'default_branch': string;
}

export class Repo implements IRepo {
		'id': number;
		'node_id': string;
		'name': string;
		'full_name': string;
		'private': boolean;
		'owner': Owner;
		'html_url': string;
		'description': null;
		'fork': boolean;
		'url': string;
		'forks_url': string;
		'keys_url': string;
		'collaborators_url': string;
		'teams_url': string;
		'hooks_url': string;
		'issue_events_url': string;
		'events_url': string;
		'assignees_url': string;
		'branches_url': string;
		'tags_url': string;
		'blobs_url': string;
		'git_tags_url': string;
		'git_refs_url': string;
		'trees_url': string;
		'statuses_url': string;
		'languages_url': string;
		'stargazers_url': string;
		'contributors_url': string;
		'subscribers_url': string;
		'subscription_url': string;
		'commits_url': string;
		'git_commits_url': string;
		'comments_url': string;
		'issue_comment_url': string;
		'contents_url': string;
		'compare_url': string;
		'merges_url': string;
		'archive_url': string;
		'downloads_url': string;
		'issues_url': string;
		'pulls_url': string;
		'milestones_url': string;
		'notifications_url': string;
		'labels_url': string;
		'releases_url': string;
		'deployments_url': string;
		'created_at': string;
		'updated_at': string;
		'pushed_at': string;
		'git_url': string;
		'ssh_url': string;
		'clone_url': string;
		'svn_url': string;
		'homepage': null | string;
		'size': number;
		'stargazers_count': number;
		'watchers_count': number;
		'language': string;
		'has_issues': boolean;
		'has_projects': boolean;
		'has_downloads': boolean;
		'has_wiki': boolean;
		'has_pages': boolean;
		'forks_count': number;
		'mirror_url': null;
		'archived': boolean;
		'disabled': boolean;
		'open_issues_count': number;
		'license': null;
		'forks': number;
		'open_issues': number;
		'watchers': number;
		'default_branch': string;

		constructor(data?: IRepo) {
				this.owner = new Owner();

				if (data) {
						for (const key in data) {
								if (key in this.instance) {
										if (this[key] === 'owner' ) {
												this.owner = new Owner(data[key]);
										} else {
												this[key] = data[key];
										}
								}
						}
				}
		}

		update(data: { [attr: string]: string | number | boolean }) {
				if (data) {
						for (const key in data) {
								if (key in this.instance) {
										this[key] = data[key];
								}
						}
				}
		}

		get instance(): IRepo {
				return {
						id: this.id,
						node_id: this.node_id,
						name: this.name,
						full_name: this.full_name,
						private: this.private,
						owner: this.owner.instance,
						html_url: this.html_url,
						description: this.description,
						fork: this.fork,
						url: this.url,
						forks_url: this.forks_url,
						keys_url: this.keys_url,
						collaborators_url: this.collaborators_url,
						teams_url: this.teams_url,
						hooks_url: this.hooks_url,
						issue_events_url: this.issue_events_url,
						events_url: this.events_url,
						assignees_url: this.assignees_url,
						branches_url: this.branches_url,
						tags_url: this.tags_url,
						blobs_url: this.blobs_url,
						git_tags_url: this.git_tags_url,
						git_refs_url: this.git_refs_url,
						trees_url: this.trees_url,
						statuses_url: this.statuses_url,
						languages_url: this.languages_url,
						stargazers_url: this.stargazers_url,
						contributors_url: this.contributors_url,
						subscribers_url: this.subscribers_url,
						subscription_url: this.subscription_url,
						commits_url: this.commits_url,
						git_commits_url: this.git_commits_url,
						comments_url: this.comments_url,
						issue_comment_url: this.issue_comment_url,
						contents_url: this.contents_url,
						compare_url: this.compare_url,
						merges_url: this.merges_url,
						archive_url: this.archive_url,
						downloads_url: this.downloads_url,
						issues_url: this.issues_url,
						pulls_url: this.pulls_url,
						milestones_url: this.milestones_url,
						notifications_url: this.notifications_url,
						labels_url: this.labels_url,
						releases_url: this.releases_url,
						deployments_url: this.deployments_url,
						created_at: this.created_at,
						updated_at: this.updated_at,
						pushed_at: this.pushed_at,
						git_url: this.git_url,
						ssh_url: this.ssh_url,
						clone_url: this.clone_url,
						svn_url: this.svn_url,
						homepage: this.homepage,
						size: this.size,
						stargazers_count: this.stargazers_count,
						watchers_count: this.watchers_count,
						language: this.language,
						has_issues: this.has_issues,
						has_projects: this.has_projects,
						has_downloads: this.has_downloads,
						has_wiki: this.has_wiki,
						has_pages: this.has_pages,
						forks_count: this.forks_count,
						mirror_url: this.mirror_url,
						archived: this.archived,
						disabled: this.disabled,
						open_issues_count: this.open_issues_count,
						license: this.license,
						forks: this.forks,
						open_issues: this.open_issues,
						watchers: this.watchers,
						default_branch: this.default_branch
				};
		}
}
