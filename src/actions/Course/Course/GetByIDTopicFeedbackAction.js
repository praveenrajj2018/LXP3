
export const FETCH_COURSEFEEDBACK_REQUEST = "FETCH_COURSEFEEDBACK_REQUEST";
export const FETCH_COURSEFEEDBACK_SUCCESS = "FETCH_COURSEFEEDBACK_SUCCESS";
export const FETCH_COURSEFEEDBACK_FAILURE = "FETCH_COURSEFEEDBACK_FAILURE";

export const fetchcoursefeedbackRequest = (courseFeedbackId) => ({
  type: FETCH_COURSEFEEDBACK_REQUEST,
  payload: courseFeedbackId,
});

export const fetchcoursefeedbackSuccess = (quizfeedback) => ({
  type: FETCH_COURSEFEEDBACK_SUCCESS,
  payload: quizfeedback,
});

export const fetchcoursefeedbackFailure = (error) => ({
  type: FETCH_COURSEFEEDBACK_FAILURE,
  payload: error,
});