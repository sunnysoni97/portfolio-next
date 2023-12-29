import { Text, List } from "@mantine/core";
import { MoodSmileBeam } from "tabler-icons-react";

const Hobbies = (props) => {
  const data = [
    "I like listening to a wide variety of modern and classical music as well as singing covers to some of them.",
    "I used to be a semi-professional CSGO player and regularly follow a lot of E-Sports titles and events going around the world.",
    "I like enjoying good stories on screen, whether at home or cinema sometimes as well. I have a little bias for asian entertainment culture in this regard, since I watch their works a lot lately.",
    "I like travelling and learning about different cultures and their language.",
    "Football is my favorite physical sport when it comes to occassional play and watch.",
  ];
  return (
    <div>
      <List
        spacing="sm"
        icon={<MoodSmileBeam strokeWidth={1.5} />}
        classNames={{ itemWrapper: "!items-start" }}
      >
        {data.map((item, index) => {
          return (
            <List.Item key={index}>
              <Text>{item}</Text>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default Hobbies;
