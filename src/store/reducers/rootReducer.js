import {combineReducers} from "redux";

import teams from './teams';
import players from './players';
import playerStats from './playerStats';

export default combineReducers({
    teams,
    players,
    playerStats
})
