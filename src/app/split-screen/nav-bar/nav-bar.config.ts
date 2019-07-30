const BASE_TABS = [
	{ title: 'About', url: 'about' }
	, { title: 'Resume', url: 'resume' }
];

/* Because routing data refuses to work */
export const TAB_ROUTES = {
	'/web': [
		{ title: 'Home', url: 'web' }
		, { title: 'Projects', url: 'web/projects'}
		, { title: 'Github', url: 'web/github'}
		, ...BASE_TABS
	],
	'/industrial': [
		{ title: 'Home', url: 'industrial' }
		, ...BASE_TABS
	],
	default: {
		...BASE_TABS
	}
};
