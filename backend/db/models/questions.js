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
  }, {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'difficulty']
      }
    }
  });

  
  Questions.associate = function(models) {
    // associations can be defined here
  };

  Questions.getEasyQuestions = async function () {
    const data = await Questions.findAll({
      where: {
          difficulty: 'easy'
      }
  });
  return data;
  }

  return Questions;
};