import * as React from 'react';
import './game.css';
import Selection from '../Selection';
import { useDispatch, useSelector } from 'react-redux';
import { getEasyQuestions } from '../../store/questions';
import { getRandomQuestion } from './utility.js'

export default function Game () {

    const options = [
        'New Game',
        'High Scores',
        'About'
    ];

    const difficulties = [
        'Can I play, Daddy?',
        'Don\'t hurt me',
        'Bring \'em on!',
        'I am Death incarnate!'
    ];

    const dispatch = useDispatch();
    
    const [currentScreen, setCurrentScreen] = React.useState('mainMenu');
    const [loaded, setLoaded] = React.useState(false);
    let questionsArray = useSelector((state) => state.questions);
    let currentQuestion;
    let currentIndex;
    let allQuestions;

    if (loaded === true) {
        allQuestions = questionsArray;
        console.log(allQuestions.questions)
        currentQuestion = getRandomQuestion(questionsArray.questions)
    }

    function setGameScreen (screen, id) {
        setCurrentScreen(screen);

        if (screen === 'startLevel' && id === 0) {
            let check = dispatch(getEasyQuestions());
            check.then((val) => {
                setLoaded(true)

            })
        }
    }

    function selectedCorrectAnswer () {
        let curIndex = allQuestions.questions.indexOf(currentQuestion)
        allQuestions.questions.splice(curIndex, 1)
        console.log(curIndex)
        console.log(allQuestions)
    }

    return (
        <div id='mainContainer'>
            game container

            {/******************************* Main Menu **************************/}
            {currentScreen === 'mainMenu' &&
            <div>
            {options.map((option, i) => (
                <div id={i} key={i} onClick={() => setGameScreen(option, i)}>
                 <Selection text={option}></Selection>
                
                 </div>
             ))}
             </div>
            }

            {/******************************* New Game **************************/}
            {currentScreen === 'New Game' && 
            <div>
                 {difficulties.map((option, i) => (
                <div id={i} key={i} onClick={() => setGameScreen('startLevel', i)}>
                 <Selection text={option}></Selection>
                
                 </div>
             ))}
             <button onClick={() => setGameScreen('mainMenu')}>back</button>
            </div>
            }

            {/******************************* Start a level **************************/}
            {currentScreen === 'startLevel' && loaded &&
                <div>
                    <div>{currentQuestion.question}</div>
                    <button>{currentQuestion.answerOne}</button>
                    <button>{currentQuestion.answerTwo}</button>
                    <button>{currentQuestion.answerThree}</button>
                    <button onClick={selectedCorrectAnswer}>{currentQuestion.answerCorrect}</button>
                    {console.log(currentQuestion)}
                    <button onClick={(() => setGameScreen('New Game'))} >back </button>
                </div>
            }



        </div>
    );
};