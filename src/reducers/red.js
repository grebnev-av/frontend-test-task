export function activityData(state = {}, action) {
    switch (action.type) {
        case 'FETCH_ACTIVITY_DATA':
            return action.fetchedData;
        default:
            return state;
    }
}

export function givenType(state = 0, action) {
    switch (action.type) {
        case 'SET_GIVEN_TYPE':
            return action.givenType;
        default:
            return state;
    }
}

export function activities(state = typesArr, action) {
    switch (action.type) {
        case 'SET_ACTIVITIES':
            return action.activities ;

        default:
            return state;
    }
}

var typesArr = [
    { name: "Education", value: "education" },
    { name: "Recreational", value: "recreational" },
    { name: "Social", value: "social" },
    { name: "Diy", value: "diy" },
    { name: "Charity", value: "charity" },
    { name: "Cooking", value: "cooking" },
    { name: "Relaxation", value: "relaxation" },
    { name: "Music", value: "music" },
    { name: "Busywork", value: "busywork" }
]