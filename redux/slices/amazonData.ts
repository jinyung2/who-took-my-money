import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { parse } from "csv-parse/sync";
import dayjs from "dayjs";

type AmazonDataState = {
  data: Array<[Date, number]>;
};

const initialData: AmazonDataState = {
  data: [],
};

/**
 * helper function that strips all unused columns and invalid rows from the csv file
 * @param csvFileContent stringified csv file content from amazon retail order history
 */
const processAmazonCSV = (csvFileContent: string): Array<[Date, number]> => {
  let totalOwedIndex = 0;
  let orderDateIndex = 0;
  const records = parse(csvFileContent);

  const filteredRecords = records
    .map((record: Array<string>, i: number) => {
      if (i === 0) {
        totalOwedIndex = record.findIndex((value) => value === "Total Owed");
        orderDateIndex = record.findIndex((value) => value === "Order Date");
        return null;
      }
      if (record[orderDateIndex] === "Not Available") return null;
      return [record[orderDateIndex], parseFloat(record[totalOwedIndex])];
    })
    .filter((e: Array<string> | null) => e);

  return filteredRecords;
};

const amazonDataSlice = createSlice({
  name: "amazonData",
  initialState: initialData,
  reducers: {
    addData: (state: AmazonDataState, action: PayloadAction<string>) => {
      const amazonDataArr = processAmazonCSV(action.payload);
      return {
        ...state,
        data: amazonDataArr,
      };
    },
    removeData: (state: AmazonDataState, action: PayloadAction<void>) => {
      return { ...state, data: [] };
    },
  },
});

export const { addData, removeData } = amazonDataSlice.actions;

export default amazonDataSlice.reducer;
