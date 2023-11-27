import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <p>Landing</p>
      </main>
    </>
  );
}
