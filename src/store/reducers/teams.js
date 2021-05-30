import {
    FETCH_TEAMS_REJECTED,
    FETCH_TEAMS_FULFILLED,
    FETCH_TEAMS_PENDING
} from "../actions/teams";

import {showError} from "../../utils/helper";

const initialState = {
    loading: false,
    teams: [],
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEAMS_PENDING:
            return {
                ...state,
                loading: true
            };
        case FETCH_TEAMS_FULFILLED:
            return {
                ...state,
                loading: false,
                teams: action.payload
            };
        case FETCH_TEAMS_REJECTED:
            showError(action.payload)

            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
