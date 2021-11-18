import { Flex } from "@chakra-ui/layout";

function QuestionMark() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      fontSize="36px"
      borderRadius="md"
      color="#fff"
      backgroundColor="rgba(79, 68, 224, 0.5)"
    >
      ?
    </Flex>
  );
}

export default QuestionMark;
