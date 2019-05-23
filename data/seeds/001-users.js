exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { name: "andy", username: "bob", password: "one", userType: "guide" },
        {
          name: "robert",
          username: "gimli",
          password: "two",
          userType: "guide"
        },
        {
          name: "roger",
          username: "gina",
          password: "three",
          userType: "customer"
        }
      ]);
    });
};
