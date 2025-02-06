import { useState, useMemo } from "react";

const useSortedProducts = (products) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedProducts = useMemo(() => {
    if (!sortConfig.key) return products || [];

    return [...(products || [])].sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      if (!isNaN(valueA) && !isNaN(valueB)) {
        return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
      }

      return sortConfig.direction === "asc"
        ? valueA
            .toString()
            .localeCompare(valueB.toString(), undefined, { numeric: true, sensitivity: "base" })
        : valueB
            .toString()
            .localeCompare(valueA.toString(), undefined, { numeric: true, sensitivity: "base" });
    });
  }, [products, sortConfig]);

  const handleSort = (key) => {
    const newDirection = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction: newDirection });
  };

  return { sortedProducts, handleSort, sortConfig };
};

export default useSortedProducts;