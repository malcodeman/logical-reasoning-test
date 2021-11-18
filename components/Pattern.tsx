import { Circle, Grid } from "@chakra-ui/layout";
import { map } from "ramda";

type props = {
  id?: string;
  array: number[][];
  isOption?: boolean;
  isSelected?: boolean;
  onClick?: (id: string) => void;
};

function Pattern(props: props) {
  const { id, array, isOption = false, isSelected = false, onClick } = props;

  function handleOnClick() {
    if (onClick && id) {
      onClick(id);
    }
  }

  function getBorderColor() {
    if (isSelected) {
      return "#4f44e0";
    }
    if (isOption) {
      return "#f6f6f6";
    }
    return "transparent";
  }

  return (
    <Grid
      gridTemplateColumns="repeat(5, 1fr)"
      gridGap="2"
      padding="4"
      borderRadius="md"
      borderStyle="solid"
      borderWidth="2px"
      cursor={isOption ? "pointer" : "default"}
      backgroundColor={isOption ? "#f6f6f6" : "transparent"}
      borderColor={getBorderColor()}
      onClick={handleOnClick}
    >
      {map((item) => {
        return map((patt) => {
          if (patt === 0) {
            return (
              <Circle border="2px solid #000" height="20px" width="20px" />
            );
          }
          return <Circle backgroundColor="#000" height="20px" width="20px" />;
        }, item);
      }, array)}
    </Grid>
  );
}

export default Pattern;
