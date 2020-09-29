import {
	PageHome,
	Contacts
} from 'pages';

const routes = {
	'home': {
		path: '/',
		page: PageHome,
		name: 'Home',
		link () {
			return this.path;
		},
		exact: true,
	},
	'contacts': {
		path: '/contacts',
		page: Contacts,
		name: 'contacts',
		link () {
			return this.path;
		},
		exact: true,
	},
};

const __ROOT_ROUTE__ = [routes.home.link(),routes.contacts.link()]
// const __ROOT_ROUTE__ = routes.contacts.link();


export { routes, __ROOT_ROUTE__ };
