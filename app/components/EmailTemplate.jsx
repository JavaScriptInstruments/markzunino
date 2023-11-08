import * as React from "react";

export const EmailTemplate = ({ name, content }) => (
  <div>
    <span>
      <strong>{name}</strong> sent a message saying:
    </span>
    <br />
    <br />
    <span>{content}</span>
  </div>
);
