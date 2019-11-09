export function setGivenType(givenType) {
    return {
        type: 'SET_GIVEN_TYPE',
        givenType
    };
}

export function fetchActivityDataSuccess(fetchedData) {
    return {
        type: 'FETCH_ACTIVITY_DATA',
        fetchedData
    };
}


export function setActivities(activities) {
    return {
        type: 'SET_CITIES',
        activities
    };
}

export function fetchActivityData(url) {
    return (dispatch) => {
        fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchActivityDataSuccess(json));
        })
        .catch((err)=>console.log(err));
    };
}
