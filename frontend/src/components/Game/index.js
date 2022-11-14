import * as React from 'react';
import './game.css';
import Selection from '../Selection';
import { useDispatch, useSelector } from 'react-redux';
import { getEasyQuestions } from '../../store/questions';
import { getRandomQuestion } from './utility.js'
import  testQ from './testq.js';

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
    const [curQuestion, setCurQuestion] = React.useState(null);
    updateArray(array.filter(item => item !== itemToRemove));
    updateArray()
React.useEffect(() => {
    dispatch(getEasyQuestions())
},[dispatch])
 
let curArr;
const allQuestions = useSelector((state) => state.questions)

    function setGameScreen (screen, id) {
        if (screen === 'startLevel') {
            curArr = allQuestions.questions;
            setCurQuestion(getRandomQuestion(curArr));
            setLoaded(true);
            console.log(curArr)
        }
        setCurrentScreen(screen);

   
    }

    function selectedCorrectAnswer () {
        console.log(curArr)
        // let curIndex = curArr.indexOf(curQuestion)
        // curArr.splice(curIndex, 1)
        // console.log('current index',curIndex)
        
        // setCurQuestion(getRandomQuestion(curArr));
        // console.log(curQuestion)
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
                  
                 
                 
                    <div>{curQuestion.question}</div>
                    <button>{curQuestion.answerOne}</button>
                    <button>{curQuestion.answerTwo}</button>
                    <button>{curQuestion.answerThree}</button>
                    <button onClick={selectedCorrectAnswer}>{curQuestion.answerCorrect}</button>

                    <button onClick={(() => setGameScreen('New Game'))} >back </button>
                </div>
            }



        </div>
    );
};