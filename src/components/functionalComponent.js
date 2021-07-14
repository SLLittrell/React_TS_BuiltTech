import { PropertyKeys } from "ag-grid-community"
import React from "react"
import { connect } from 'react-redux'
import { fetchBudget } from "../redux/actions"
import store from "../redux/store"
import {AgGridColumn, AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { stat } from "fs"


export const FunctionalComponent = (props) => {
    console.log(store.getState())
    const rowData = [
        {Budget:`${props.budgetAmount}` , Loan: `${props.loanAmount}`, Collateral: `${props.collateral}`},
        
    ]
    
    return (
        <>
        <h1>Built Exercise Grid</h1>
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="Budget"></AgGridColumn>
               <AgGridColumn field="Loan"></AgGridColumn>
               <AgGridColumn field="Collateral"></AgGridColumn>
           </AgGridReact>
       </div>
        <h2>{props.budgetAmount}</h2>
        </>
    )
}

const state = store.getState()
const mapStateToProps = (state) => {
    return {
        budgetAmount: state.budget.budgetAmount,
        loanAmount: state.loan.loanAmount,
        collateral: state.collateral.description
    }
}

// connects redux store to rect component 
export default connect(mapStateToProps(state))(FunctionalComponent)
