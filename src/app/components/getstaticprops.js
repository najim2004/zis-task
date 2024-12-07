export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return {
    props: { data }, // Will be passed to the page
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Static Generated Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
