import {
  SmoothScrollProvider,
  SmoothScrollContext,
} from "../../lib/SmoothScroll";
import Oras from "../../containers/Template/Oras";
import Title from "../../components/Title";

export default function OrasPage() {
  return (
    <SmoothScrollProvider>
      <Title title="Oras" />
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
