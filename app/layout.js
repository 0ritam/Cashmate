import { Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter  = Inter({subsets:["latin"]})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cashmate",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${inter.className}`}
      >
        
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* footer */}
      </body>
    </html>

    </ClerkProvider>
    
  );
}
