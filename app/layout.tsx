import "../styles/global.css";
import Navbar from "./components/navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />

      <body className="overflow-hidden text-blk">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
