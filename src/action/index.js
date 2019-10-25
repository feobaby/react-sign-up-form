export const AllUsers = () => ({
  type: 'ALL_USERS',
});

export const newUser = payload => ({
  type: 'NEW_USER',
  payload,
});