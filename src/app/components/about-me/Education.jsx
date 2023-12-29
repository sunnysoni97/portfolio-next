"use client";

import { Divider, Text } from "@mantine/core";

import LoadEduData from "@/app/components/about-me/LoadData/LoadEduData";
import GetMonthStr from "@/app/components/common/GetMonthStr";

const EduBlock = ({ listItem, showGpa }) => {
  return (
    <div>
      <Text className="!font-bold">{listItem.title}</Text>
      <Text className="!font-bold">{listItem.subject}</Text>
      <Text>{listItem.instituition}</Text>
      <Text className="!text-sm">{listItem.location}</Text>
      {showGpa === true ? (
        <Text className="!text-sm !font-bold"> {`GPA : ${listItem.gpa}`}</Text>
      ) : null}
      <Text className="!text-sm !font-bold">{`${GetMonthStr(
        listItem.start_month
      )} ${listItem.start_year} - ${GetMonthStr(listItem.end_month)} ${
        listItem.end_year
      }`}</Text>
      <Divider my="md" w="5%" mx="auto" size="lg" />
    </div>
  );
};

const Education = (props) => {
  const edu_data = LoadEduData();

  if (edu_data == undefined) {
    return;
  }

  return (
    <div>
      {edu_data.map((item, index) => {
        return <EduBlock listItem={item} key={index} showGpa={false} />;
      })}
    </div>
  );
};

export default Education;
