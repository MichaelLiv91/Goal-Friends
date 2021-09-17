

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';


export const Add = (gameId, gameData) => {
    const game = { gameId: gameId, gameData: gameData };
    return {
        type: ADD, game: game
    }
}


export const Remove = (gameId) => {
    return {
        type: REMOVE, gameId: gameId
    }
}


export const Update = (gameId, gameData) =>
{   
    const game = { gameId: gameId, gameData: gameData };
    return {
        type: UPDATE, game: game
    }
}