import { Circle, Grid } from "@chakra-ui/layout";
import { map } from "ramda";
import { useColorModeValue } from "@chakra-ui/color-mode";

type props = {
  id?: string;
  array: number[][];
  isOption?: boolean;
  isSelected?: boolean;
  onClick?: (id: string) => void;
};

function Pattern(props: props) {
  const {
    id,
    array,
    isOption = false,
    isSelected = false,
    onClick,
    ...rest
  } = props;
  const color = useColorModeValue("#000", "#fff");
  const optionColor = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-whiteAlpha-200)"
  );

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
      return optionColor;
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
      backgroundColor={isOption ? optionColor : "transparent"}
      borderColor={getBorderColor()}
      onClick={handleOnClick}
      {...rest}
    >
      {map((item) => {
        return map((patt) => {
          if (patt === 0) {
            return (
              <Circle
                borderWidth="2px"
                borderStyle="solid"
                borderColor={color}
                height={["10px", "10px", "20px"]}
                width={["10px", "10px", "20px"]}
              />
            );
          }
          return (
            <Circle
              backgroundColor={color}
              height={["10px", "10px", "20px"]}
              width={["10px", "10px", "20px"]}
            />
          );
        }, item);
      }, array)}
    </Grid>
  );
}

export default Pattern;
