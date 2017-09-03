import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { newDateRange: dateRange }
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}