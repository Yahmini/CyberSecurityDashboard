import React, { useEffect, useState } from 'react';
import "../App.css";
// Full question bank
const fullQuestionBank = [
  {
    question: "What does HTTPS stand for?",
    options: [
      "Hyper Text Transfer Protocol Secure",
      "High Transfer Text Protocol Security",
      "Hyperlink Transfer Protocol Secure",
      "Hack The Protocol Server"
    ],
    answer: "Hyper Text Transfer Protocol Secure"
  },
  {
    question: "What is phishing?",
    options: [
      "Using encryption to secure data",
      "Pretending to be someone else to steal info",
      "A method of physical security",
      "A type of firewall"
    ],
    answer: "Pretending to be someone else to steal info"
  },
  {
    question: "What is 2FA?",
    options: [
      "Two-Factor Authentication",
      "Two-Firewall Access",
      "File Authentication Algorithm",
      "Two-Faced Attack"
    ],
    answer: "Two-Factor Authentication"
  },
  {
    question: "Which of the following is NOT a strong password?",
    options: [
      "Qwerty123",
      "J!8@d9#sLm",
      "T3mp#2023%",
      "A9$sZ@1qW"
    ],
    answer: "Qwerty123"
  },
  {
    question: "Which port is commonly used for HTTPS?",
    options: ["80", "21", "443", "22"],
    answer: "443"
  },
  {
    question: "What kind of malware locks your data for ransom?",
    options: ["Worm", "Ransomware", "Trojan", "Spyware"],
    answer: "Ransomware"
  },
  {
    question: "What is a VPN used for?",
    options: [
      "Scanning viruses",
      "Encrypting local files",
      "Creating a secure private network",
      "Speeding up the internet"
    ],
    answer: "Creating a secure private network"
  },
  {
    question: "What is the main purpose of a firewall?",
    options: [
      "Speed up network traffic",
      "Encrypt data",
      "Block unauthorized access",
      "Store user passwords"
    ],
    answer: "Block unauthorized access"
  },
  {
    question: "Which of these is a social engineering attack?",
    options: [
      "DDoS attack",
      "Brute force attack",
      "SQL injection",
      "Pretexting"
    ],
    answer: "Pretexting"
  },
  {
    question: "What is a man-in-the-middle (MITM) attack?",
    options: [
      "An attacker interrupts and alters communication between two parties",
      "A direct attack on a web server",
      "Flooding a server with traffic",
      "Stealing physical hardware"
    ],
    answer: "An attacker interrupts and alters communication between two parties"
  },
  // Add more cybersecurity questions here...
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Load 10 random questions on mount
  useEffect(() => {
    resetQuiz();
  }, []);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    const randomQuestions = shuffleArray(fullQuestionBank).slice(0, 10);
    setQuestions(randomQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container p-6 max-w-2xl mx-auto bg-white shadow-xl rounded-2xl mt-10">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6 text-center">Cybersecurity Quiz</h1>
  
      {showResult ? (
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-6">
            You scored <span className="text-indigo-700">{score}</span> out of <span className="text-indigo-700">{questions.length}</span>!
          </p>
          <button
            onClick={resetQuiz}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Try Again
          </button>
        </div>
      ) : questions.length > 0 ? (
        <div>
          <div className="mb-6">
            <p className="text-lg font-medium text-gray-800">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <p className="text-xl mt-2 text-gray-900 font-semibold">
              {questions[currentQuestion].question}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading quiz...</p>
      )}
    </div>
  );
}  ;

export default QuizPage;
