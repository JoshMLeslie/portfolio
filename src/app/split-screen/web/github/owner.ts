export interface IOwner {
		'login': string;
		'id': number;
		'node_id': string;
		'avatar_url': string;
		'gravatar_id': string;
		'url': string;
		'html_url': string;
		'followers_url': string;
		'following_url': string;
		'gists_url': string;
		'starred_url': string;
		'subscriptions_url': string;
		'organizations_url': string;
		'repos_url': string;
		'events_url': string;
		'received_events_url': string;
		'type': string;
		'site_admin': boolean;
}

export class Owner implements IOwner {
		'login': string;
		'id': number;
		'node_id': string;
		'avatar_url': string;
		'gravatar_id': string;
		'url': string;
		'html_url': string;
		'followers_url': string;
		'following_url': string;
		'gists_url': string;
		'starred_url': string;
		'subscriptions_url': string;
		'organizations_url': string;
		'repos_url': string;
		'events_url': string;
		'received_events_url': string;
		'type': string;
		'site_admin': boolean;

		constructor(data?: IOwner) {
				if (data) {
						for (const key in data) {
								if (key in this.instance) {
										this[key] = data[key];
								}
						}
				}
		}

		update(data: {[attr: string]: string | number | boolean }) {
				if (data) {
						for (const key in data) {
								if (key in this.instance) {
										this[key] = data[key];
								}
						}
				}
		}

		get instance(): IOwner {
				return {
						login: this.login,
						id: this.id,
						node_id: this.node_id,
						avatar_url: this.avatar_url,
						gravatar_id: this.gravatar_id,
						url: this.url,
						html_url: this.html_url,
						followers_url: this.followers_url,
						following_url: this.following_url,
						gists_url: this.gists_url,
						starred_url: this.starred_url,
						subscriptions_url: this.subscriptions_url,
						organizations_url: this.organizations_url,
						repos_url: this.repos_url,
						events_url: this.events_url,
						received_events_url: this.received_events_url,
						type: this.type,
						site_admin: this.site_admin
				};
		}
}
