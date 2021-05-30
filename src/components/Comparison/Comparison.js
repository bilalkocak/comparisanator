import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SectionTitle from "../SectionTitle/SectionTitle";
import PlayerColumn from "./PlayerColumn/PlayerColumn";
import {addPlayerToCompare} from "../../store/actions/playerStats";
import './Comparison.scss'
import {Popover} from 'react-tiny-popover'
import {getFullName} from "../../utils/helper";
import _ from 'lodash'


const Comparison = props => {
    const dispatch = useDispatch()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [filteredList, setFilteredList] = useState([])
    const [bestStats, setBestStats] = useState({
        'index': '',
        'goals': '',
        'assists': '',
        'shots': '',
        'passes': '',
        'crosses': '',
        'keyPasses': '',
        'smartPasses': '',
        'touchInBox': '',
        'yellowCards': '',
        'redCards': ''
    })
    const {favPlayers} = useSelector(state => state.players)
    const {comparisonList} = useSelector(state => state.playerStats)

    useEffect(() => {
        let _comparasitonArray = Object.keys(comparisonList).map(item => comparisonList[item])
        let biggestValue = {...bestStats}

        if (_comparasitonArray.length > 0) {
            Object.keys(biggestValue).forEach(item => {
                let stats = {}
                stats = _.maxBy(_comparasitonArray, item)
                biggestValue[item] = stats.id
            })

        }
        setBestStats({...biggestValue})
    }, [Object.keys(comparisonList).length])


    const _onClickCompareButton = (id) => {
        dispatch(addPlayerToCompare(id))

    }


    return (
        <div>
            <SectionTitle title={'Comparison'}/>

            <div className="comparison-container">
                <div className="comparison-titles">
                    <span>Index</span>
                    <span>Goals</span>
                    <span>Assists</span>
                    <span>Shots</span>
                    <span>Passes</span>
                    <span>Crosses</span>
                    <span>Key Passes</span>
                    <span>Smart Passes</span>
                    <span>Touch In Box</span>
                    <span className={'yellow-color'}>Yellow Cards</span>
                    <span className={'red-color'}>Red Cards</span>
                </div>
                <div className="comparison-players">
                    {
                        Object.keys(comparisonList).map(id => {
                            const _stats = comparisonList[id]
                            const _player = favPlayers[id]
                            return <PlayerColumn key={`column-list-key-${_player.id}`} bestStats={bestStats}
                                                 player={_player}
                                                 stats={_stats}/>

                        })
                    }
                    <Popover
                        isOpen={isPopoverOpen}
                        onClickOutside={() => setIsPopoverOpen(false)}
                        positions={['bottom', 'right']} // preferred positions by priority
                        content={<div className={'fav-player-popover'}>
                            {
                                !Object.keys(favPlayers).length && <div>
                                    Your favorite player list is empty.
                                </div>
                            }
                            {
                                Object.keys(favPlayers).map(id => {
                                    const _player = favPlayers[id]
                                    return (
                                        <div onClick={() => _onClickCompareButton(id)}
                                             key={`option-list-key-${_player.id}`}
                                             className={'fav-player-popover-player-container'}>
                                            <img src={_player.image}/>
                                            <div className={'player-info'}>
                                                <span>{getFullName(_player)}</span>
                                                <span>{_player.role.name}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>}
                    >
                        <div className={'add-player-button'} onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                            +
                        </div>
                    </Popover>
                </div>

            </div>

        </div>
    );
};


export default Comparison;
