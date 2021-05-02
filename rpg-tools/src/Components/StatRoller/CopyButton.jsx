import {CopyText} from './CopyToClipBoard';

if (!String.format) {
    String.format = function(format) {
      var args = Array.prototype.slice.call(arguments, 1);
      return format.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number] 
          : match
        ;
      });
    };
  }


function FormatText(stats,mods)
{
    var text = "@everyone here are my stats!\n"
    for(var i = 0; i < stats.length; i++)
    {
        text = text + String.format("{0} : {1}",stats[i],mods[stats[i]])
        if(i !== stats.length-1)
        {
            text = text + "\n"
        }
    }
    return text
}

function CopyStatText(stats,mods)
{
    var text = FormatText(stats,mods)
    CopyText(text)
}

function CopyButton(props)
{
    var stats = props.Stats
    var mods  = props.Modifiers

    var click = function () { CopyStatText(stats,mods)}

    if(stats[0] === null)
    {
        return(null);
    }
    else
    {
        return(<button onClick={click}>Copy</button>)
    }
    
}

export default CopyButton