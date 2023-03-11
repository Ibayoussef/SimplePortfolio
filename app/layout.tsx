import "../styles/global.css";
import Navbar from "./components/navbar";
import { LayoutProps } from "./interfaces/LayoutProps";
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <head />

      <body className="overflow-hidden w-full text-blk bg-primary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
