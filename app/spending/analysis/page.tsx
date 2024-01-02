"use client";
import { useAppSelector } from "@/redux/hooks";
import React, { Fragment, useMemo } from "react";
import {
  MONTH_ARR,
  formatAsDollar,
  generateYearsArray,
  getSpendingByYearByMonth,
  getTotalSpendingAllTime,
  getTotalSpendingByYear,
} from "./utils";

const SpendingAnalysis = () => {
  const amazonData = useAppSelector((state) => state.amazonData.data);
  const spendingByYearByMonth = getSpendingByYearByMonth(amazonData);
  const spendingByYear = getTotalSpendingByYear(amazonData);
  const totalSpending = getTotalSpendingAllTime(amazonData);

  return (
    <section>
      <div>
        {generateYearsArray(spendingByYearByMonth.startingYear).map((year) => (
          <>
            {year}
            <br />
            {MONTH_ARR.map((month, i) => {
              const spendByMonth = formatAsDollar(
                spendingByYearByMonth.totalByYearByMonth?.[year]?.[i] ?? 0
              );
              return (
                <Fragment key={month}>
                  {month} - {spendByMonth}{" "}
                </Fragment>
              );
            })}
            <br />
          </>
        ))}
      </div>
      <div>
        {generateYearsArray(spendingByYear.startingYear).map((year) => (
          <Fragment key={year}>
            {year} -{" "}
            {formatAsDollar(spendingByYear.totalByYear[year.toString()] ?? 0)}
            <br />
          </Fragment>
        ))}
      </div>
      <div>Total: {formatAsDollar(totalSpending)}</div>
    </section>
  );
};

export default SpendingAnalysis;
