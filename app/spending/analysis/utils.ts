import dayjs from "dayjs";

export const MONTH_ARR = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTH_ABBR_ARR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getSpendingByYearByMonth = (amazonData: Array<[Date, number]>) => {
  const yearMonthAmount = amazonData.map(([date, amount]) => {
    const dayjsObj = dayjs(date);
    if (dayjsObj.year() === 2024) console.log(dayjsObj);
    return { year: dayjsObj.year(), month: dayjsObj.month(), amount };
  });

  let startingYear = Infinity;
  const totalByYearByMonth: { [year: string]: { [month: string]: number } } =
    yearMonthAmount.reduce((p: any, c) => {
      const { year, month, amount } = c;
      startingYear = Math.min(startingYear, year);
      if (p[year] == null) p[year] = {};
      const yearObj = p[year];
      if (yearObj[month] == null) yearObj[month] = 0;
      yearObj[month] += amount;
      return p;
    }, {});

  // return lowest year
  // and the object, and iterate and handle empty years in the UI? or build and object here?
  return {
    startingYear,
    totalByYearByMonth,
  };
};

export const getTotalSpendingByYear = (amazonData: Array<[Date, number]>) => {
  let startingYear = Infinity;
  const totalByYear: { [year: string]: number } = amazonData.reduce(
    (p: any, c) => {
      const year = dayjs(c[0]).year();
      startingYear = Math.min(startingYear, year);
      const amount = c[1];
      if (p[year] == null) p[year] = 0;
      p[year] += amount;
      return p;
    },
    {}
  );

  console.log(totalByYear);

  return { startingYear, totalByYear };
};

export const getTotalSpendingAllTime = (amazonData: Array<[Date, number]>) => {
  return amazonData.reduce((p: number, c) => p + c[1], 0);
};

export const generateYearsArray = (startingYear: number) => {
  const years = [];
  for (let i = startingYear; i <= dayjs().year(); i++) {
    years.push(i);
  }
  return years;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatAsDollar = (amount: number) =>
  currencyFormatter.format(amount);
