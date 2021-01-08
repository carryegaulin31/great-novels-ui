import React from 'react'

export default ({ id, title, authorId }) => (
  <div key={id} className="novel">{`${title} (${authorId})`}</div>
)
