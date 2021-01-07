import React, { useState } from 'react'

export default () => {
  const [title, setTitle] = useState('')
  const [novelList, setNovelList] = useState([])
  return (
    <div className="page">
      <div className="title">Novels</div>
      <div className="subtitle">A Searchable list of all your favorite novels</div>
      <input type="text" name="search" onChange={event => setTitle(event.target.value)} />
      <div className="title">{title}</div>
    </div>
  )
}