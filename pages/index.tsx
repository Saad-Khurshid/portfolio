import Head from "next/head";
import About from "../components/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/portfolio/Experience";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Saad Khurshid - Full Stack Web Developer</title>
        <meta
          name="keywords"
          content="Saad Khurshid, Portfolio, Full Stack Developer, JavaScript"
        />
      </Head>
      <div
      className = "w-full h-full"
      >
        <About />
        <Experience />
        <Services />
        <Contact />
      </div>
    </div>
  );
}
