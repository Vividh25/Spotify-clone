export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //Set token as null after development
    // token:
    //     "BQAEDuBpNu7-yBdVJHrQ2Wu2wG8pSCIUWM5vlGTQ-e1AE-u7Te…7JtsjL1kKSrnlP6jHFYyPldr6yLLx9q19ss3A2IwjbPFxi31o",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
};

export default reducer;
