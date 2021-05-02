function RollButton(props)
{
    var setStats = props.SetStats
    var rollStats = props.RollStats

    var roll = function(){setStats(rollStats())}

    return(<button onClick={roll} >Roll!</button>)
}

export default RollButton