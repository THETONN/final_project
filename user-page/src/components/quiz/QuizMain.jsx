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
        // จัดการข้อผิดพลาดที่นี่
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

  const checkAnswer = (answerIndex) => {
    const selectedAnswer = questions[step].answers[answerIndex];
    setUserAnswers({
      ...userAnswers,
      [step]: selectedAnswer,
    });
  };
  const getUserIdFromStorage = () => {
    return localStorage.getItem("userId"); // 'userId' คือ key ที่คุณเก็บ id_user
  };
  const submitAnswers = async () => {
    try {
      const id_user = getUserIdFromStorage();
      console.log("User ID:", id_user);
  
      // สร้างอาร์เรย์ของคำตอบจาก userAnswers object ที่เรามี
      const answersArray = Object.values(userAnswers);
  
      // ส่งคำตอบไปยัง backend
      const predictionResponse = await axios.post("http://localhost:8081/predict", {
        answers: answersArray, // ส่งคำตอบในรูปแบบอาร์เรย์
        id_user: id_user,
      });
      const id_group = predictionResponse.data.id_group; // ตัวแปรนี้ควรมีค่ากลุ่มที่ได้จากการทำนาย
  
      // ส่งข้อมูลคำตอบไปยัง database
      const userAnswersData = answersArray.map((answer, index) => ({
        id_user: id_user,
        id_question: index + 1, // หรือใช้การที่เหมาะสมกับการกำหนด id_question ของคุณ
        id_choice: answer, // สมมติว่า answer คือ id_choice ที่เก็บไว้ใน database
        id_group: id_group,
      }));
  
      await axios.post("http://localhost:8081/insert-answers", userAnswersData);
  
      // นำทางไปยังหน้าตามกลุ่มที่ได้รับจากการทำนาย
      switch (id_group) {
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
          navigate("/"); // หน้าหลักหรือหน้าเริ่มต้นเมื่อไม่ตรงกับกลุ่มใดๆ
      }
    } catch (error) {
      console.error("Error during submission:", error);
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
                    checked={userAnswers[step] === answer}
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
                className={`NextButton ${!userAnswers[step] ? "disabled" : ""}`}
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
