import {useState} from "react";



const Quiz = () => {

    const questions = [
        {
            questionText:'Столица РОССИИ?',
            answersOptions:[
                {answerText:"Moscow", isCorrect: true},
                {answerText:"Berlin", isCorrect: false},
                {answerText:"Rostov-On-Don", isCorrect: false},
                {answerText:"Nikolaev", isCorrect: false},
            ]
        },
        {
            questionText:'Столица РОССИИ?',
            answersOptions:[
                {answerText:"Moscow", isCorrect: true},
                {answerText:"Berlin", isCorrect: false},
                {answerText:"Rostov-On-Don", isCorrect: false},
                {answerText:"Boston", isCorrect: false},
            ]
        },
        {
            questionText:'Столица РОССИИ?',
            answersOptions:[
                {answerText:"Moscow", isCorrect: true},
                {answerText:"Berlin", isCorrect: false},
                {answerText:"Rostov-On-Don", isCorrect: false},
                {answerText:"Lavkaev", isCorrect: false},
            ]
        },
        {
            questionText:'Столица РОССИИ?',
            answersOptions:[
                {answerText:"Moscow", isCorrect: true},
                {answerText:"Berlin", isCorrect: false},
                {answerText:"Rostov-On-Don", isCorrect: false},
                {answerText:"Gorod", isCorrect: false},
            ]
        }
    ]



    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerClick = (isCorrect) => {
        if(isCorrect){
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1

        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowScore(true)
        }
    }

    const refresh = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }






        return (


        <div className='quizz__container'>
            <div className='quizz__main'>



                {
                  showScore
                    ?  <div className='section__score'>
                          <div>Правильных ответов {score} из {questions.length}</div>
                          <button className='refresh__btn' onClick={refresh}>Попробовать еще раз?</button>
                      </div>
                      : <div className='quizz'>
                          <div className='question__section'>
                              <div className='question__count'>
                                  <span>{currentQuestion + 1}</span> / {questions.length}
                              </div>
                              <div className='question__text'> {questions[currentQuestion].questionText}</div>
                          </div>
                          <div className='answer__section'>
                              {questions[currentQuestion].answersOptions.map(item => (
                                      <button onClick={() => handleAnswerClick(item.isCorrect)}>{item.answerText}</button>
                                  )
                              )}
                          </div>
                      </div>
                }


        </div>
</div>
    );
};

export default Quiz;
