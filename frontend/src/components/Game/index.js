import * as React from 'react';
import './game.css';
import Selection from '../Selection';
import { useDispatch, useSelector } from 'react-redux';
import {getEasyQuestions} from '../../store/questions';

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
    const [difficulty, setDifficulty] = React.useState(null);
    let questionsArray =useSelector((state) => state.questions)
    if (questionsArray.questions.length) {

        console.log(questionsArray)
    }
    function setGameScreen (screen, id) {
        setCurrentScreen(screen)
        console.log(screen)
        dispatch(getEasyQuestions())

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
            {currentScreen === 'startLevel' && 
                <div>
                    <button onClick={(() => setGameScreen('New Game'))} >back </button>
                </div>
            }



        </div>
    );
};