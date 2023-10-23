import React from "react";
import { InlineWidget } from "react-calendly";

const link = "https://calendly.com/rkdigitaldrive/free-consultation";

export default function index() {
  return (
    <div className="">
      hello world
      <InlineWidget url={link} />
    </div>
  );
}
