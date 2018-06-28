// action creator
export function addContact () {
  return {
    type: ADD_CONTACT,
    contact,
    meta: {
      offline: {
        effect: { 
          url: `${API}/contacts`, method: 'POST',
          body: JSON.stringify({contact})
        },
        commit: { type: 'ADD_CONTACT_COMMIT', meta: { contact } },
      }
    }
  }
}

// reducer
function contacts (state=[], action) {
  switch (action.type) {
    case ADD_CONTACT:
      console.log('started to add contact')
      return [...state, action.contact]

    case ADD_CONTACT_COMMIT:
      console.log('successfully added contact')
      return [...state, action.payload]
  }
}