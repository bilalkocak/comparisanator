import axios from 'axios';
import config from "../../config";
import {removePlayerFromCompare} from "./playerStats";

export const FETCH_PLAYERS_FULFILLED = "FETCH_PLAYERS_FULFILLED";
export const FETCH_PLAYERS_PENDING = "FETCH_PLAYERS_PENDING";
export const FETCH_PLAYERS_REJECTED = "FETCH_PLAYERS_REJECTED";
export const TOGGLE_TO_FAV = "TOGGLE_TO_FAV";


export function fetchPlayers(id) {
    return dispatch => {
        dispatch({
            type: "FETCH_PLAYERS",
            payload: axios.get(`${config.apiUrl}/teams/${id}/players`)
                .then(res => res.data.players)
        })
    }
}

export function togglePlayerToFav(id) {
    return dispatch => {
        dispatch({
            type: "TOGGLE_TO_FAV",
            payload: id
        })
    }
}
