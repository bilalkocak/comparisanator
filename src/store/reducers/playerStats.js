import {
    FETCH_PLAYER_STATS_FULFILLED,
    FETCH_PLAYER_STATS_PENDING,
    FETCH_PLAYER_STATS_REJECTED,
    ADD_PLAYER_TO_COMPARE_FULFILLED,
    ADD_PLAYER_TO_COMPARE_PENDING,
    ADD_PLAYER_TO_COMPARE_REJECTED,
    SET_OPENED_PLAYER,
    REMOVE_PLAYER_FROM_COMPARE
} from "../actions/playerStats";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {showError} from "../../utils/helper";


const initialState = {
    loading: false,
    stats: {},
    error: '',
    comparisonList: {},
    openedPlayer: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYER_STATS_PENDING:
            return {
                ...state,
                loading: true
            };
        case FETCH_PLAYER_STATS_FULFILLED:
            return {
                ...state,
                loading: false,
                stats: action.payload
            };
        case FETCH_PLAYER_STATS_REJECTED:
            showError(action.payload)

            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case ADD_PLAYER_TO_COMPARE_PENDING:
            return {
                ...state,
                loading: true
            };
        case ADD_PLAYER_TO_COMPARE_FULFILLED:
            const id = action.payload.id
            let players = state.comparisonList

            if (!players[id]) {
                players[id] = action.payload
            }
            return {
                ...state,
                loading: false,
                comparisonList: players
            };
        case ADD_PLAYER_TO_COMPARE_REJECTED:
            showError(action.payload)

            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SET_OPENED_PLAYER:
            return {
                ...state,
                openedPlayer: action.payload
            };
        case REMOVE_PLAYER_FROM_COMPARE:
            let _players = state.comparisonList

            delete _players[action.payload];

            return {
                ...state,
                comparisonList: _players
            };
        default:
            return state;
    }
}
