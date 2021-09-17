

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';


export const Auth = (userId) =>
{
    return {
        type :AUTHENTICATE, userId: userId
    }
}

export const Logout = () =>
{
    return {
        type :LOGOUT
    }
}