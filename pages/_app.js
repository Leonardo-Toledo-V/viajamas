import "@/styles/globals.css";
import localFont from "next/font/local";
    const Avenir = localFont({
      src: "../assets/fonts/Avenir-Book.ttf",
      variable: "--font-avenir",
    });
    const Poppins = localFont({
      src: "../assets/fonts/Poppins-Bold_0.ttf",
      variable: "--font-poppins",
    });

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${Avenir.variable} font-avenir ${Poppins.variable} font-poppins`}
    >
      <Component {...pageProps} />
    </main>
  );
}
