const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
}

async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
}

export const api = {
  getCategories: () => apiGet("/catalog/categories"),
  getProducts: (category) =>
    apiGet(`/catalog/products?category=${encodeURIComponent(category)}`),
  getRegions: (category, product) =>
    apiGet(
      `/catalog/regions?category=${encodeURIComponent(category)}&product=${encodeURIComponent(product)}`
    ),
  analyze: (payload) => apiPost("/analyze", payload),
};
