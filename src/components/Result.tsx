import React from "react";
import { Box, Button, Typography } from "@material-ui/core";

interface Props {
  score: number;
  playAgain: () => void;
}

const Result = ({ score, playAgain }: Props) => (
  <Box my={10}>
    <Typography variant="h5">
      Congratulations! You answered {score} of / 5 answers correct!
    </Typography>
    <Button
      style={{ textTransform: "none", marginTop: "10px" }}
      variant="outlined"
      color="primary"
      onClick={playAgain}
    >
      Play Again!
    </Button>
  </Box>
);

export default Result;
