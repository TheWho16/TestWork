
const initalState = {
	usersData: null,
	usersDataTable: null,
	loader: true,
	statistik: null
}

const reducerUSER = (state = initalState, action) => {

	switch (action.type) {
		case 'SWITCH_LOADER':
			return { ...state, loader: action.payload }

		case 'GET_ALL_USERS':
			return { ...state, usersData: action.payload }

		case 'GET_ALL_USERS_TABLE':
			return { ...state, usersDataTable: action.payload }

		case 'GET_STATISTIK':
			return { ...state, statistik: action.payload }

		case 'FILTER':
			return { ...state, usersData: action.payload }

		default:
			return state;
	}
};

export default reducerUSER;
