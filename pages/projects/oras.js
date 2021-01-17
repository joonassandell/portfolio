import {
  SmoothScrollProvider,
  SmoothScrollContext,
} from "../../lib/SmoothScroll";
import Oras from "../../src/pages/Oras.page.js";

export default function OrasPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Oras />
    </SmoothScrollProvider>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      navTitle: "Oras",
    },
  };
}
