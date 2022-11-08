const GET_EASY_QUESTIONS = 'questions/getEasyQuestions';

const getAllEasy = (questions) => ({

    type: GET_EASY_QUESTIONS,
    payload: questions
});

export const getEasyQuestions = () => async (dispatch, getState) => {
    const res = await fetch('/api/questions/easy');
    const data = await res.json();
    dispatch(getAllEasy(data))
    const value = getState().questions
    if(value){
        return true
    }
    
}

const initialState = { questions: [] }
const questionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_EASY_QUESTIONS:
            newState = Object.assign({}, state);
            newState.questions = action.payload;
            return newState;

        default:
            return state;
    }
}

export default questionReducer;