export const filters = [
  { name: "price", options: ["$", "$$", "$$$"] },
  { name: "distance", options: ["<1", "<2", "<4"] },
  { name: "categories", options: ["wraps", "bowls", "sushi", "salads"] },
  { name: "rating", options: ["****", "***", "**", "*"] }
];
export function getCategoryOptions() {
  return getFilterByName("category").options;
}

export function getFilterByName(name) {
  return filters.find(filter => filter.name === name);
}
