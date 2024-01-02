import React from "react";

const DataPrivacy = () => {
  return (
    <section>
      <p className="mb-4">
        Most applications like this that handle data does the processing on the
        server layer. This would open up the possibility of an application
        saving whatever data you have uploaded and using it however they want
        (or according to TOS? I don&apos;t know I am not a lawyer.)
      </p>
      <div>
        <p>
          This application however is simple by design and runs entirely on your
          browser (for now?):
        </p>
        <ol type="1" className="list-decimal pl-6">
          <li>
            You upload a file, and it strips away all columns that it will not
            need. fyi, it only uses &quot;Total Owed&quot; and &quot;Order
            Date&quot;.
          </li>
          <li>
            This data is actually stored in your <strong>browser</strong>. You
            can access it by opening up your browser&apos;s developer tools (F12
            in chrome, or right click Inspect), going to the Application Tab,
            expanding the Local Storage dropdown, and clicking the current
            website for `amazonOrderHistoryData`.
          </li>
          <li>
            The application simply reads from the data stored in <em>your</em>{" "}
            browser and processes it using your own compute power. It never gets
            sent to any server, nor stored in any database (for now?).
          </li>
        </ol>
      </div>
    </section>
  );
};

export default DataPrivacy;
