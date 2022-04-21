import * as React from "react";

import image from "./contest.jpeg";
export default function Contest() {
  return (
    <div>
      <h2>Contest</h2>
      <img src={image} alt="vacation picture" />
      <p>
        This summer, Bravado is holding sweepstakes to give away three
        vacations! You can enter for a chance to win a trip for two to Barcalona
        or a trip for two to Rome or evaeb a chance to win a €3,500 voucher for
        a trip to anywhere you choose.
      </p>
      <p>
        For the chance to enter please answer the following:{" "}
        <h4>Which of the following is not an international organisation?</h4>
        <spam>
          * you must be over the age of 18 to enter and its one entry per person
        </spam>
      </p>
    </div>
  );
}
