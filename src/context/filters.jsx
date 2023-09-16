import { createContext, useState } from "react";

// 1. Create a context => este es el que tenemos que consumir
export const FilterContext = createContext();

// 2. Create a provider => Este es el que nos provee de acceso a los datos
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
