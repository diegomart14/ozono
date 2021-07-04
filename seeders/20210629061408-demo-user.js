'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [
        {
          name: 'John',
          lastname:'lopez',
          numberPhone:243,
          email:'johnloprz@gmail.com',
          city:'Puebla',
          createdAt:"2021-05-23",
          updatedAt:"2021-06-23",
        },
        {
          name: 'Benito',
          lastname:'Ribers',
          numberPhone:248,
          email:'benitoribers@gmail.com',
          city:'Puebla',
          createdAt:"2021-05-23",
          updatedAt:"2021-06-23",
        },
        {
          name: 'Ernesto',
          lastname:'Gongora',
          numberPhone:243,
          email:'ernestogo@gmail.com',
          city:'Puebla',
          createdAt:"2021-05-23",
          updatedAt:"2021-06-23",
        },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
