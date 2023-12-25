import { auth } from "../auth";

export const Session = async () => {
  const session = await auth();

  return (
    <div>
      <p>Welcome {session?.user?.name}!</p>
    </div>
  );
};
