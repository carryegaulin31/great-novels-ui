import React from 'react'

export default ({ term, setter }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <input type="text" name="search" calue={term} onChange={event => setter(event.target.value)} />
)
