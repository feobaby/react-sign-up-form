const defaultState = {
  users: [],
};

// helper function to add new user to list of users
const addNewUser = (allUsers, newUser) => {
  allUsers.push(newUser);
  return allUsers;
};

const formReducer = (state = defaultState, action) => {
  switch (action.type) {
      case 'ALL_USERS': {
          return {
              ...state,
          };
      }
      case 'NEW_USER': {
          const users = state.users;
          const { payload: newUser } = action;
          return {
              ...state,
              users: addNewUser(users, newUser),
          };
      }
      default:
          return state;
  }
};

export default formReducer;