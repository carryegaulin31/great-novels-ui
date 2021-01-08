import axios from 'axios'

export const filterNovels = (list, term) => list.filter(novel => (
  novel.title.toLowerCase().includes(term.toLowerCase())
))

export const retrieveNovels = async () => {
  const { data } = await axios.get('http://localhost:1337/api/novels')

  return data
}
