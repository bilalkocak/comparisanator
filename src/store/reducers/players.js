import {
    FETCH_PLAYERS_REJECTED,
    FETCH_PLAYERS_FULFILLED,
    FETCH_PLAYERS_PENDING,
    TOGGLE_TO_FAV
} from "../actions/players";

import {showError} from "../../utils/helper";

const initialState = {
    loading: false,
    players: [],
    error: '',
    favPlayers: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYERS_PENDING:
            return {
                ...state,
                loading: true
            };
        case FETCH_PLAYERS_FULFILLED:
            return {
                ...state,
                loading: false,
                players: action.payload
            };
        case FETCH_PLAYERS_REJECTED:
            showError(action.payload)
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case TOGGLE_TO_FAV:
            const id = action.payload.id
            let players = state.favPlayers

            if (!players[id]) {
                players[id] = action.payload
            } else {
                delete players[id];
            }

            return {
                ...state,
                loading: false,
                favPlayers: players
            };
        default:
            return state;
    }
}
