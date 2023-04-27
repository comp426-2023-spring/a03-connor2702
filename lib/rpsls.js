export function rps(shot) {
    const options = [ 'rock','paper','scissors'];
    const opshot = options[Math.floor(Math.random() * options.length)];

    if (shot == null) {
        return {};
    }

    return {
        'player': shot, 
        'opponent': opshot, 
        'result': winloss
    };

}


export function rpsls(shot) {
    const options = [ 'rock','paper','scissors','lizard','spock'];
    const opshot = options[Math.floor(Math.random() * options.length)];

    if (shot == null) {
        return {};
    }

    return {
        'player': shot, 
        'opponent': opshot, 
        'result': winloss
    };
}