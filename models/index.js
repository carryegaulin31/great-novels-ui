import Sequelize from 'sequelize'
import allConfigs from '../configs/sequelize'
import AuthorsModel from './authors'
import GenresModel from './genres'
import NovelsModel from './novels'
import NovelsGenresModel from './novelsGenres'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Authors)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Genres, Novels)

Novels.belongsTo(Authors)
Authors.hasMany(Novels)
Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })

export default {
  Authors,
  Genres,
  Novels,
  NovelsGenres,
  Sequelize,
}
