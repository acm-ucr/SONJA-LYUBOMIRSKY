import { BOOKS } from "./Books";
import { BROADCAST } from "./Broadcast";
import { PAPERS } from "./Papers";
import { POPULAR_PRESS } from "./PopularPress";
import { PRINTS } from "./Print";
import { RECENT_PHD } from "./RecentPHD";
import { RESEARCH } from "./Research";
import { GrDocumentText } from "react-icons/gr";
import { IoBookOutline } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { FiMic } from "react-icons/fi";
import { GrArticle } from "react-icons/gr";

export const SECTIONS = {
  Research: [
    {
      title: "Papers and Publications",
      items: PAPERS,
      subTab: true,
      icon: <GrDocumentText />,
    },
    { title: "Books", items: BOOKS, subTab: true, icon: <IoBookOutline /> },
    { title: "Subjective Happiness Scale", items: POPULAR_PRESS },
  ],
  "Media Appearance": [
    { title: "TV & Radio", items: BROADCAST, subTab: true },
    { title: "Print", items: PRINTS, icon: <ImNewspaper /> },
    { title: "Blog", items: PRINTS, icon: <GrArticle /> },
    { title: "Past & Future Talks", items: PRINTS, icon: <FiMic /> },
  ],
  "PAW Lab": [
    { title: "Most Recent PHDs", items: RECENT_PHD },
    { title: "Lab", items: RESEARCH },
    { title: "Get Involved", items: PRINTS },
  ],
};

export const HEADER = {
  Research: [
    {
      link: "https://scholar.google.com/citations?user=CNFj4ZsAAAAJ&hl=en",
      text: "Selected Publications (with PDF)",
    },
    {
      link: "http://sonjalyubomirsky.com/subjective-happiness-scale-shs",
      text: "Subjective Happiness Scale",
    },
  ],
  "Media Appearance": [
    {
      text: "To schedule an interview please write to sonja@ucr.edu",
      link: "mailto:sonja@ucr.edu",
    },
  ],
};
