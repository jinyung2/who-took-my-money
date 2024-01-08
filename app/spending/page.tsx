"use client";
import Accordion from "@/components/accordion";
import DataPrivacy from "@/modules/DataPrivacy";
import HowTo from "@/modules/HowTo";
import Upload from "@/modules/Upload";
import React, { useState } from "react";

const Spending = () => {
  const [accordionValue, setAccordionValue] = useState<string[] | undefined>(
    []
  );
  return (
    <article className="w-full max-w-screen-xl">
      <section className="flex h-40 items-center justify-between gap-16">
        <div className="flex-1">
          <p>
            Upload your Amazon Order History CSV file to get it analyzed for
            free!
          </p>
          <a
            className="underline cursor-pointer"
            onClick={() => setAccordionValue(["how-to"])}
          >
            Not sure how?
          </a>
          <br />
          <a
            className="underline cursor-pointer"
            onClick={() => setAccordionValue(["data-privacy"])}
          >
            Worried about your data?
          </a>
        </div>
        <div>
          <Upload />
        </div>
      </section>
      <Accordion
        onValueChange={(value) => setAccordionValue(value)}
        value={accordionValue}
        items={[
          {
            value: "how-to",
            title: "How do I find my Amazon Order History CSV file?",
            children: <HowTo />,
          },
          {
            value: "data-privacy",
            title: "How do you keep my data private and safe?",
            children: <DataPrivacy />,
          },
        ]}
      />
    </article>
  );
};

export default Spending;
