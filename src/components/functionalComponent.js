import { PropertyKeys } from "ag-grid-community"
import React from "react"
import { connect } from 'react-redux'
import { fetchBudget } from "../redux/actions"
import store from "../redux/store"
import {AgGridColumn, AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'


export const FunctionalComponent = (props) => {
    // console.log(props)
    
    return (
        <>
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="make"></AgGridColumn>
               <AgGridColumn field="model"></AgGridColumn>
               <AgGridColumn field="price"></AgGridColumn>
           </AgGridReact>
       </div>
        <h1>Budget</h1>
        <h2>{props.budgetAmount}</h2>
        </>
    )
}

const state = store.getState()
const mapStateToProps = (state) => {
    return {
        budgetAmount: state.budget.budgetAmount
    }
}

// connects redux store to rect component 
export default connect(mapStateToProps(state))(FunctionalComponent)
