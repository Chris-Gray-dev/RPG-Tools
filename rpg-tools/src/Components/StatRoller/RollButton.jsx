function RollButton(props)
{
    var setStats  = props.SetStats
    var rollStats  = props.RollStats
    var setRolling = props.SetRolling
    var enabled    = props.Enabled

    var roll = function()
    {
        setRolling(true)
        setStats(rollStats())
        setRolling(false)       
    }

    return(<button onClick={roll} disabled={!enabled}>Roll!</button>)
}

export default RollButton