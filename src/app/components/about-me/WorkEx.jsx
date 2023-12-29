import { Text, Divider } from "@mantine/core";

import LoadWorkEx from "@/app/components/about-me/LoadData/LoadWorkEx";
import GetMonthStr from "@/app/components/common/GetMonthStr";

const WorkExEntry = ({ listItem }) => {
  return (
    <div>
      <Text className="!font-bold !text-lg" display="inline">
        {listItem.title}
      </Text>
      <Text className="!text-lg" display="inline">
        {" "}
        <small>@</small> {listItem.employer}
      </Text>
      <Text
        className="!text-sm !font-bold opacity-70"
        my="0.5em"
      >{`${GetMonthStr(listItem.start_month)} ${
        listItem.start_year
      } - ${GetMonthStr(listItem.end_month)} ${listItem.end_year}`}</Text>
      <br />
      <Text className="text-justify">{listItem.desc}</Text>
      <Divider my="md" w="5%" mx="auto" size="lg" />
    </div>
  );
};

const WorkEx = (props) => {
  const workexList = LoadWorkEx();

  if (workexList === undefined) {
    return;
  }

  return (
    <div>
      {workexList.map((item, index) => {
        return <WorkExEntry listItem={item} key={index} />;
      })}
    </div>
  );
};

export default WorkEx;
