localDB.sync(remoteDB, {
  live: true,
  retry: true
})

const discard = (error, _action, _retries) => {
  const { response } = error
  return response && response.status >= 400 && response.status <= 500
}

// apply discard to config
const store = createStore(
  reducer,
  compose(
    offline({
      ...offlineConfig,
      discard
    })
  )
)