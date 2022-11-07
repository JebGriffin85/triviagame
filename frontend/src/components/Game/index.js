import * as React from 'react';
import './game.css';
import Selection from '../Selection';

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

    const [currentScreen, setCurrentScreen] = React.useState('startGame');


    function setGameScreen (screen, id) {
        setCurrentScreen(screen)
        console.log(document.getElementById(id))

    }

    function setSelectionStyles () {

    }

    return (
        <div id='mainContainer'>
            game container
            {currentScreen === 'startGame' &&
            <div>
            {options.map((option, i) => (
                <div id={i} key={i} onClick={() => setGameScreen(option, i)}>
                 <Selection key={i} text={option}>asdfsadf</Selection>
                
                 </div>
             ))}
             </div>
            }
            <button onClick={() => setGameScreen('startGame')}>sdf</button>
            <button onClick={() => setGameScreen(null)}>sdf</button>
        </div>
    );
};