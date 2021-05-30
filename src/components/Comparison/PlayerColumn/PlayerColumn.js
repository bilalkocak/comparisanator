import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './PlayerColumn.scss'
import Delete from "../../../assets/images/minus-red.png";
import {removePlayerFromCompare} from "../../../store/actions/playerStats";
import {useDispatch} from "react-redux";
import classNames from "classnames";


const PlayerColumn = ({stats, player, bestStats}) => {
    const dispatch = useDispatch()

    const _deletePlayer = () => {
        dispatch(removePlayerFromCompare(player.id))
    }
    return (
        <div className={'player-column-container'}>
            <div className="player-header">
                <div className={'player-photo-container'}>
                    <img src={player.image}
                         className={'player-photo'}/>
                    <img className={'fav-button'} onClick={() => _deletePlayer()}
                         src={Delete} alt=""/>
                </div>
                <span className={'player-name'}>{player.shortName}</span>
            </div>
            <div className="player-column-stats">
                    <span
                        className={classNames({'best-rating': bestStats.index === String(player.id)})}>{stats.index}</span>
                <span
                    className={classNames({'best-rating': bestStats.goals === String(player.id)})}>{stats.goals}</span>
                <span
                    className={classNames({'best-rating': bestStats.assists === String(player.id)})}>{stats.assists}</span>
                <span
                    className={classNames({'best-rating': bestStats.shots === String(player.id)})}>{stats.shots}</span>
                <span
                    className={classNames({'best-rating': bestStats.passes === String(player.id)})}>{stats.passes}</span>
                <span
                    className={classNames({'best-rating': bestStats.crosses === String(player.id)})}>{stats.crosses}</span>
                <span
                    className={classNames({'best-rating': bestStats.keyPasses === String(player.id)})}>{stats.keyPasses}</span>
                <span
                    className={classNames({'best-rating': bestStats.smartPasses === String(player.id)})}>{stats.smartPasses}</span>
                <span
                    className={classNames({'best-rating': bestStats.touchInBox === String(player.id)})}>{stats.touchInBox}</span>
                <span
                    className={classNames({'best-rating': bestStats.yellowCards === String(player.id)})}>{stats.yellowCards}</span>
                <span
                    className={classNames({'best-rating': bestStats.redCards === String(player.id)})}>{stats.redCards}</span>
            </div>
        </div>
    );
};

PlayerColumn.propTypes = {
    stats: PropTypes.object.isRequired,
    player: PropTypes.object.isRequired
};

export default PlayerColumn;
