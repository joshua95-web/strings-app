import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
        <div>
        <div>
        <h1>Strings</h1>
        </div>
        <div>
            <Link href="/login" >Log In</Link>
        </div>
        <div>
          <Link href="/signup">Sign Up</Link>
        </div>
        </div>
    </main>
  );
}
