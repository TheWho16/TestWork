import { RandomServise } from "services";


const GET_ALL_USERS = 'GET_ALL_USERS'

const getAllUserAction = (usersData) => {
  return {
    type: GET_ALL_USERS,
    payload: usersData
  };
};


export const getAllUserThunk = (page, results) => {
  const randomServises = new RandomServise();
  return (dispatch) => {
    return (randomServises.getAllPeople(page, results)
      .then(data => {
        dispatch(getAllUserAction(data));
      }));


  }
}

export default getAllUserAction