function solve(text){
    let regexWords = /\w+/g;
    let regexMatches = text.match(regexWords);
    let result = regexMatches.join(', ')
    result = result.toUpperCase()
    console.log(result);
}

solve('Functions in JS can be nested, i.e. hold other functions')
