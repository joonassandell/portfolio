import { SmoothScrollProvider, SmoothScrollContext } from "../lib/SmoothScroll";
import Home from "../src/pages/Home.page.js";

export default function HomePage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Home />
    </SmoothScrollProvider>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      navTitle: "Selected works",
    },
  };
}
