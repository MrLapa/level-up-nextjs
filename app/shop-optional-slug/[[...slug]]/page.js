export default function ShopOptionalSlug({ params }) {
  return <h1>{`Shop optional slugs: ${params.slug?.join(",")}`}</h1>;
}
