import { Text, List } from "@mantine/core";
import { Book2 } from "tabler-icons-react";

const Publications = (props) => {
	const data = [
		{
			authors: "S. Soni, A. Saeed and Y. M. Asano",
			title: "Federated Learning with a Single Shared Image",
			year: "2024",
			conference:
				"2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), Seattle, WA, USA",
			page_reference: "pp. 7782-7790",
			doi: "10.1109/CVPRW63382.2024.00774",
		},
	];
	return (
		<div>
			<List
				spacing="sm"
				icon={<Book2 strokeWidth={1.5} />}
				classNames={{ itemWrapper: "!items-start" }}
			>
				{data.map((item, index) => {
					return (
						<List.Item key={index}>
							<Text>
								{" "}
								{item.authors}, &ldquo;{item.title},&rdquo;{" "}
								{item.conference}, {item.page_reference},{" "}
								<a href={`https://doi.org/${item.doi}`}>
									doi: {item.doi}
								</a>
							</Text>
						</List.Item>
					);
				})}
			</List>
		</div>
	);
};

export default Publications;
