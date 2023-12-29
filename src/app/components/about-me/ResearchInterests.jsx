import { Text, List } from "@mantine/core";
import { Books } from "tabler-icons-react";

const ResearchInterests = (props) => {
  const data = [
    [
      "Computer Vision",
      "Vision and auditory data is abundant yet hard to utilise without manual annotated efforts. The methods to tackle such issues by replacing this labelling effort with methods like data-generation, self-supervised and unsupervised clustering are very interesting to me.",
    ],
    [
      "Transformers",
      "Transformers enable technologies like LLMs to exist today which is at the center of attention. They are not limited to text and can be useful in a wide-variety of modalities, which interests me.",
    ],
    [
      "Deep Reinforcement Learning",
      "Success stories like AlphaGO hit close to my heart because of my passion for gaming and logical games like chess in general.",
    ],
    [
      "Federated Learning",
      "FL holds the promise of solving requirements of large datasets in modern neural networks by means of collaborative learning. It is going to be one of the key technologies in the world of growing smart devices with mobile computing and IOT.",
    ],
  ];
  return (
    <div>
      <List
        spacing="sm"
        icon={<Books strokeWidth={1} />}
        classNames={{ itemWrapper: "!items-start" }}
      >
        {data.map((item, index) => {
          return (
            <List.Item key={index}>
              <Text className="!text-lg !font-bold">{item[0]}</Text>
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

export default ResearchInterests;
