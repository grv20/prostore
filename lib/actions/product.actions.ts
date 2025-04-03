"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { cache } from "react";

// Get the latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}

// Get single product by slug
export const getProductBySlug = cache(async (slug: string) => {
  console.log("Fetching product from DB...");
  return await prisma.product.findFirst({
    where: { slug },
  });
});

export const revalidate = 120;
