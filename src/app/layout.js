import "./globals.css";
import Footer from "./components/footer";
import { heliosAntique } from "../fonts/fonts.js";

export const metadata = {
  metadataBase: new URL("https://connextup.it"),

  title: {
    default: "ConnextUp | Lead Generation, Marketing & Business Growth",
    template: "%s | ConnextUp",
  },

  description:
    "ConnextUp helps businesses grow through lead generation, digital marketing, automation, strategic consulting and data-driven growth solutions.",

  keywords: [
    "ConnextUp",
    "Lead Generation",
    "Digital Marketing",
    "Marketing Agency",
    "Business Growth",
    "SEO",
    "Performance Marketing",
    "Marketing Automation",
    "Sales Funnel",
    "Brand Strategy",
    "Growth Marketing",
    "Customer Acquisition",
    "Online Advertising",
    "Digital Agency Italy",
  ],

  applicationName: "ConnextUp",

  authors: [
    {
      name: "ConnextUp",
      url: "https://connextup.it",
    },
  ],

  creator: "ConnextUp",
  publisher: "ConnextUp",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://connextup.it",
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://connextup.it",
    siteName: "ConnextUp",
    title: "ConnextUp | Lead Generation, Marketing & Business Growth",
    description:
      "Scale your business with lead generation, automation, performance marketing and growth strategies.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ConnextUp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ConnextUp | Lead Generation, Marketing & Business Growth",
    description:
      "Digital growth solutions focused on lead generation, automation and marketing performance.",
    images: ["/logo.png"],
  },

  category: "Business",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${heliosAntique.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full flex flex-col font-heliosAntique">
        {children}
        <Footer />
      </body>
    </html>
  );
}
