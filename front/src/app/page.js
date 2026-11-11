import NavBar from "./components/NavBar/NavBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
      <h1 className="display-1 border-bottom text-center">Home</h1>
      </div>
    </div>
  );
}
