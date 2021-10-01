function findMatching(source, sought) {
    return source.filter( possibleMatch =>
        possibleMatch.toLowerCase() === sought.toLowerCase()
    )
}

function fuzzyMatch(source, sought) {
    return source.filter( fuzzyMatch =>
        fuzzyMatch.toLowerCase().indexOf(sought.toLowerCase()) === 0
    )
}

function matchName(source, sought) {
    return source.filter( record => record.name === sought)
}