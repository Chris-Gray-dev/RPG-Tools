import React, { useState } from 'react';
import {Roll_Stats} from './RollerLogic';

function StatRoller(props)
{
    // Standards dnd mods, if you go MODIFIERS[stat] it will return the appropirate value
    var MODIFIERS = [null,-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5]

    const[stats, setStats] = useState([0,0,0,0,0,0])

    return(
        <div>
            <h1>Combly Stat Roller</h1>
            <h2>Stat display</h2>
            <button>Roll</button> <button>Copy</button>
            <p>Parameters: ....</p>
        </div>
    )
}

export default StatRoller