exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("trips")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trips").insert([
        {
          title: "hiking",
          description: "amazing",
          location: "new york",
          duration: 4,
          tourType: "private",
          user_id: 1
        },
        {
          title: "rowing",
          description: "tiring",
          location: "hawaii",
          duration: 5,
          tourType: "private",
          user_id: 2
        },
        {
          title: "business",
          description: "meeting",
          location: "san francisco",
          duration: 2,
          tourType: "professional",
          user_id: 3
        }
      ]);
    });
};
