import React from "react";
import { Box, Center, Grid } from "@chakra-ui/layout";
import { dec, inc } from "ramda";

import constants from "../lib/constants";

import Form from "../components/Form";

function Home() {
  const [current, setCurrent] = React.useState(0);
  const question = constants.TEST.questions[current];

  function handleOnNext(id: string) {
    if (current === constants.TEST.questions.length - 1) {
      alert("Finished");
    } else {
      setCurrent(inc(current));
    }
  }

  function handleOnPrevious(id: string) {
    setCurrent(dec(current));
  }

  return (
    <Grid templateRows="auto 1fr" minHeight="100vh">
      <Box as="nav" padding="2" color="#fff" backgroundColor="#4f44e0">
        {current + 1} of {constants.TEST.questions.length}
      </Box>
      <Center padding="4">
        <Form
          sequence={question.sequence}
          options={question.options}
          canPreviousPage={current > 0}
          canNextPage={current < constants.TEST.questions.length - 1}
          onNext={handleOnNext}
          onPrevious={handleOnPrevious}
        />
      </Center>
    </Grid>
  );
}

export default Home;
