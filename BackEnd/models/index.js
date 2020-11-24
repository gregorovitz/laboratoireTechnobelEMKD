import { Sequelize } from 'sequelize';
import Seq from 'sequelize';
import { Users } from './Users.js';
import { Demande } from './Demande.js';
import { Cities } from './Cities.js';
import { Offers } from './Offers.js';
import { Types } from './Types.js';


const sequelize = new Sequelize('SEOF1', 'test','gregorovitz201',{
    host: "127.0.0.1",
    dialect: 'mssql',
    dialectOptions: {
      options: {
        useUTC: false,
        dateFirst: 1,
      }
    }
  })

const models = { 
    User: Users.init(sequelize, Seq.DataTypes), 
    Demande: Demande.init(sequelize, Seq.DataTypes),
    Cities: Cities.init(sequelize, Seq.DataTypes), 
    Offers: Offers.init(sequelize, Seq.DataTypes), 
    Types: Types.init(sequelize, Seq.DataTypes),   
     
}   
 

Object.values(models)
    .filter(model => typeof model.associate == 'function')
    .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize,
    Sequelize
}

export default db;
  