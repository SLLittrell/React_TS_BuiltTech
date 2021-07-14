import { combineReducers } from 'redux'
import { BudgetReducer } from './budgetReducer'
import { CollateralReducer } from './collateralReducer'
import { LoanReducer } from './loanReducer'

export default combineReducers({
    budget: BudgetReducer,
    collateral: CollateralReducer,
    loan: LoanReducer
})