import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import './TypingChallengeContainer.css';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypicalChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,

}) => {
    return (
        <div className="typing-challenge-container">
            {/* Details section */}
            <div className="details-container">
                {/* Words typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />

                {/* Characters Typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />

            </div>

            {/* The Real Challenge */}
            <div className="typewriter-container">
                <TypingChallenge
                    timerStarted={timerStarted}
                    timeRemaining={timeRemaining}
                    selectedParagraph={selectedParagraph}
                    testInfo={testInfo}
                    onInputChange={onInputChange}

                />
            </div>
        </div>
    );
}

export default TypicalChallengeContainer;