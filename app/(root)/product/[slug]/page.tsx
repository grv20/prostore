import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImages from "@/components/shared/product/product-images";
import { Card, CardContent } from "@/components/ui/card";
import {
  getProductBySlug,
  getLatestProducts,
} from "@/lib/actions/product.actions";
import { Badge } from "@/components/ui/badge";
// import AddToCart from "@/components/shared/product/add-to-cart";

export const revalidate = 120;

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;

  const { slug } = params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images Column */}
          <div className="col-span-2">
            {/* Add Images */}{" "}
            <div className="col-span-2">
              <ProductImages images={product.images} />
            </div>
          </div>

          {/* Details Column */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} reviews
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p>Description:</p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* Action Column */}
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In stock</Badge>
                  ) : (
                    <Badge variant="destructive">Unavailable</Badge>
                  )}
                </div>
                {/* {product.stock > 0 && (
                  <div className=" flex-center">
                    <AddToCart
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        qty: 1,
                        image: product.images![0],
                      }}
                    />
                  </div>
                )} */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;

export async function generateStaticParams() {
  const products = await getLatestProducts();
  console.log(
    "Generating static params for products",
    products.map((product) => ({ slug: product.slug }))
  );
  return products.map((product) => ({
    slug: product.slug,
  }));
}
