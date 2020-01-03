import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";

interface Props {
  question: string;
  options: Array<string>;
  selected: any;
}

const Questions = ({ question, options, selected }: Props) => {
  const [answer, setAnswer] = useState(options);
  return (
    <Box mb={10}>
      <Box mb={5}>
        <Typography variant="h5" noWrap>
          {question}
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {answer.map((text: string, index: number) => (
            <Grid item>
              <Button
                style={{ textTransform: "none" }}
                key={index}
                variant="outlined"
                onClick={() => {
                  setAnswer([text]);
                  selected(text);
                }}
              >
                {text}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Questions;
