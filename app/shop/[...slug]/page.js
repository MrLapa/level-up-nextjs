export default function Shop({ params }) {
  return <h1>{`Shop slugs: ${params.slug.join(",")}`}</h1>;
}
