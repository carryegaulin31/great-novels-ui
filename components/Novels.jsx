import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Novel from './Novel'

export default () => {
  const [title, setTitle] = useState('')
  const [novelList, setNovelList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api/novels')

      setNovelList(data)
    }

    pullData()
  }, [])

  return (
    <div className="page">
      <div className="title">Novels</div>
      <div className="subtitle">A Searchable list of all your favorite novels</div>
      <Search term={title} setter={setTitle} />
      {
        novelList.map(novel => (<Novel key={novel.id} id={novel.id} title={novel.title} authorId={novel.authorId} />))
      }
    </div>
  )
}
