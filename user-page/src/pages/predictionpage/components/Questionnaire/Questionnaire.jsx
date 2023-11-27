import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios: npm install axios
import './Questionnaire.css';

function Details() {
    const [scores, setScores] = useState({
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
    });

    const [disabledQuestions, setDisabledQuestions] = useState([]);

    const handleScoreSelection = (question, score) => {
        if (!disabledQuestions.includes(question)) {
            setScores((prevScores) => ({
                ...prevScores,
                [question]: score,
            }));
            console.log(`${question}: Score selected - ${score}`);
            setDisabledQuestions((prevDisabled) => [...prevDisabled, question]);
        }
    };

    const handleReset = () => {
        setScores({
            question1: null,
            question2: null,
            question3: null,
            question4: null,
            question5: null,
        });
        setDisabledQuestions([]);
    };

    const handleSubmit = async () => {
        try {
            // Log the scores before sending to the server
            console.log('Scores:', scores);
            
            // Assuming you have a server endpoint for handling the submission
            const response = await axios.post('http://your-server-endpoint', scores);

            // Handle the response as needed
            console.log('Submission successful:', response.data);
        } catch (error) {
            console.error('Error submitting scores:', error);
        }
    };


    return (
        <div className='AllQuestionnaire'>
            <div className='container'>
                <div className='MainFeedback'>
                    <div className='Feedback'>
                        <h1 className='TitleFeed'>We need your feedback</h1>
                        <p className='DescriptionFeed'>We utilize Machine Learning to suggest tourist attractions tailored to your interests. We'd appreciate your feedback on how well our recommendations align or don't align with your preferences. This will help us enhance our system, leading to more precise travel suggestions in the future.</p>
                    </div>
                </div>
                <div className='Questionnaire'>
                    {/* Question 1 */}
                    <div className='row InsideQQ'>
                        <div className='col-md-8'>
                            <p className='QuestionEach'>Question 1: According to the prediction results from the machine learning, how much does the characteristics match you?</p>
                        </div>
                        <div className='col-md-4'>
                            <div className='ScoreButtons'>
                                {[1, 2, 3, 4, 5].map((score) => (
                                    <div key={score} className="ScoreButtonContainer">
                                        <button
                                            className={`ScoreButton ${scores.question1 === score ? 'Selected' : ''}`}
                                            onClick={() => handleScoreSelection('question1', score)}
                                            disabled={disabledQuestions.includes('question1')}
                                        >
                                            {score}
                                        </button>
                                        {score === 1 && <div className="ScoreLabel">Low</div>}
                                        {score === 5 && <div className="ScoreLabel">High</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div className='row InsideQQ'>
                        <div className='col-md-8'>
                            <p className='QuestionEach'>Question 2: How well did our recommended tour package align with your personal interests and preferences?</p>
                        </div>
                        <div className='col-md-4'>
                            <div className='ScoreButtons'>
                                {[1, 2, 3, 4, 5].map((score) => (
                                    <div key={score} className="ScoreButtonContainer">
                                        <button
                                            className={`ScoreButton ${scores.question2 === score ? 'Selected' : ''}`}
                                            onClick={() => handleScoreSelection('question2', score)}
                                            disabled={disabledQuestions.includes('question2')}
                                        >
                                            {score}
                                        </button>
                                        {score === 1 && <div className="ScoreLabel">Low</div>}
                                        {score === 5 && <div className="ScoreLabel">High</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Question 3 */}
                    <div className='row InsideQQ'>
                        <div className='col-md-8'>
                            <p className='QuestionEach'>Did you find the recommended tour appealing based on your personal preferences?</p>
                        </div>
                        <div className='col-md-4'>
                            <div className='ScoreButtons'>
                                {[1, 2, 3, 4, 5].map((score) => (
                                    <div key={score} className="ScoreButtonContainer">
                                        <button
                                            className={`ScoreButton ${scores.question3 === score ? 'Selected' : ''}`}
                                            onClick={() => handleScoreSelection('question3', score)}
                                            disabled={disabledQuestions.includes('question3')}
                                        >
                                            {score}
                                        </button>
                                        {score === 1 && <div className="ScoreLabel">Low</div>}
                                        {score === 5 && <div className="ScoreLabel">High</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Question 4 */}
                    <div className='row InsideQQ'>
                        <div className='col-md-8'>
                            <p className='QuestionEach'>Question 4: How well did our recommended tour package align with your personal interests and preferences?</p>
                        </div>
                        <div className='col-md-4'>
                            <div className='ScoreButtons'>
                                {[1, 2, 3, 4, 5].map((score) => (
                                    <div key={score} className="ScoreButtonContainer">
                                        <button
                                            className={`ScoreButton ${scores.question4 === score ? 'Selected' : ''}`}
                                            onClick={() => handleScoreSelection('question4', score)}
                                            disabled={disabledQuestions.includes('question4')}
                                        >
                                            {score}
                                        </button>
                                        {score === 1 && <div className="ScoreLabel">Low</div>}
                                        {score === 5 && <div className="ScoreLabel">High</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Question 5 */}
                    <div className='row InsideQQ'>
                        <div className='col-md-8'>
                            <p className='QuestionEach'>Question 5: How well did our recommended tour package align with your personal interests and preferences?</p>
                        </div>
                        <div className='col-md-4'>
                            <div className='ScoreButtons'>
                                {[1, 2, 3, 4, 5].map((score) => (
                                    <div key={score} className="ScoreButtonContainer">
                                        <button
                                            className={`ScoreButton ${scores.question5 === score ? 'Selected' : ''}`}
                                            onClick={() => handleScoreSelection('question5', score)}
                                            disabled={disabledQuestions.includes('question5')}
                                        >
                                            {score}
                                        </button>
                                        {score === 1 && <div className="ScoreLabel">Low</div>}
                                        {score === 5 && <div className="ScoreLabel">High</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='reANDsub'>
                        <button className='ResetButton' onClick={handleReset}>
                            Reset
                        </button>
                        <button className='SubmitButton' onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
