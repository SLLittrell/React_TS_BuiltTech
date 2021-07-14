import React from "react"

// create a reducer for budget state object
// reducers need to be immutable, therefor create a "copy" using the spread operator 
// or an immutability library.
// reducers must return state, use if/else or switch statements to apply actions 

const loanData = {
    amount: 0
}

export const LoanReducer = (state = loanData, action) => {
    switch(action.type) {
        case "ADD_BUDGET_AMOUNT": {
            state = {...state, amount: action.payload}
        }
    }
    return state
}