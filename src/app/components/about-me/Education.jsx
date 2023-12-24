import { Text } from "@mantine/core";

const Education = (props) => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div style={{ zIndex: 9999 }}>
      <Text> {loremIpsum} </Text>
      <Text> {loremIpsum} </Text>
      <Text> {loremIpsum} </Text>
    </div>
  );
};

export default Education;
