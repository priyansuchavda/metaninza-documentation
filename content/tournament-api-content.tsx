import React from "react";
import { ContentRecord } from "./types";

export const tournamentApiContent: ContentRecord = {
  "tournaments-api-overview": {
    title: "Tournaments - Overview",
    description: "Overview of tournament APIs and flows.",
    sections: [
      {
        heading: "Overview",
        content: (
          <>
            <p>
              This page documents tournament APIs including rounds, groups, matches, and standings. Rich content was temporarily simplified to fix a build issue.
            </p>
          </>
        ),
      },
    ],
  },
};

export default tournamentApiContent;
