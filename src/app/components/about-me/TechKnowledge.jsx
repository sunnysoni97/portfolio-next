import { Text, List } from "@mantine/core";
import { CodePlus } from "tabler-icons-react";

const TechKnowledge = (props) => {
  const data = [
    [
      "Deep Learning",
      "Love to play with Neural Networks and try new cutting-edge concepts to solve challenges.\nProficient with mainstream ML frameworks (eg. PyTorch, Numpy, Pandas) and fundamental theories of ML to solve problems using AI.",
    ],
    [
      "Full Stack Software Development",
      "Experienced programmer with the ability to design both frontend UI and backend API logic for projects on different scales.\nQuick to learn new frameworks and languages if the need arises.",
    ],
    [
      "Cloud Computing",
      "Familiar with working on distributed computing systems such as Azure platform and SSH driven High Powered Computing.",
    ],
    [
      "DevOps",
      "Used to industrial project management concepts such as GIT and Ticketing system.\nLong-term linux user with all-rounded knowledge of computer software and systems.",
    ],
  ];

  return (
    <div>
      <List
        spacing="sm"
        icon={<CodePlus strokeWidth={2} />}
        classNames={{ itemWrapper: "!items-start" }}
      >
        {data.map((item, index) => {
          return (
            <List.Item key={index}>
              <Text className="!text-lg !font-bold">{`${item[0]}`}</Text>
              <Text
                mt="0.5em"
                className="text-justify"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {item[1]}
              </Text>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default TechKnowledge;
