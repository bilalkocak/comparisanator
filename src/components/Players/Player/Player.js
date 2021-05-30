import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './Player.scss'
import {getFullName, getAge, checkFlag} from "../../../utils/helper";
import {Collapse} from 'react-collapse';
import PlayerScore from "./PlayerDetail/PlayerScore";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchPlayerStats, removePlayerFromCompare,
    setOpenedPlayer,
} from "../../../store/actions/playerStats";
import Spinner from "../../Loaders/Spinner/Spinner";
import Add from '../../../assets/images/star.png'
import Delete from '../../../assets/images/minus.png'
import {togglePlayerToFav} from "../../../store/actions/players";




const Player = ({player}) => {
    const dispatch = useDispatch()
    const {loading, stats, error, openedPlayer} = useSelector(state => state.playerStats)
    const {favPlayers} = useSelector(state => state.players)

    const _onClickPlayer = (id) => {
        if (openedPlayer !== id) {
            dispatch(setOpenedPlayer(id))
            dispatch(fetchPlayerStats(id))
        } else {
            dispatch(setOpenedPlayer(''))
        }
    }

    const isExistFavPlayer = (id) => {
        return favPlayers[id]
    }

    const _togglePlayer = () => {
        dispatch(togglePlayerToFav(player))
        dispatch(removePlayerFromCompare(player.id))
    }
    return (
        <div className={'player-container'}>
            <div className={'player-basic-info'}>
                <div className={'player-left'}>
                    <div className={'player-photo-container'}>
                        <img src={player.image} onClick={() => _onClickPlayer(player.id)}
                             className={`player-photo ${player.role.name}`}/>
                        <img className={'fav-button'} onClick={() => _togglePlayer()}
                             src={isExistFavPlayer(player.id) ? Delete : Add} alt=""/>
                    </div>
                    <div className={'player-flag-area'} onClick={() => _onClickPlayer(player.id)}>
                        <img
                            src={`https://www.countryflags.io/${checkFlag(player.birthArea.alpha2code)}/shiny/64.png`}/>
                        <img
                            src={`https://www.countryflags.io/${checkFlag(player.passportArea.alpha2code)}/shiny/64.png`}/>
                    </div>
                    <div onClick={() => _onClickPlayer(player.id)}>
                        {getFullName(player)}
                    </div>
                </div>
                <div className={'player-right'} onClick={() => _onClickPlayer(player.id)}>
                    <div>{getAge(player.birthDate)}</div>
                    <div>{player.foot}</div>
                </div>
            </div>
            <Collapse isOpened={openedPlayer === player.id} initialStyle={{height: '0px', overflow: 'hidden'}}>
                {
                    loading ? <Spinner/> :
                        <div className={'player-detail-container'}>
                            <PlayerScore rating={stats.index}/>
                            <div className="stat-group">
                                <ul>
                                    <li>
                                        <span>Goals</span>
                                        <span>{stats.goals}</span>
                                    </li>
                                    <li>
                                        <span>Assits</span>
                                        <span>{stats.assists}</span>
                                    </li>
                                    <li>
                                        <span>Shots</span>
                                        <span>{stats.shots}</span>
                                    </li>
                                    <li>
                                        <span>Passes</span>
                                        <span>{stats.passes}</span>
                                    </li>
                                    <li>
                                        <span>Crosses</span>
                                        <span>{stats.crosses}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="stat-group">
                                <ul>
                                    <li>
                                        <span>Key Passes</span>
                                        <span>{stats.keyPasses}</span>
                                    </li>
                                    <li>
                                        <span>Smart Passes</span>
                                        <span>{stats.smartPasses}</span>
                                    </li>
                                    <li>
                                        <span>Touch In Box</span>
                                        <span>{stats.touchInBox}</span>
                                    </li>
                                    <li>
                                        <span className={'yellow-color'}>Yellow Cards</span>
                                        <span>{stats.yellowCards}</span>
                                    </li>
                                    <li>
                                        <span className={'red-color'}>Red Cards</span>
                                        <span>{stats.redCards}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                }
            </Collapse>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired
};

export default Player;
