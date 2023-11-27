import React, { useState, useEffect } from 'react';
import './QuizMain.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const QuizMain = () => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [step, setStep] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8081/Q")
            .then((res) => {
                const formattedData = formatData(res.data);
                setQuestions(formattedData);
            })
            .catch((err) => {
                // จัดการข้อผิดพลาดที่นี่
            });
    }, []);

    const formatData = (data) => {
        const questionMap = {};

        data.forEach(item => {
            if (!questionMap[item.question_topic]) {
                questionMap[item.question_topic] = [];
            }
            questionMap[item.question_topic].push(item.choice);
        });

        return Object.keys(questionMap).map(question => ({
            question,
            answers: questionMap[question]
        }));
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const checkAnswer = (answerIndex) => {
        const selectedAnswer = questions[step].answers[answerIndex];
        setUserAnswers({
            ...userAnswers,
            [step]: selectedAnswer,
        });
    };

    const submitAnswers = async () => {
        try {
            const id_user = getUserIdFromContextOrStorage(); // ต้องมีฟังก์ชันนี้
            const answersPayload = { userAnswers, id_user };
    
            const predictionResponse = await axios.post('http://localhost:3001/predict', answersPayload);
            const id_group = predictionResponse.data.id_group;
    
            // สร้างอาร์เรย์ของข้อมูลคำตอบ
            const userAnswersData = Object.keys(userAnswers).map(questionIndex => {
                return {
                    id_user: id_user,
                    id_question: parseInt(questionIndex) + 1, // สมมติว่า id_question คือ index + 1 ของคำถาม
                    id_choice: userAnswers[questionIndex], // สมมติว่า id_choice คือคำตอบที่ผู้ใช้เลือก
                    id_group: id_group
                };
            });
    
            // ส่งข้อมูลไปยัง API ที่จะทำการ insert
            await axios.post('http://localhost:3001/insert-answers', userAnswersData);
    
            // นำทางไปยังหน้าตามกลุ่มของผู้ใช้
            if (id_group === 1) {
                navigate('/HomePredict');
            } else if (id_group === 2) {
                navigate('/HomePredict2');
            } else {
                navigate('/HomePredict3');
            }
        } catch (error) {
            console.error('Error during submission:', error);
        }
    };
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
                                <h2>{questions[step].question}</h2>
                            </div>
                        </div>
                        <div className="Answer">
                            {questions[step].answers.map((answer, index) => (
                                <div className="AnswerOption" key={index} onClick={() => checkAnswer(index)}>
                                    <input
                                        type="radio"
                                        name={`answer-${step}`}
                                        value={index}
                                        onChange={() => { }}
                                        checked={userAnswers[step] === answer}
                                    />
                                    <label style={{ marginLeft: '0.3rem' }}>{answer}</label>
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
                        {step < questions.length - 1 && (
                            <button
                                className={`NextButton ${!userAnswers[step] ? 'disabled' : ''}`}
                                onClick={nextStep}
                                disabled={!userAnswers[step]}
                            >
                                Next
                            </button>
                        )}
                        {step === questions.length - 1 && (
                            <button className="SubmitButton" onClick={submitAnswers}>
                                Submit Answers
                            </button>
                        )}
                    </div>
                </>
            ) : (
                <div className="finalPage">
                    <h1>Questionnaire completed</h1>
                    <p>"Press submit to unlock the power of intelligent AI processing,<br /> tailoring the perfect tour package that suits your preferences."</p>
                </div>
            )}
        </div>
    );
};

export default QuizMain;
