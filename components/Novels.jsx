import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import { filterNovels, retrieveNovels } from '../utils'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [novelList, setNovelList] = useState([])
  const [filteredNovelList, setFilteredNovelList] = useState([])
  useEffect(() => {
    async function pullData() {
      const novels = await retrieveNovels()

      setNovelList(novels)
      setFilteredNovelList(novels)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterNovels(novelList, searchTerm)

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
