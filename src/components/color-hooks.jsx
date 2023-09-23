import React, {useContext, createContext, useState} from "react";
import colorData from "./data/color-data.json";
import { v4 } from "uuid";

const ColorContext = createContext();
const useColors = () => useContext(ColorContext);
