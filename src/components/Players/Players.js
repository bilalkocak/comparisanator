import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Player from "./Player/Player";
import SectionTitle from "../SectionTitle/SectionTitle";
import './Players.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchPlayers} from "../../store/actions/players";
import PlayerSkeleton from "../Loaders/PlayerSkeleton/PlayerSkeleton";

const Players = ({team}) => {
        const dispatch = useDispatch()

        const {loading, players} = useSelector(state => state.players)
        useEffect(() => {
            dispatch(fetchPlayers(team))
        }, [team])
        return (
            <>
                {
                    !team ? <h3 className={'click-team'}>Please click a team.</h3> :
                        <section className={'players-section-container'}>
                            <SectionTitle title={'Players'}/>
                            {
                                loading && <PlayerSkeleton/>
                            }
                            {
                                players.map(player => (
                                    <Player key={player.id} player={player}/>
                                ))
                            }
                        </section>
                }
            </>
        );
    }
;

Players.propTypes =
    {
        team: PropTypes.number
    }
;

export default Players;
