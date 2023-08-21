import React from "react";

export default function Home({ country }) {
  return (
    <div>
      {" "}
      {country.map((c) => (
        <React.Fragment key={c}>{c}</React.Fragment>
      ))}
    </div>
  );
}
