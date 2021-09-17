
export const CREATE = 'CREATE';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';
export const ADD_group = 'ADD_GAME';
export const ADD_PLAYER = 'ADD_PLAYER';
export const SET_MANAGER = 'SET_MANAGER';
export const LEAVE_GROUP = 'LEAVE_GROUP';

export const PRIVACY_SETTINGS = ['Public', 'Private'];

export const Create = (groupId, groupData) => {
    const group = {groupId: groupId, groupData: groupData };
    return {
        type: CREATE, group: group
    }
}

export const Remove = (groupId) => {
    const group = { groupId: groupId};
    return {
        type: REMOVE, group: group
    }
}

export const Update = (groupId, groupData) =>
{   
    const group = { groupId: groupId, groupData: groupData };
    return {
        type: UPDATE, group: group
    }
}

export const Addgroup = (groupId, gameId) =>
{   
    const group = { groupId: groupId, gameId: gameId };
    return {
        type: ADD_GAME, group: group
    }
}

export const AddPlayer = (groupId, userId) =>
{   
    const group = { groupId: groupId, userId: userId };
    return {
        type: ADD_PLAYER, group: group
    }
}

export const SetManager = (groupId, userId) =>
{   
    const group = { groupId: groupId, userId: userId };
    return {
        type: SET_MANAGER, group: group
    }
}

export const LeaveGroup = (groupId, userId) =>
{   
    const group = { groupId: groupId, userId: userId };
    return {
        type: LEAVE_GROUP, group: group
    }
}