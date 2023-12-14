import {
  Home,
  School,
  Trophy,
  SourceCode,
  MessageChatbot,
} from "tabler-icons-react";

import nextConfig from "../../next.config";

const routeBase = nextConfig.basePath;
const routeURIList = ["/", "/about-me", "/milestones", "/projects", "/contact"];
const routeNameList = ["Home", "About Me", "Milestones", "Projects", "Contact"];
const routeIconList = [Home, School, Trophy, SourceCode, MessageChatbot];

export { routeURIList, routeNameList, routeIconList, routeBase };
