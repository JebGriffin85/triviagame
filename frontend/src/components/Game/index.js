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
    const [question, setQuestion] = React.useState('loading');
    let questionsArray = useSelector((state) => state.questions);


    function setGameScreen (screen, id) {
        setCurrentScreen(screen);

        if (screen === 'startLevel' && id === 0) {
        
           dispatch(getEasyQuestions()).then(() => setLoaded(true))
        }
    }

    // function selectedCorrectAnswer () {
    //     let curIndex = allQuestions.indexOf(currentQuestion)
    //     allQuestions.splice(curIndex, 1)
    //     console.log('current index',curIndex)
        
    //     currentQuestion = getRandomQuestion(allQuestions)
    //     console.log(currentQuestion)
    // }

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
                    {console.log(questionsArray.questions[0])}
                    <div>{questionsArray.questions[0].question}</div>
                    {/* <div>{question.question}</div>
                    <button>{question.answerOne}</button>
                    <button>{question.answerTwo}</button>
                    <button>{question.answerThree}</button>
                    <button onClick={selectedCorrectAnswer}>{question.answerCorrect}</button> */}

                    <button onClick={(() => setGameScreen('New Game'))} >back </button>
                </div>
            }



        </div>
    );
};