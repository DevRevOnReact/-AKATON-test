import React, {Component} from 'react'
// import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import HomePage from "./components/UI/homePage/HomePage.js";
import HeaderLayout from "./components/UI/header/HeaderLayout";




class App extends Component {
  render() {
    return (

      <React.Fragment>
<HeaderLayout>
        <Switch>
            <Route path="/home" component={HomePage} />
          <Route path="/quiz-creator" component={QuizCreator} />
            <Route path="/list-quiz" component={QuizList} />
            <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />


        </Switch>
</HeaderLayout>
      </React.Fragment>
    )
  }
}

export default App
