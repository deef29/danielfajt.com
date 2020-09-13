import React from "react";

export const gitUrlGen = (gitUrl) => {
  return gitUrl ? (
    <a href={gitUrl} target="_blank" rel="noopener noreferrer">
      View repository
    </a>
  ) : (
    "Unfortunately, repository has to be private"
  );
};
