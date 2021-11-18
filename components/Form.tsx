import React from "react";
import { Divider, Flex, Grid } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { equals, find, isEmpty, isNil, map } from "ramda";
import { ChevronLeft, ChevronRight } from "react-feather";

import Pattern from "./Pattern";
import QuestionMark from "./QuestionMark";

type props = {
  sequence: { id: string; array: number[][] }[];
  options: { id: string; array: number[][] }[];
  canPreviousPage: boolean;
  canNextPage: boolean;
  onPrevious: (id: string) => void;
  onNext: (id: string) => void;
};

function Form(props: props) {
  const {
    sequence,
    options,
    canPreviousPage,
    canNextPage,
    onPrevious,
    onNext,
  } = props;
  const [selected, setSelected] = React.useState("");

  function handleOnClick(id: string) {
    setSelected(id);
  }

  function renderSelected() {
    if (isEmpty(selected)) {
      return <QuestionMark />;
    }
    const option = find((item) => item.id === selected, options);
    if (isNil(option)) {
      return <QuestionMark />;
    }
    return <Pattern array={option.array} />;
  }

  return (
    <Flex flexDirection="column">
      <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="4">
        {map(
          (item) => (
            <Pattern array={item.array} />
          ),
          sequence
        )}
        {renderSelected()}
      </Grid>
      <Divider marginY="6" />
      <Grid templateColumns="repeat(4, 1fr)" gridGap="4">
        {map(
          (item) => (
            <Pattern
              id={item.id}
              array={item.array}
              isOption={true}
              isSelected={equals(item.id, selected)}
              onClick={handleOnClick}
            />
          ),
          options
        )}
      </Grid>
      <Divider marginY="6" />
      <Flex justifyContent="space-between">
        <Button
          isDisabled={!canPreviousPage}
          onClick={() => onPrevious(selected)}
          leftIcon={<ChevronLeft size={16} />}
        >
          Previous
        </Button>
        {isEmpty(selected) ? (
          <Button
            onClick={() => onNext(selected)}
            rightIcon={<ChevronRight size={16} />}
          >
            {canNextPage ? "Skip" : "Finish"}
          </Button>
        ) : (
          <Button
            onClick={() => onNext(selected)}
            colorScheme="green"
            rightIcon={<ChevronRight size={16} />}
          >
            {canNextPage ? "Next" : "Finish"}
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

export default Form;
