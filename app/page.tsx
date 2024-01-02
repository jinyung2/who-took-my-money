import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="flex justify-center bg-gradient-to-r from-black from-50% to-white to-50% w-full">
        <div className="flex justify-center bg-black dark:bg-white w-full max-w-screen-xl">
          <div className="flex h-96 w-full">
            <div className="flex justify-end items-center flex-1 w-full bg-white dark:bg-black pt-2">
              <h1 className="uppercase  text-8xl font-thin italic tracking-tighter text-black dark:text-white max-w-xl">
                Who took my <span className="font-semibold">money</span>?
              </h1>
            </div>
            <div className="hero-clip bg-white dark:bg-black w-48 md:w-32" />
            <h1 className="uppercase text-8xl font-bold tracking-tighter text-white dark:text-black flex-1 self-end mr-4 pb-2 text-right">
              Amazon.
            </h1>
          </div>
        </div>
      </section>
      <section className="flex py-24 text-xl max-w-screen-xl">
        <div className="flex-1">
          <p className="leading-8">
            Within Amazon, everyone&apos;s favorite e-commerce store, there is
            no way to break down your spending and generate reports and analysis
            of your orders.
          </p>
          <p className="mt-4 mb-8">
            <strong>Coincidence?</strong> I think not!
          </p>
          <Link href={"/spending"}>
            <Button>😭 Expose my spending {"->"}</Button>
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            src="/chart.svg"
            alt={""}
            width={400}
            height={400}
            className="bg-white dark:bg-gray-900 p-4"
          />
        </div>
      </section>
    </main>
  );
}
