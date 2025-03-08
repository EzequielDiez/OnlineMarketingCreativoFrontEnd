import { useState, useEffect } from 'react';

const TypewriterText = ({ phrases, className, words, start = false }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!start || currentIndex >= phrases[0].length) return;

        const timeout = setTimeout(() => {
            setDisplayText(phrases[0].slice(0, currentIndex + 1));
            setCurrentIndex(prev => prev + 1);
        }, 50); // Velocidad de typing

        return () => clearTimeout(timeout);
    }, [currentIndex, phrases, start]);

    const renderText = () => {
        let currentPosition = 0;
        return words.map((word, index) => {
            const wordLength = word.text.length;
            const isVisible = currentPosition + wordLength <= displayText.length;
            const partialWord = displayText.slice(currentPosition, currentPosition + wordLength);
            currentPosition += wordLength;

            return (
                <span
                    key={index}
                    className={`${word.font}`}
                >
                    {isVisible ? word.text : partialWord}
                </span>
            );
        });
    };

    return (
        <div className={className}>
            {renderText()}
            <span className="animate-blink">|</span>
        </div>
    );
};

export default TypewriterText; 