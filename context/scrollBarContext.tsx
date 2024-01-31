import { createContext, useContext } from "react";
import { Scrollbar } from "smooth-scrollbar/scrollbar";

const ScrollContext = createContext<Scrollbar | null>(null);

export const useScrollContext = () => useContext(ScrollContext);

export default ScrollContext;
