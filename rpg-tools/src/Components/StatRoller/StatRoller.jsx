import React, { useState } from 'react';
import {Roll_Stats} from './RollerLogic';
import RollButton from './RollButton';
import CopyButton from './CopyButton';

function StatRoller(props)
{
    // Standards dnd mods, if you go MODIFIERS[stat] it will return the appropirate value
    var MODIFIERS = [null,'-5','-4','-4','-3','-3','-2','-2','-1','-1','0','0','+1','+1','+2','+2','+3','+3','+4','+4','+5']

    const[stats, setStats] = useState([null,null,null,null,null,null])

    return(
        <div>
            <h1>Combly Stat Roller</h1>
            <ul>
        {stats.map(item => {
          return <p>{item},[{MODIFIERS[item]}]</p>;
        })}
      </ul>
            <RollButton RollStats={Roll_Stats} SetStats={setStats}/> <CopyButton Stats={stats} Modifiers={MODIFIERS}/>
            <p>Parameters: ....</p>
        </div>
    )
}

export default StatRoller