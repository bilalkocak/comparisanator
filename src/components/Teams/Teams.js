import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SectionTitle from "../SectionTitle/SectionTitle";
import {fetchTeams} from "../../store/actions/teams";
import Spinner from "../Loaders/Spinner/Spinner";


import './Teams.scss'

const Teams = ({onSelect}) => {
    const dispatch = useDispatch()

    const {loading, teams, error} = useSelector(state => state.teams)
    useEffect(() => {
        dispatch(fetchTeams())
    }, [])
    return (
        <section className={'teams-section-container'}>
            <SectionTitle title={'Teams'}/>

            {
                loading ? <Spinner/> : <div className="teams-content">
                    {
                        teams?.map((team) => {
                            return (
                                <div onClick={() => onSelect(team.id)} className={'team-card'}
                                     key={`team-card-${team.id}`}>
                                    <img src={team.icon} alt="" className="team-logo"/>
                                    {team.name}
                                </div>)
                        })
                    }
                </div>

            }

        </section>
    );
};

Teams.propTypes = {};

export default Teams;
