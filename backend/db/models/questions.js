'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    question: {
       type: DataTypes.STRING
    },
    answerOne: {
      type: DataTypes.STRING
    },
    answerTwo: {
      type: DataTypes.STRING
    },
    answerThree: {
      type: DataTypes.STRING
    },
    answerCorrect: {
      type: DataTypes.STRING
    },
    difficulty: {
      type: DataTypes.STRING
    }
  }, {});
  Questions.associate = function(models) {
    // associations can be defined here
  };
  return Questions;
};