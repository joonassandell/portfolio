import { SmoothScrollProvider, SmoothScrollContext } from "../lib/SmoothScroll";
import Home from "../containers/Template/Home";
import Title from "../components/Title";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <Title />
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
