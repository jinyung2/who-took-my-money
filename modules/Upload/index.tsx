"use client";
import { useAppDispatch, useAppSelector, useAppStore } from "@/redux/hooks";
import { addData } from "@/redux/slices/amazonData";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";

const MAX_FILE_SIZE = 1048576; // 1MB
const fr = new FileReader();

const Upload = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const fileUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files == null || files.length <= 0) return;
    const csvFile = files[0];
    if (csvFile.size > MAX_FILE_SIZE) return;
    fr.onload = (e) => {
      if (e.target == null || typeof e.target.result !== "string") return;
      const csvTextContent = e.target.result;
      dispatch(addData(csvTextContent));
      router.push("spending/analysis");
    };
    fr.readAsText(csvFile);
  };

  return (
    <>
      <label
        htmlFor="tableUpload"
        className="btn hover:scale-105 transition-all"
      >
        Upload CSV
      </label>
      <input
        id="tableUpload"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={fileUploadHandler}
      />
    </>
  );
};

export default Upload;
