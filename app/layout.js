import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Le Pet Spa | Luxury Pet Grooming & Boutique – New York",
  description:
    "Le Pet Spa is New York's premier luxury pet boutique at 300 Rector Place. Expert grooming, wholesome nutrition, and premium pet supplies. Book your appointment today.",
  keywords: "pet spa New York, luxury pet grooming NYC, Le Pet Spa, pet boutique Manhattan, dog grooming Rector Place",
  openGraph: {
    title: "Le Pet Spa | Luxury Pet Grooming & Boutique – New York",
    description: "Your neighborhood pet store & much more. Expert grooming, premium nutrition, and haute pet supplies.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2D5A27",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
