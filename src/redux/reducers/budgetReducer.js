import React from "react"

// create a reducer for budget state object
// reducers need to be immutable, therefor create a "copy" using the spread operator 
// or an immutability library.
// reducers must return state, use if/else or switch statements to apply actions

const budgetData = {
    id: 1,
    budgetAmount:150000
}
export const BudgetReducer = (state = budgetData, action) => {
    switch(action.type) {
        case "FETCH_BUDGET_AMOUNT": {
            return state
        }
        case "ADD_BUDGET_AMOUNT": {
            state = {...state, amount: action.payload}
        }
    }
    return state
}