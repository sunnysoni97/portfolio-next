"use client";

import { Timeline, Divider, Text } from "@mantine/core";
import { MoodSmile } from "tabler-icons-react";

import CheckMobile from "@/app/components/common/CheckMobile";
import LoadOverviewData from "@/app/components/milestones/LoadOverviewData";

const getNumberIcon = (year) => {
	const firstDig = year.slice(-2, -1);
	const secondDig = year.slice(-1);

	return (
		<Text className="!font-bold !text-sm">{`${firstDig} ${secondDig}`}</Text>
	);
};

const TimelineOverview = (props) => {
	const isMobile = CheckMobile();
	const overviewData = LoadOverviewData();
	overviewData.sort((a, b) => {
		return parseInt(b.year) - parseInt(a.year);
	});

	return (
		<div className="overflow-y-scroll max-h-[64vh] px-2">
			<Timeline
				w={isMobile ? "100%" : "100%"}
				mx="auto"
				active={overviewData.length - 1}
				bulletSize={40}
				lineWidth={3}
				align="left"
				radius="xl"
				classNames={{
					itemTitle: "!font-bold text-lg",
				}}
				p="md"
				reverseActive={true}
			>
				<Timeline.Item
					bullet={<MoodSmile size={40} />}
					lineVariant="dotted"
					title="...Future is Loading..."
					classNames={{
						itemTitle: "!font-bold !italic opacity-50",
					}}
				></Timeline.Item>
				{overviewData.map((value, index) => {
					return (
						<Timeline.Item
							key={index}
							bullet={getNumberIcon(value.year)}
							title={value.title}
						>
							<Text className="!text-sm !font-bold !opacity-70">
								{value.year}
							</Text>
							<Divider mt={2} mb={4} />
							<Text>{value.desc}</Text>
						</Timeline.Item>
					);
				})}
			</Timeline>
		</div>
	);
};

export default TimelineOverview;
