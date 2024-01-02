import Accordion from "@/components/accordion";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type HowToProps = {};
const HowTo: React.FC<HowToProps> = () => {
  return (
    <>
      <section className="my-4">
        <p className="mb-4">
          <strong>Step 1:</strong> Log into your Amazon account and locate the
          Accounts section.
        </p>
        <Image
          src={"/how-to/step-1.png"}
          alt={"Amazon Accounts Tab"}
          width={400}
          height={400}
        />
      </section>
      <section>
        <p className="mb-4">
          <strong>Step 2:</strong> Scroll down until you see the &quot;Data and
          Privacy&quot; section and click &quot;Request Your Information&quot;.
        </p>
        <Image
          src={"/how-to/step-2.png"}
          alt={"Amazon Data and Privacy"}
          width={400}
          height={400}
        />
      </section>
      <section>
        <p className="mb-4">
          <strong>Step 3:</strong> In the dropdown, select &quot;Order
          Data&quot; and click &quot;Submit Request&quot;.
        </p>
        <Image
          src={"/how-to/step-3.png"}
          alt={"Amazon Request Order Data"}
          width={600}
          height={400}
        />
      </section>
      <section>
        <p className="mb-4">
          <strong>Step 4:</strong> Amazon will send you a confirmation link to
          your email. After confirming wait until you receive a follow up email
          with the contents of your requested data in a .zip file.
        </p>
        <Image
          src={"/how-to/step-4.png"}
          alt={"Amazon Confirmation"}
          width={600}
          height={400}
        />
      </section>
      <section>
        <p className="mb-4">
          <strong>Step 5:</strong> Once you receive the email with the .zip
          file, download and extract and navigate to the Retail.OrderHistory
          file. This is the CSV file you need!
        </p>
        <Image
          src={"/how-to/step-5.png"}
          alt={"Amazon Order History"}
          width={600}
          height={400}
        />
      </section>
    </>
  );
};

export default HowTo;
