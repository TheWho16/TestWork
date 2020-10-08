import { RandomServise } from "services";


const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_ALL_USERS_TABLE = 'GET_ALL_USERS_TABLE'
const SWITCH_LOADER = 'SWITCH_LOADER'
const GET_STATISTIK = 'GET_STATISTIK'
const FILTER = 'FILTER'
const randomServises = new RandomServise();


const getStatistikAction = (usersData) => {
  return {
    type: GET_STATISTIK,
    payload: usersData
  };
};

const getFilterAction = (usersData) => {
  return {
    type: FILTER,
    payload: usersData
  };
};

const getAllUserAction = (usersData) => {
  return {
    type: GET_ALL_USERS,
    payload: usersData
  };
};


const getAllUserTableAction = (usersData) => {
  return {
    type: GET_ALL_USERS_TABLE,
    payload: usersData
  };
};

const switchLoaderAction = (loader) => {
  return {
    type: SWITCH_LOADER,
    payload: loader
  };
};

export const getAllUserThunk = (page, results) => {
  return (dispatch) => {
    return (randomServises.getAllPeople(page, results)
      .then(dispatch(switchLoaderAction(true)))
      .then(data => {
        dispatch(switchLoaderAction(false))
        dispatch(getAllUserAction(data));
      }));


  }
}

export const getAllUserTableThunk = (params) => {
  return (dispatch) => {
    return randomServises.getAllPeopleTable(params)
      .then(dispatch(switchLoaderAction(true)))
      .then(data => {
        dispatch(switchLoaderAction(false))
        dispatch(getAllUserTableAction(data));
      });


  }
}

export const getFilterThunk = (params) => {
  return (dispatch) => {
    return randomServises.getFilterPeople(params)
      .then(dispatch(switchLoaderAction(true)))
      .then(data => {
        dispatch(switchLoaderAction(false))
        dispatch(getFilterAction(data));
      });


  }
}

export const getStatistikThunk = (params) => {
  return (dispatch) => {
    return randomServises.getStatistick(params)
      .then(dispatch(switchLoaderAction(true)))
      .then(data => {
        dispatch(switchLoaderAction(false))
        dispatch(getStatistikAction(data));
      });


  }
}

