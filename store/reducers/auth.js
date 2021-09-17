import { AUTHENTICATE, LOGOUT } from '../actions/auth';

const initialState = {
  userId: null,
};

export default AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        userId: action.userId,
      };
   
    case LOGOUT:
      return {
        userId: null,
      };
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    default:
      return state;
  }
};
