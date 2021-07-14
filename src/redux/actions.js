import * as actions from './actionTypes'

export const fetchBudget = () => ({
    type: actions.FETCH_BUDGET_AMOUNT,
    payload: {
        id: 1,
        amount: 0
    }
})
let budgetId = 0
export const addedBudgetAmount = amount => ({
    type: actions.ADD_BUDGET_AMOUNT,
    payload: {
        id: ++budgetId,
        amount
    }
})
export const updatedLoanAmount = (id, updatedAmount) => ({
    type: actions.UPDATED_LOAN_AMOUNT,
    payload: {
        id,
        amount: updatedAmount
    }
})
let collateralId = 0
export const collateralAdded = description => ({
    type: actions.ADD_COLLATERAL,
    payload: {
        id: ++collateralId,
        description
    }
})