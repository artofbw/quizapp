import React, { useEffect, useState } from "react";

import questions from "./questions";
import Questions from "./components/Questions";
import Result from "./components/Result";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box
} from "@material-ui/core";

const App: React.FC = () => {
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);

  async function getQuestions() {
    return await questions();
  }

  useEffect(() => {
    getQuestions().then((question: any) => {
      setCurrentQuestions([...question]);
    });
  }, []);

  const computeAnswer = (answer: string, correctAnswer: string) => {
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    if (responses < 5) {
      setResponses(responses + 1);
    }
  };

  const playAgain = () => {
    getQuestions().then((question: any) => {
      setCurrentQuestions([...question]);
    });
    setScore(0);
    setResponses(0);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Quiz app</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box my={10}>
          {currentQuestions.length > 0 &&
            responses < 5 &&
            currentQuestions.map(({ id, question, answers, correct }) => (
              <Questions
                key={id}
                question={question}
                options={answers}
                selected={(answer: string) => computeAnswer(answer, correct)}
              />
            ))}

          {responses === 5 ? (
            <Result score={score} playAgain={playAgain} />
          ) : null}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
