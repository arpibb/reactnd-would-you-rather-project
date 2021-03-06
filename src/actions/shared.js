import { getInitialData } from '../utils/api'
import { 
  receiveQuestions,
  saveQuestionAction,
  saveQuestionAnswerAction } from '../actions/questions'
import { 
  receiveUsers, 
  saveQuestionToUser,
  saveQuestionAnswerToUserAction
 } from '../actions/users'
// import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'

// const AUTHED_USER = 'sarahedo'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({users,questions}) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      // dispatch(setAuthedUser(AUTHED_USER))
      dispatch(hideLoading())
    })
  }
}

export function handleSaveQuestion(optionOneText,optionTwoText){
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question)=> {
        dispatch(saveQuestionAction(question))
        dispatch(saveQuestionToUser(question))
      
      })
      .then(()=>dispatch(hideLoading()))
  }
}

export function handleSaveQuestionAnswer(authedUser,qid,answer){
  return (dispatch) => {

    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then((question)=>{
      dispatch(saveQuestionAnswerAction(question))
      dispatch(saveQuestionAnswerToUserAction(question))
  })
    .then(()=>dispatch(hideLoading()))
  }
}