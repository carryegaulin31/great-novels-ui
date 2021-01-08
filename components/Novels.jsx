import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Novel from './Novel'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [novelList, setNovelList] = useState([])
  const [filteredNovelList, setFilteredNovelList] = useState([])
  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api/novels')

      setNovelList(data)
      setFilteredNovelList(data)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = novelList.filter(novel => (novel.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    setFilteredNovelList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Novels</div>
      <div className="subtitle">A Searchable list of all your favorite novels</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        // eslint-disable-next-line max-len
        filteredNovelList.map(novel => (<Novel key={novel.id} id={novel.id} title={novel.title} authorId={novel.authorId} />))
      }
    </div>
  )
}
