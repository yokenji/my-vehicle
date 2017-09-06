
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name: 'kenji', login: 'yokenji', email: 'me@you.com', password: '123456', active: true, created_at: Date.now(), updated_at: Date.now()}
      ]);
    });
};