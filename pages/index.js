import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "jeffd23" },
        }}
      >
        <a>Hanru's profile</a>
      </Link>
      <Loader show />
      <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
    </div>
  );
}
