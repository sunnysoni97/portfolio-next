const LoadProjects = () => {
  let project_list;

  try {
    project_list = require("@/app/projects/_posts/project_list.json");
  } catch (error) {
    project_list = [];
  }

  return project_list;
};

export default LoadProjects;
