import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}