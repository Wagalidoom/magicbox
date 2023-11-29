import { ThemeProvider } from "../contexts/ThemeContext";
import Navbar from "@/components/Navbar";

export default function Home() {
  
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex min-h-full flex-col items-center justify-between bg-background-light dark:bg-background-dark">
        <p>Landing</p>
      </main>
    </ThemeProvider>
  );
}
