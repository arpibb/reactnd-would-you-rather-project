import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { saveQuestionToUser } from './users'
import { showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions){
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveQuestionAction(question){
  return {
    type: SAVE_QUESTION,
    question,
  }
}

// export function handleSaveQuestion(optionOneText,optionTwoText){
//   return (dispatch, getState) => {
//     const { authedUser } = getState()

//     dispatch(showLoading())
//     return saveQuestion({
//       optionOneText,
//       optionTwoText,
//       author: authedUser,
//     })
//       .then((question)=> {
//         dispatch(saveQuestionAction(question))
//         dispatch(saveQuestionToUser(question))
      
//       })
//       .then(()=>dispatch(hideLoading()))
//   }
// }



