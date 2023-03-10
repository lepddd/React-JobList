import { createSignal, createRoot } from "solid-js";

function createFilter() {
  const [filters, setFilters] = createSignal([]);
  const clearFilters = () => setFilters([]);
  const removeFilter = (filter) =>
    setFilters((prev) => prev.filter((category) => category !== filter));
  const addFilter = (filter) => setFilters((prev) => [...prev, filter]);
  return { filters, clearFilters, removeFilter, addFilter };
}

export default createRoot(createFilter);
