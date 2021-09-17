import GameModel from "../../Models/GameModel";
import { ADD, REMOVE, UPDATE } from "../actions/games";


const initialState = {
    Games: []
};

export default GamesReducer = (state = initialState, action) => {
    let  newState = { ...state };
    let index = -1;
    switch (action.type) {

        case ADD:
            const newGame = new GameModel(
                action.game.id,
                action.game.groupId,
                action.game.date,
                action.game.location,
                action.game.participants,
                action.game.state
            )
            newState.push(newGame)
            return {
                Games: newState.Games
            };

        case REMOVE:
            index = state.Games.findIndex((elem) => elem.id === action.game.id);
            newState.Games.splice(index, 1);

            return {
                Games: newState.Games
            };

        case UPDATE:
            
            index = newState.Game.findIndex((elem) => elem.id === action.game.id);

            newState.Games[index].date = action.game.date;
            newState.Games[index].location = action.game.location;
            newState.Games[index].participants = action.game.participants;
            newState.Games[index].state = action.game.state;

            return {
                Games: newState.Games
            };

        default:
            return state;
    }
};
