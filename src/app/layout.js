import { Markazi_Text } from "next/font/google";
import "./globals.css";
import localFont from '@next/font/local'
import ThemeProvider from "@/components/ThemeProvider";
import FaviconIcon from '@/public/favicon.png'
import Script from "next/script";

// const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Profile dashboard",
  description: "single page profile dashboard",
  icons: {
    icon: FaviconIcon.src,
  }, 
};

const markazi_text = Markazi_Text({subsets: ["arabic", "latin"], weight: ["400", "500", "600", "700"], display: 'swap'})

const helv = localFont({
  src: [
    {
      path: '../../public/helvetica/HelveticaNeuelroman.ttf',
      weight: '400'
    },
    {
      path: '../../public/helvetica/HelveticaNeuellight.ttf',
      weight: '500'
    },
    {
      path: '../../public/helvetica/HekveticaNeuelbold.ttf',
      weight: '600'
    },
  ],
  display: 'swap',
  variable: '--font-helv'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      {/* <head>
        <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrambleTextPlugin3.min.js" />
        <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js" />
      </head> */}
      <body 
      // className={`${markazi_text.className}`}
      className={`${helv.variable} font-sans`}
      >
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
