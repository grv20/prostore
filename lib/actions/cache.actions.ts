// src/lib/cache/product.cache.ts
import { cache } from "react";
import { getProductBySlug as fetchProductBySlug } from "@/lib/actions/product.actions";

export const getProductBySlug = cache(fetchProductBySlug);
