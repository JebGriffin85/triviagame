'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        question: 'test question 1',
        answerOne: 'answer1',
        answerTwo: 'answerTwo',
        answerThree: 'answerThree',
        answerCorrect: 'answerCorrect',
        difficulty: 'easy'
      
      },
      {
        question: 'test question 2',
        answerOne: 'answer1',
        answerTwo: 'answerTwo',
        answerThree: 'answerThree',
        answerCorrect: 'answerCorrect',
        difficulty: 'easy'
      
      },
      {
        question: 'test question 3',
        answerOne: 'answer1',
        answerTwo: 'answerTwo',
        answerThree: 'answerThree',
        answerCorrect: 'answerCorrect',
        difficulty: 'easy'
      
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Questions', null, {});
    
  }
};
