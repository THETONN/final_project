import React, { useState } from 'react';
import './QuizMain.css';
import { Steps } from 'primereact/steps';
import { useNavigate } from 'react-router-dom';

const QuizMain = () => {
    const [questions, setQuestions] = useState([
        'Gender',
        'Age',
        'Occupation',
        'Education level',
        'Income(monthly)',
        'Household size (including the respondent)',
        'Vehicle ownership',
        'Status',
        'Your current residence (Region)',
        'The frequency of domestic traveling',
        'The average number of travel companions per 1 round trip regularly',
        'The average travel expenditures per 1 round trip',
        'The average days for traveling per 1 round trip',
        'The preference season for traveling',
        'The preference types of tourism destinations regularly',
        'The preference region that you travel regularly',
        'The preference type of vehicles for traveling regularly',
        'The preferences period of time for traveling',
    ]);

    const [answers, setAnswers] = useState([
        {
            1: 'Male',
            2: 'Female',
            3: 'Alternative',
        },
        {
            1: 'less than or equal to 20 years old',
            2: '21-30 years old',
            3: '31-40 years old',
            4: '41-50 years old',
            5: '51-60 years old',
            6: 'Over 60 years old',
        },
        {
            1: 'Student',
            2: 'Business owner',
            3: 'Government officers',
            4: 'Private company employees',
            5: 'Housewife/Househusband',
            6: 'Employees',
            7: 'Farmer',
            8: 'Others',
        },
        {
            1: 'Under bachelor\'s degree',
            2: 'Bachelor\'s degree or equivalent',
            3: 'Higher bachelor\'s degree',
        },
        {
            1: 'Less than 15,000 THB',
            2: '15,000 - 30,000 THB',
            3: '30,001 - 45,000 THB',
            4: '45,001 - 60,000 THB',
            5: 'More than 60,000 THB',

        },
        {
            1: '1 person',
            2: '2-3 people',
            3: '4-5 people',
            4: 'More than 5 people',

        },
        {
            1: 'Yes',
            2: 'No',
        },
        {
            1: 'Single',
            2: 'Married',
            3: 'Not mentioned',
        },
        {
            1: 'Central',
            2: 'North',
            3: 'South',
            4: 'North-East',
            5: 'Eastern',
            6: 'Western',
        },
        {
            1: 'More than 5 times/year',
            2: '4-5 times/year',
            3: '2-3 times/year',
            4: 'Less than 2 times/year-East',
        },
        {
            1: 'Single',
            2: '1-2 persons',
            3: '3-4 persons',
            4: 'More than 5 persons',
        },
        {
            1: 'Lower than 500 THB',
            2: '501-1,500 THB',
            3: '1,501-2,500 THB',
            4: '2,501-3,500 THB',
            5: 'More than 3,500 THB',
        },
        {
            1: '1 day',
            2: '1-2 days',
            3: '3-4 days',
            4: 'More Than 4 days',
        },
        {
            1: 'Hot season',
            2: 'Rainy season',
            3: 'Cold season',
        },
        {
            1: 'Environment destination (such as beaches, mountains, waterfalls, etc.)',
            2: 'Historical Attraction (such as temples, historical parks, museums, etc.)',
            3: 'Cultural Attraction (such as floating markets, traditional festivals, cultural performances, etc.)',
            4: 'Recreational destinations (such as entertainment venues, amusement parks, zoos, shopping malls, concerts, etc.)',
            5: 'Ethnic destinations (such as Karen village, coffee planting workshop, homestay, etc.)',
            6: 'Business destinations (such as seminars, business negotiations, meetings, etc.)',
        },
        {
            1: 'Central region',
            2: 'North region',
            3: 'South region',
            4: 'North-East region',
            5: 'Eastern region',
            6: 'Western region',
        },
        {
            1: 'Private car',
            2: 'Motorcycle',
            3: 'Public transport',
            4: 'Airplane',
            5: 'Train',
            6: 'Passenger ship',
        },
        {
            1: 'Weekend (Saturday-Sunday)',
            2: 'Weekday (Monday-Friday)',
            3: 'Holidays',
        },
    ]);

    const [userAnswers, setUserAnswers] = useState({});
    const [step, setStep] = useState(0);

    const navigate = useNavigate();

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const checkAnswer = (answerIndex) => {
        const selectedAnswer = answers[step][answerIndex];
        setUserAnswers({
            ...userAnswers,
            [step]: selectedAnswer,
        });
        console.log(`Question ${step + 1} Answered: ${selectedAnswer}`);
    };

    const submitAnswers = () => {
        const apiUrl = 'http://localhost:3001/submit';

        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question,
                    userAnswer,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error submitting answer:', error);
                });
        });

        navigate('/HomePredict3');
    };

    const currentAnswers = answers[step];

    const steps = Array.from({ length: questions.length }, (_, index) => `${index + 1}/${questions.length}`);

    return (
        <div className="Content">
            {step >= 0 && step < questions.length ? (
                <>
                    <div className="QuestionHeader" style={{ marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>{`Page ${steps[step]}`}</span>
                    </div>

                    <div className="QandA">
                        <div className="Question">
                            <div className="QuestionText">
                                <h2>{questions[step]}</h2>
                            </div>
                        </div>
                        <div className="Answer">
                            {Object.keys(currentAnswers).map((option, index) => (
                                <div className="AnswerOption" key={index} onClick={() => checkAnswer(option)}>
                                    <input
                                        type="radio"
                                        name={`answer-${step}`}
                                        value={option}
                                        onChange={() => { }}
                                        checked={userAnswers[step] === currentAnswers[option]}
                                    />
                                    <label style={{ marginLeft: '0.3rem' }}>{currentAnswers[option]}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="NavigationButtons">
                        {step > 0 && (
                            <button className="BackButton" onClick={prevStep}>
                                Back
                            </button>
                        )}
                        <button
                            className={`NextButton ${!userAnswers[step] ? 'disabled' : ''}`}
                            onClick={nextStep}
                            disabled={!userAnswers[step]}
                        >
                            Next
                        </button>
                    </div>
                </>
            ) : (
                <div className="finalPage">
                    <h1>Questionnaire completed</h1>
                    <p>"Press submit to unlock the power of intelligent AI processing,<br /> tailoring the perfect tour package that suits your preferences."</p>
                    <br />
                    <button className="SubmitButton" onClick={submitAnswers}>
                        Submit Answers
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizMain;
