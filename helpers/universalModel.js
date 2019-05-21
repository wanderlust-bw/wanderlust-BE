const Db = require("./dbConfig");
module.exports = tableName => {
  return {
    get: () => {
      return Db(tableName);
    },
    getById: id => {
      return Db(tableName)
        .where({ id })
        .first();
    },
    add: newItem => {
      return Db(tableName)
        .insert(newItem, "id")
        .then(ids =>
          Db(tableName)
            .where({ id: ids[0] })
            .first()
        );
    },
    getBy: user => {
      return Db(tableName).where(user);
    },
    edit: (id, changes) => {
      return Db(tableName)
        .where("id", Number(id))
        .update(changes);
    },
    remove: id => {
      return Db(tableName)
        .where({ id })
        .then(newItem =>
          Db(tableName)
            .where({ id })
            .del()
        );
    }
  };
};
