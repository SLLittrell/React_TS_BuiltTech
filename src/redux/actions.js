import * as actions from './actionTypes'

export const addedBudgetAmount = amount => ({
    type: actions.ADD_BUDGET_AMOUNT,
    payload: {
        amount
    }
})
export const updatedLoanAmount = updatedAmount => ({
    type: actions.UPDATED_LOAN_AMOUNT,
    payload: {
        amount: updatedAmount
    }
})
export const collateralAdded = description => ({
    type: actions.ADD_COLLATERAL,
    payload: {
        description
    }
})