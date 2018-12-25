import { createStore, combineReducers } from 'redux'
console.clear()
// Actions:
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}

const deletePolicy = name => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
}

// Reducers:
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action
    /* this is an es6 syntax, it means get all items in oldListOfClaims add it to a new array, 
        then add the item in action.payload to this list as well[...oldListOfClaims, action.payload] */
    return [...oldListOfClaims, action.payload]
  }
  // we dont care about this action
  return oldListOfClaims
}

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREAT_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount
  }
  return bagOfMoney
}

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name]
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name)
  }
  return listOfPolicies
}

// Store:

// combineReducers will, wire up all the different reducers into 1
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
})
const store = createStore(ourDepartments)

// state can only be changed by invoking the dispatch with an action
store.dispatch(createPolicy('Joaquim', 20))
store.dispatch(createPolicy('Jim', 30))
store.dispatch(createPolicy('Bob', 40))
store.dispatch(createClaim('Joaquim', 120))
store.dispatch(createClaim('Jim', 50))
store.dispatch(deletePolicy('Bob'))

console.log('store.state=', store.getState())
