import { BOOKS } from "./Books";
import { BROADCAST } from "./Broadcast";
import { PAPERS } from "./Papers";
import { POPULAR_PRESS } from "./PopularPress";
import { PRINTS } from "./Print";
import { UNDER_REVIEW } from "./UpderReview";

export const SECTIONS = {
  publications: [
    { title: "Books", items: BOOKS },
    { title: "Publications", items: PAPERS },
    { title: "Under Review", items: UNDER_REVIEW },
    { title: "Op-Eds/Popular Press", items: POPULAR_PRESS },
  ],
  medias: [
    { title: "Sample National Broadcast Media", items: BROADCAST },
    { title: "Links To Print Coverage", items: PRINTS },
  ],
};
