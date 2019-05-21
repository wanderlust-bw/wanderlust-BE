exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl
        .string("password", 128)
        .notNullable()
        .unique();
      tbl.string("userType", 128).notNullable();
    })
    .createTable("trips", tbl => {
      tbl.increments();
      tbl.string("title", 128).notNullable();
      tbl.string("description").notNullable();
      tbl.string("location", 128).notNullable();
      tbl.timestamps(true, true);
      tbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("trips").dropTableIfExists("users");
};
