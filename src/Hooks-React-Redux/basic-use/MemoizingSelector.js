import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const selectNumOfDoneTodos = createSelector(
    state => state.todos, todos => todos.filter(todo => todo.completed).length
)

export const DoneTodosCounter = () => {
    const NumOfDoneTodos = useSelector(selectNumOfDoneTodos)
    return <div className="basic-use">{NumOfDoneTodos}</div>
}

const MemoizingSelector = () => {
    return (
        <>
            <span className="basic-use">Number of done todos:</span>
            <DoneTodosCounter />
        </>
    )
}
export default MemoizingSelector;