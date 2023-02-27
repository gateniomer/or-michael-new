import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import AdBoard from "@/components/AdBoard";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  console.log(data);
  return (
    <main>
      <AdBoard />
    </main>
  );
}
