// action: toggle editView
export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export function toggleEdit (contact) {
  return {
    type: TOGGLE_EDIT,
    contact
  }
}
export function readContacts () {
  return {
    type: FETCH_CONTACTS,
    meta: {
      offline: {
        effect: { url: `${API}/contacts` },
        commit: { type: 'FETCH_CONTACTS_COMMIT' },
        rollback: { type: 'FETCH_CONTACTS_ROLLBACK' }
      }
    }
  }
}

// reducer returns next app-state
function editView (state, action) {
  switch (action.type) {
    case TOGGLE_EDIT:
      return {
        ...state,
        isOpen: !state.isOpen,
        contact: action.contact
      }
    default:
      return state
  }
}

function contacts (state=[], action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return state

    case FETCH_CONTACTS_COMMIT:
      if (state === action.payload) return state
      return action.payload

    case FETCH_CONTACTS_ROLLBACK:
      return state
  }
}

import { createStore, compose } from 'redux'
import { offline } from '@redux-offline/redux-offline'
import offlineConfig from '@redux-offline/redux-offline/lib/defaults'

const store = createStore(
  reducer,
  compose(
    offline(offlineConfig)
  )
)