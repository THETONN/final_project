import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Questionnaire.css";

function Details() {
  const [questions, setQuestions] = useState([]);
  const [scores, setScores] = useState({});
  const [disabledQuestions, setDisabledQuestions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // ตรวจสอบสถานะ feedback จาก localStorage
    const savedFeedback = localStorage.getItem("feedback"); 
    const group = localStorage.getItem('groupId');
    setIsSubmitted(savedFeedback === "1");
    console.log(group);                

    if (savedFeedback !== "1") {
      axios
        .get("http://localhost:8081/feedback")
        .then((response) => {
          const initialScores = {};
          response.data.forEach((question) => {
            initialScores[`question${question.id_feedback}`] = null;
          });
          setQuestions(response.data);
          setScores(initialScores);
        })
        .catch((error) =>
          console.error("Error fetching feedback questions:", error)
        );
    }
  }, []);

  const handleScoreSelection = (question, score) => {
    if (!disabledQuestions.includes(question)) {
      setScores((prevScores) => ({
        ...prevScores,
        [question]: score,
      }));
      console.log(`${question}: Score selected - ${score}`);
      setDisabledQuestions((prevDisabled) => [...prevDisabled, question]);
      setIsSubmitted(false);
    }
  };

  const handleReset = () => {
    const initialScores = {};
    Object.keys(scores).forEach((key) => {
      initialScores[key] = null;
    });
    setScores(initialScores);
    setDisabledQuestions([]);
    setIsSubmitted(false);
    
  };

  const handleSubmit = async () => {
    if (!isSubmitted) {
      showSuccessAlert();
      localStorage.setItem("isSubmitted", "1");
      setIsSubmitted('1');

      try {
        console.log('Scores:', scores);

        // แปลง scores ไปเป็นรูปแบบที่ต้องการ
        const feedbackData = {
            id_user: localStorage.getItem('userId'),
            Q1: scores['question1'],
            Q2: scores['question2'],
            Q3: scores['question3'],
            Q4: scores['question4'],
            Q5: scores['question5'],
            groupId: localStorage.getItem('groupId')
        };

        console.log('Feedback data to submit:', feedbackData);

        // ส่งข้อมูล feedback ไปยังเซิร์ฟเวอร์
        const response = await axios.post('http://localhost:8081/submit_feedback', feedbackData);

        console.log('Submission successful:', response.data);

        // อัปเดตสถานะ feedback ในฐานข้อมูล
        await axios.post("http://localhost:8081/update-feedback-status", {
          id_user: localStorage.getItem("userId"),
          feedback: '1',
        });

        setIsSubmitted('1'); // อัปเดต state เพื่อป้องกันการส่งซ้ำ

        // อัปเดตสถานะใน localStorage
        localStorage.setItem("feedback", "1");
      } catch (error) {
        console.error("Error submitting scores:", error);
      }
    }
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Thank you!",
      text: "Thank you for your feedback.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="AllQuestionnaire">
      <div className="container">
        <div className="MainFeedback">
          <div className="Feedback">
            <h1 className="TitleFeed">We need your feedback</h1>
            <p className="DescriptionFeed">
              We utilize Machine Learning to suggest tourist attractions
              tailored to your interests. We'd appreciate your feedback on how
              well our recommendations align or don't align with your
              preferences. This will help us enhance our system, leading to more
              precise travel suggestions in the future.
            </p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="ThankYouMessage">
            <h2>Thank you for your feedback!</h2>
            <p>Your input is valuable to us and helps improve our service.</p>
          </div>
        ) : (
          <div className="Questionnaire">
            {questions.map((question) => (
              <div key={question.id_feedback} className="row InsideQQ">
                <div className="col-md-8">
                  <p className="QuestionEach">{`Question ${question.id_feedback}: ${question.question_feedback}`}</p>
                </div>
                <div className="col-md-4">
                  <div className="ScoreButtons">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <div key={score} className="ScoreButtonContainer">
                        <button
                          className={`ScoreButton ${
                            scores[`question${question.id_feedback}`] === score
                              ? "Selected"
                              : ""
                          }`}
                          onClick={() =>
                            handleScoreSelection(
                              `question${question.id_feedback}`,
                              score
                            )
                          }
                          disabled={
                            disabledQuestions.includes(
                              `question${question.id_feedback}`
                            ) || isSubmitted
                          }
                        >
                          {score}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="reANDsub">
              <button
                className={`ResetButton ${isSubmitted ? "DisabledButton" : ""}`}
                onClick={handleReset}
                disabled={isSubmitted}
              >
                Reset
              </button>
              <button
                id="submitBtn"
                className={`SubmitButton ${
                  Object.values(scores).some((score) => score === null) ||
                  isSubmitted
                    ? "DisabledButton"
                    : ""
                }`}
                onClick={handleSubmit}
                disabled={
                  Object.values(scores).some((score) => score === null) ||
                  isSubmitted
                }
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
