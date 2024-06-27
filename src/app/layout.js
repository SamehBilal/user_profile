import { Markazi_Text } from "next/font/google";
import "./globals.css";
import localFont from '@next/font/local'
import ThemeProvider from "@/components/ThemeProvider";

// const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Profile dashboard",
  description: "single page profile dashboard",
};

const markazi_text = Markazi_Text({subsets: ["arabic", "latin"], weight: ["400", "500", "600", "700"]})

const helv = localFont({
  src: [
    {
      path: '../../public/helvetica-neue-5/HelveticaNeueUltraLight.otf',
      weight: '100'
    },
    {
      path: '../../public/helvetica-neue-5/HelveticaNeueLight.otf',
      weight: '200'
    },
    {
      path: '../../public/helvetica-neue-5/HelveticaNeueThin.otf',
      weight: '300'
    },
    {
      path: '../../public/helvetica-neue-5/HelveticaNeueMedium.otf',
      weight: '400'
    },
    {
      path: '../../public/helvetica-neue-5/HelveticaNeueHeavy.otf',
      weight: '500'
    },
    {
      path: '../../public/helvetica-neue-5/HelveticaNeueBold.otf',
      weight: '600'
    },
    {
      path: '../../public/helvetica-neue-5/HelveticaNeueBlack.otf',
      weight: '900'
    }
  ],
  variable: '--font-helv'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body 
      className={`${markazi_text.className}`}
      // className={`${helv.variable} font-sans`}
      >
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
