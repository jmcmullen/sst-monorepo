import { auth, login, logout } from "@sessions/auth";
import { Button } from "@sessions/ui/button";

export default async function Home() {
  const user = await auth();

  return (
    <div>
      <main className="mx-auto my-32 w-full max-w-sm">
        <ol>
          {user ? (
            <>
              Logged in as:
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </>
          ) : (
            <>Not logged in</>
          )}
        </ol>

        <div className="mt-10">
          {user ? (
            <form action={logout}>
              <Button variant="primary">Logout</Button>
            </form>
          ) : (
            <form action={login}>
              <Button variant="primary">Login with OpenAuth</Button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
