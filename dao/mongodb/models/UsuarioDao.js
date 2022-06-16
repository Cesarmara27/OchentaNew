const { db } = require('../Connection');
const DaoObject = require('../DaoObject');
module.exports = class UsuarioDao extends DaoObject {
  constructor(db = null) {
    console.log('UsuarioDao db: ', db);
    super(db, 'usuarios');
  }
  async setup() {
    if (process.env.MONGODB_SETUP) {
     // TODO: Agregar Indices
    }
  }

  getAll() {
    return this.find();
  }
  getById({codigo}) {
    return this.findById(codigo);
  }
  insertOne({ email, nombre, avatar, password,estado }) {
    return super.insertOne({email, nombre, avatar, password, estado, created: new Date().toISOString()});
  }
  updateOne({ codigo,email, nombre, avatar, password, estado }) {
    const updateCommand = {
      '$set': {
        email,
        nombre,
        avatar,
        password,
        estado,
        updated: new Date().toISOString()
      }
    };
    return super.updateOne(codigo, updateCommand);
  }
  deleteOne({ codigo }) {
    return super.removeOne(codigo);
  }
}
