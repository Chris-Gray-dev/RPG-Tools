const POINT_MIN = 75
const MAX_NEG = 9
const MIN_POS = 14

function Roll_d6()
{
    return Math.floor(Math.random() * 6) + 1
}

function Roll_Stat()
{
    var stat = [0,0,0,0]

    for(var i = 0; i < 4; i++)
    {
        stat[i] = Roll_d6()
    }

    stat.sort(function(a, b){return b - a})
    stat[stat.length-1] = 0

    return stat.reduce((a, b) => a + b, 0)
}

function Roll_New_Array()
{
    var stats = [0,0,0,0,0,0]

    for(var i = 0; i < 6; i++)
    {
        stats[i] = Roll_Stat()
    }
    
    return stats
}

function Is_Array_Valid(array)
{
    array.sort(function(a, b){return b - a})
    
    if(array.reduce((a, b) => a + b, 0) < POINT_MIN) // 75
    {
        return false
    }

    if(array[array.length-1] > MAX_NEG) // 9
    {
        return false
    }

    if(array[1] < MIN_POS) // 14
    {
        return false 
    }

    return true
}

export function Roll_Stats()
{
    var stats = [0,0,0,0,0,0]
    var valid = false

    while(!valid)
    {
        stats = Roll_New_Array()
        valid = Is_Array_Valid(stats)
    }
    
    return(stats)
}