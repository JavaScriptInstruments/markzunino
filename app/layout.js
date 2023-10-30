import "./globals.css";

import localFont from "next/font/local";

const myFont = localFont({
  src: "./ClashDisplay-Variable.ttf",
  display: "swap",
});

export const metadata = {
  title: "Mark Zunino",
  description: "Fine Artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
