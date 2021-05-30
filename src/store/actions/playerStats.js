import axios from 'axios';
import config from "../../config";

export const FETCH_PLAYER_STATS_FULFILLED = "FETCH_PLAYER_STATS_FULFILLED";
export const FETCH_PLAYER_STATS_PENDING = "FETCH_PLAYER_STATS_PENDING";
export const FETCH_PLAYER_STATS_REJECTED = "FETCH_PLAYER_STATS_REJECTED";
export const ADD_PLAYER_TO_COMPARE_FULFILLED = "ADD_PLAYER_TO_COMPARE_FULFILLED";
export const ADD_PLAYER_TO_COMPARE_PENDING = "ADD_PLAYER_TO_COMPARE_PENDING";
export const ADD_PLAYER_TO_COMPARE_REJECTED = "ADD_PLAYER_TO_COMPARE_REJECTED";
export const SET_OPENED_PLAYER = "SET_OPENED_PLAYER";
export const REMOVE_PLAYER_FROM_COMPARE = "REMOVE_PLAYER_FROM_COMPARE";


export function fetchPlayerStats(id) {
    return dispatch => {
        dispatch({
            type: "FETCH_PLAYER_STATS",
            payload: axios.get(`${config.apiUrl}/players/${id}/stats`)
                .then(res => res.data.stats)
        })
    }
}

export function setOpenedPlayer(id) {
    return dispatch => {
        dispatch({
            type: "SET_OPENED_PLAYER",
            payload: id
        })
    }
}

export function addPlayerToCompare(id) {
    return dispatch => {
        dispatch({
            type: "ADD_PLAYER_TO_COMPARE",
            payload: axios.get(`${config.apiUrl}/players/${id}/stats`)
                .then(res => {
                    return {
                        ...res.data.stats,
                        id
                    }
                })
        })
    }
}

export function removePlayerFromCompare(id) {
    return dispatch => {
        dispatch({
            type: "REMOVE_PLAYER_FROM_COMPARE",
            payload: id
        })
    }
}
