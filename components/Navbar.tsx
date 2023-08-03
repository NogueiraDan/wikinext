import Link from "next/link";
import Search from '@/components/Search';


export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-2 flex justify-between flex-col md:flex-row sticky top-0">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">WikiRocket!</Link>
      </h1>
      <Search/>
    </nav>
  );
}

// Anotação: 1 unidade no Tailwind equivale a 0.25rem CSS.

