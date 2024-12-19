import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadta = {
  title: "admins page",
  description:
    "admins page : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae rerum aperiam iusto veritatis necessitatibus aliquam temporibus, magni omnis optio. Dolorem consequatur voluptas consequuntur quas vero laudantium quisquam itaque nostrum consectetur. ",
};
export default function AdminLayout({ children }) {
  return (
    <>
      <span>Admin Navbar top</span> {children}
      <span>Admins Footer</span>
    </>
  );
}
