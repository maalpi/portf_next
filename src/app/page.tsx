import Image from "next/image";
import styles from "./page.module.css";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Particles />
      <h1>MateusPierre</h1>
    </main>
  );
}
