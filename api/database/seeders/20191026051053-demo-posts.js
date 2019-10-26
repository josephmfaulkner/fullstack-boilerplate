'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
    {
      title: 'Family Photos',
      description: 'A collection of photos from last Summer',
      url: ''
    },
    {
      title: 'Letter to Editor',
      description: 'Reguarding the new highway project',
      url: ''
    },
    {
      title: 'Cookie Recipies',
      description: 'Grandma\'s secrets',
      url: ''
    },
    {
      title: 'PDF Document',
      description: 'Cover letter and resume',
      url: ''
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
