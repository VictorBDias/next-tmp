interface Params {
  user: string;
}

export default async function ProfileUserPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { user } = await params;

  return (
    <main>
      <h1>Perfil: {user}</h1>
    </main>
  );
}
