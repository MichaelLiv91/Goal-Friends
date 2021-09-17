import GroupModel from "../../Models/GroupModel";
import { ADD_GAME, ADD_PLAYER, CREATE, REMOVE, SET_MANAGER, UPDATE, LEAVE_GROUP } from "../actions/groups";


const initialState = {
    Groups: []
};

export default GroupsReducer = (state = initialState, action) => {
    let newState = { ...state };
    let index = -1;
    if(action.group)
    {
        index = newState.Groups.findIndex((elem) => elem.id === action.group.groupId);
    }
    if (index >= 0 || action.type === CREATE) {
        switch (action.type) {

            case CREATE:

                const newGroup = new GroupModel(action.group.groupId, action.group.groupData.name, action.group.groupData.state)
                newState.Groups.push(newGroup);

                return { Groups: newState.Groups };

            case REMOVE:

                newState.Groups.splice(index, 1);

                return { Groups: newState.Groups };

            case UPDATE:

                newState.Groups[index].location = action.group.location;
                newState.Groups[index].state = action.group.state;
                newState.Groups[index].picture = action.group.picture;

                return { Groups: newState.Groups };

            case ADD_GAME:

                newState.Groups[index].games.push(action.group.gameId);

                return { Groups: newState.Groups };

            case ADD_PLAYER:

                newState.Groups[index].particeipants.push(action.group.userId);

                return { Groups: newState.Groups };

            case SET_MANAGER:

                newState.Groups[index].managers.push(action.group.userId);

                return { Groups: newState.Groups };

            case LEAVE_GROUP:

                const userIndex = newState.Groups[index].particeipants.findIndex(elem => elem === action.group.userId)
                newState.Groups[index].particeipants.splice(userIndex, 1);

                if (newState.Groups[index].particeipants.length === 0) {
                    newState.Groups.splice(index, 1);
                } else if (newState.Groups[index].managers.length === 0) {
                    newState.Groups[index].managers[0] = newState.Groups[index].particeipants[0]
                }

                return { Groups: newState.Groups };


            default:
                return state;
        }
    }
    return state;
};

