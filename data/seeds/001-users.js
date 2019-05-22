exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "john",
          username: "johnny",
          password: "amaze",
          userType: "guide"
        },
        {
          name: "mary",
          username: "mark",
          password: "amazed",
          userType: "customer"
        },
        {
          name: "robert",
          username: "roberta",
          password: "amazing",
          userType: "guide"
        }
      ]);
    });
};
