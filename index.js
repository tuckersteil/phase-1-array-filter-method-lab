const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, query){
    return array.filter(function (el){
        return query.toLowerCase() === el.toLowerCase()
    })
}

function fuzzyMatch(array, query){
    return array.filter(function (el){
        return query === (el[0] + el[1])
    })
}

function matchName(array, query){
    return array.filter(function (driver){
        return query === driver.name
    })
}