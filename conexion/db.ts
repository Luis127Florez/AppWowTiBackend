import {Sequelize} from 'sequelize';

const db = new Sequelize('appwowti', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

export default db; 