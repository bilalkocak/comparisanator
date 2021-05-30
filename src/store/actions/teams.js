import axios from 'axios';
import config from "../../config";

export const FETCH_TEAMS_FULFILLED = "FETCH_TEAMS_FULFILLED";
export const FETCH_TEAMS_PENDING = "FETCH_TEAMS_PENDING";
export const FETCH_TEAMS_REJECTED = "FETCH_TEAMS_REJECTED";


export function fetchTeams(data) {
    return dispatch => {
        dispatch({
            type: "FETCH_TEAMS",
            payload: axios.get(`${config.apiUrl}/teams`)
                .then(res => res.data.teams)
        })
    }
}
