exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("trips")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("trips").insert([
        { user_id: 1, title: "swim", description: "amazing", location: "hell" },
        {
          user_id: 2,
          title: "jump",
          description: "mind blowing",
          location: "heaven"
        },
        {
          user_id: 3,
          title: "hike",
          description: "tiring",
          location: "oakland"
        }
      ]);
    });
};
