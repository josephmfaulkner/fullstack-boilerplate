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
    },
    {
      title: 'Stamp Collection',
      description: '357 stamps as of January 2019',
      url: ''
    },
    {
      title: 'Wedding Playlist',
      description: 'Classic Acoustic Songs (runtime: 190min)',
      url: ''
    },
    {
      title: 'Roadmaps',
      description: 'California and Nevada',
      url: ''
    },
    {
      title: 'Bank Statement',
      description: 'From March 1st 2017',
      url: ''
    },
    {
      title: 'Stock footage',
      description: 'Scenic footage of New York Central Park',
      url: ''
    },
    {
      title: 'Sewing Patterns',
      description: 'Window Curtains',
      url: ''
    },
    {
      title: 'College Transcript',
      description: 'As of July 2016',
      url: ''
    },
    {
      title: 'Shopping List',
      description: 'Groceries and Costco run',
      url: ''
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
