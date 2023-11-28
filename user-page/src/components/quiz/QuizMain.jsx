import React, { useState, useEffect } from "react";
import "./QuizMain.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuizMain = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [step, setStep] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/Q")
      .then((res) => {
        const formattedData = formatData(res.data);
        setQuestions(formattedData);
      })
      .catch((err) => {
        // Handle the error here
      });
  }, []);

  const formatData = (data) => {
    const questionMap = {};

    data.forEach((item) => {
      if (!questionMap[item.question_topic]) {
        questionMap[item.question_topic] = [];
      }
      questionMap[item.question_topic].push(item.choice);
    });

    return Object.keys(questionMap).map((question) => ({
      question,
      answers: questionMap[question],
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const checkAnswer = (answerId) => {
    setUserAnswers({
      ...userAnswers,
      [questions[step].question]: answerId,
    });
  };

  const getUserIdFromStorage = () => {
    return localStorage.getItem("userId"); // 'userId' is the key where user id is stored
  };

  // สมมุติว่านี่คือ object ที่ใช้สำหรับ mapping คำตอบไปยังตัวเลขที่ถูก encode
  const answerEncoding = {
    น้องชอบอะไร: {
      ตีน: 12,
      ผลไม้: 1,
    },
    // ... สำหรับทุกคำถามถึง 'question_18'
  };

  const submitAnswers = async () => {
    try {
      const id_user = getUserIdFromStorage();
  
      // แปลงคำตอบเป็นตัวเลขที่ถูก encode
      const encodedAnswers = questions.map((questionObj, index) => {
        const questionText = questionObj.question;
        const userAnswer = questionObj.answers[userAnswers[questionText]];
        const encodedValue = answerEncoding[questionText]?.[userAnswer];
  
        if (encodedValue === undefined) {
          console.error(`No encoding for question: ${questionText}, answer: ${userAnswer}`);
          return null;
        }
  
        return {
          id_user: id_user,
          id_question: index + 1,
          id_choice: encodedValue,
        };
      }).filter(a => a != null);

      console.log("Encoded answers to be submitted:", encodedAnswers);
  
      // ส่งคำตอบที่ถูก encode ไปยัง API /predict
      
      const predictionResponse = await axios.post("http://localhost:8081/predict", { answers: encodedAnswers });
      const predictedGroup = predictionResponse.data.group;
  
      // Post ข้อมูลพร้อมกับกลุ่มที่ทำนายได้ไปยังฐานข้อมูล
      const dbPostResponse = await axios.post("http://localhost:8081/submit-to-db", {
        answers: encodedAnswers.map(answer => ({ ...answer, group: predictedGroup })),
      });
  
      console.log("Data submitted to database:", dbPostResponse.data);
  
      // นำทางไปยัง path ตามกลุ่มที่ทำนายได้
      switch (predictedGroup) {
        case 1:
          navigate("/HomePredict");
          break;
        case 2:
          navigate("/HomePredict2");
          break;
        case 3:
          navigate("/HomePredict3");
          break;
        default:
          console.error("Invalid group prediction:", predictedGroup);
      }
    } catch (error) {
      console.error("Error during prediction and submission:", error);
    }
  };
  
  const steps = Array.from(
    { length: questions.length },
    (_, index) => `${index + 1}/${questions.length}`
  );

  return (
    <div className="Content">
      {step >= 0 && step < questions.length ? (
        <>
          <div className="QuestionHeader" style={{ marginBottom: "1rem" }}>
            <span style={{ fontSize: "1.2rem" }}>{`Page ${steps[step]}`}</span>
          </div>
          <div className="QandA">
            <div className="Question">
              <div className="QuestionText">
                <h2>{questions[step].question}</h2>
              </div>
            </div>
            <div className="Answer">
              {questions[step].answers.map((answer, index) => (
                <div
                  className="AnswerOption"
                  key={index}
                  onClick={() => checkAnswer(index)}
                >
                  <input
                    type="radio"
                    name={`answer-${step}`}
                    value={index}
                    onChange={() => {}}
                    checked={userAnswers[questions[step].question] === index}
                  />
                  <label style={{ marginLeft: "0.3rem" }}>{answer}</label>
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
                className={`NextButton ${
                  !userAnswers[questions[step].question] ? "disabled" : ""
                }`}
                onClick={nextStep}
                disabled={!userAnswers[questions[step].question]}
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
          <p>
            "Press submit to unlock the power of intelligent AI processing,
            <br /> tailoring the perfect tour package that suits your
            preferences."
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizMain;
