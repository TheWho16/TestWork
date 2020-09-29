
const initalState ={
  usersData: null
}

const reducerUSER = (state = initalState , action) => {

  switch (action.type) {
    case 'GET_ALL_USERS':
      return { ...state, usersData:action.payload }

    default:
      return state;
  }
};

export default reducerUSER;
