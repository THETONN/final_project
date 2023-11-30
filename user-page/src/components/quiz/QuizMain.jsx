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

  // const checkAnswer = (answerId) => {
  //   // const answerText = questions[step].answers[answerId];
  //   setUserAnswers({
  //     ...userAnswers,
  //     [questions[step].question]: answerId,
  //     // [questions[step].question]: answerText,
  //   });
  // };
  const checkAnswer = (answerId) => {
    const answerText = questions[step].answers[answerId];
    setUserAnswers({
      ...userAnswers,
      [questions[step].question]: answerText,
    });
  };

  const getUserIdFromStorage = () => {
    return localStorage.getItem("userId"); // 'userId' is the key where user id is stored
  };

  // สมมุติว่านี่คือ object ที่ใช้สำหรับ mapping คำตอบไปยังตัวเลขที่ถูก encode
  const answerEncoding = {
    'Gender': {
      'Male': 0,
      'Female': 1,
      'Alternative':2,
    },
    'Age': {
      'less than or equal to 20 years old': 0,
      '21-30 years old': 1,
      '31-40 years old':2,
      '41-50 years old':3,
      '51-60 years old':4,
      'Over 60 years old':5
    },
    'Occupation': {
      'Student': 0,
      'Business owner': 1,
      'Government officers':2,
      'Private company employees':3,
      'Housewife/Househusband':4,
      'Employees':5,
      'Farmer':6,
      'Others':7
    },
    'Education level': {
      "Under bachelor's degree": 0,
      "Bachelor's degree or equivalent": 1,
      "Higher bachelor's degree": 2, 
    },
    
    'Income(monthly)': {
      "Less than 15,000 THB": 0,
      "15,000 - 30,000 THB": 1,
      "30,001 - 45,000 THB":2,
      '45,001 - 60,000 THB':3,
      'More than 60,000 THB':4
    },
    'Household size (including the respondent)': {
      '1 person': 0,
      '2-3 people': 1,
      '4-5 people':2,
      'More than 5 people':3
    },
    'Vehicle ownership': {
      'Yes': 0,
      'No': 1,
    },
    'Status': {
      'Single': 0,
      'Married': 1,
      'Not mentioned':2,
    },
    'Your current residence (Region)': {
      'Central': 0,
      'North': 1,
      'South':2,
      'North-East':3,
      'Eastern':4,
      'Western':5
    },
    'The frequency of domestic traveling': {
      'More than 5 times/year': 0,
      '4-5 times/year': 1,
      '2-3 times/year':2,
      'Less than 2 times/year-East':3
    },
    'The average number of travel companions per 1 round trip regularly': {
      'Single': 0,
      '1-2 persons': 1,
      '3-4 persons':2,
      'More than 5 persons':3
    },
    'The average travel expenditures per 1 round trip': {
      'Lower than 500 THB': 0,
      '501-1,500 THB': 1,
      '1,501-2,500 THB':2,
      '2,501-3,500 THB':3,
      'More than 3,500 THB':4
    },
    'The average days for traveling per 1 round trip': {
        '1 day': 0,
        '1-2 days': 1,
        '3-4 days':2,
        'More Than 4 days':3
      },
    'The preference season for traveling': {
        'Hot season': 0,
        'Rainy season': 1,
        'Cold season':2,
      
    },
    'The preference types of tourism destinations regularly': {
        'Environment destination (such as beaches, mountains, waterfalls, etc.)': 0,
        'Historical Attraction (such as temples, historical parks, museums, etc.)': 1,
        'Cultural Attraction (such as floating markets, traditional festivals, cultural performances, etc.)':2,
        'Recreational destinations (such as entertainment venues, amusement parks, zoos, shopping malls, concerts, etc.)':3,
        'Ethnic destinations (such as Karen village, coffee planting workshop, homestay, etc.)':4,
        'Business destinations (such as seminars, business negotiations, meetings, etc.)':5
    },
    'The preference region that you travel regularly': {
        'Central region': 0,
        'North region': 1,
        'South region':2,
        'North-East region':3,
        'Eastern region':4,
        'Western region':5
    },
    'The preference type of vehicles for traveling regularly': {
        'Private car': 0,
        'Motorcycle': 1,
        'Public transport':2,
        'Airplane':3,
        'Train':4,
        'Passenger ship':5
    },
    'The preferences period of time for traveling': {
      'Weekend (Saturday-Sunday)': 0,
      'Weekday (Monday-Friday)': 1,
      'Holidays':2,
    },
  
  };

  

  const submitAnswers = async () => {
    console.log('questions:', questions);
    console.log('userAnswers:', userAnswers);
    
    try {
      const id_user = getUserIdFromStorage();
  
      // Normalize user answers, remove line breaks, and ensure consistent capitalization if necessary
      const normalizedUserAnswers = {};
      for (const questionText in userAnswers) {
        const answer = userAnswers[questionText];
        normalizedUserAnswers[questionText] = answer.replace(/\r\n/g, '').trim();
      }
  
      const encodedAnswers = questions.map((questionObj, index) => {
        const questionText = questionObj.question;
        const userAnswer = normalizedUserAnswers[questionText];
        const encodedValue = answerEncoding[questionText]?.[userAnswer];
  
        console.log(`questionText: ${questionText}`);
        console.log(`userAnswer: ${userAnswer}`);
        console.log(`encodedValue: ${encodedValue}`);

        
  
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

      if (encodedAnswers.length === 18) { // Check if there are exactly 18 items
        encodedAnswers.forEach((encodedAnswer, index) => {
          console.log(`Question ${index + 1} encoded value:`, encodedAnswer);
        });
      } else {
        console.error(`Expected 18 encoded answers, but got ${encodedAnswers.length}`);
      }

      console.log("Encoded answers to be submitted:", encodedAnswers.id_choice);
      console.log("Encoded answers to be submitted:", encodedAnswers);

      // ส่งคำตอบที่ถูก encode ไปยัง API /predict
      const idChoices = encodedAnswers.map(answer => answer.id_choice);
      console.log("id_choice values to be submitted:", idChoices);

      const predictionResponse = await axios.post(
        "http://localhost:8081/predict",
        { answers: idChoices }
      );
      const predictedGroup = predictionResponse.data.group;

      // Post ข้อมูลพร้อมกับกลุ่มที่ทำนายได้ไปยังฐานข้อมูล
      const dbPostResponse = await axios.post(
        "http://localhost:8081/submit-to-db",
        {
          answers: encodedAnswers.map((answer) => ({
            ...answer,
            group: predictedGroup,
          })),
        }
      );

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
            <span style={{ fontSize: "1.2rem" }}>{`Question:  ${steps[step]}`}</span>
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
                  userAnswers[questions[step].question] == null
                    ? "disabled"
                    : ""
                }`}
                onClick={nextStep}
                disabled={userAnswers[questions[step].question] == null}
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
