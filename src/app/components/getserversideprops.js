export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return {
    props: { data }, // This will be passed to the page as props
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Server-Side Rendered Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
