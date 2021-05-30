import React, {useEffect, useState} from 'react';
import Teams from "./Teams/Teams";
import Players from "./Players/Players";

const MainPage = props => {
    const [team, setTeam] = useState();


    const handleTeam = (id) => {
        setTeam(id)
    }

    return (
        <div>

            <Teams onSelect={handleTeam}/>
            <Players team={team}/>
        </div>
    );
};

MainPage.propTypes = {};

export default MainPage;
