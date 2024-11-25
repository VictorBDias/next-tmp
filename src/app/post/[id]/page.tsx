interface Params {
  id: string;
}

export default async function PostIdPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>Post: {id}</h1>
    </main>
  );
}
