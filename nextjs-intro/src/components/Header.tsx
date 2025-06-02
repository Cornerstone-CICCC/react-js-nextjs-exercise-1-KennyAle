import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-red-900">
      <nav className="w-full">
        <menu className="w-full flex justify-around items-center p-3">
          <li className="underline">
            <Link href="/">Home</Link>
          </li>
          <li className="underline">
            <Link href="/services">Services</Link>
          </li>
          <li className="underline">
            <Link href="/about">About Us</Link>
          </li>
          <li className="underline">
            <Link href="/contact">Contact Us</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
