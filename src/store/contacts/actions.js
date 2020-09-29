import { RandomServise } from "services";


const GET_ALL_USERS = 'GET_ALL_USERS'

const getAllUserAction = (usersData) => {
  return {
    type: GET_ALL_USERS,
    payload: usersData
  };
};


export const getAllUserThunk = () => {

  return (dispatch) => {
    RandomServise.getAllPeople()
      .then(data => {
        dispatch(getAllUserAction(data));
      });


  }
}

export default getAllUserAction