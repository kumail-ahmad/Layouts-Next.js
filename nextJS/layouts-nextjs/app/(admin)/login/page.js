import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function AdminLayout({ children }) {
  return (
    <>
      <div>Admin Log-in</div>
    </>
  );
}
export async function generateMetadata({ params }) {
  return {
    title: "AdminLogin",
  };
}
