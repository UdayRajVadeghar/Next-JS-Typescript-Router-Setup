import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-14 bg-blue-300 p-3">
      <div className="p-2 text-2xl w-1/2">
        <Link href="/">
          <div>App Routing</div>
        </Link>
      </div>

      <div>
        <ul className="flex">
          <Link href="/home">
            <li className="text-2xl p-2">Home</li>
          </Link>
          <Link href="/dashboard">
            <li className=" text-2xl p-2">Dashboard</li>
          </Link>
          <Link href="/contact">
            <li className=" text-2xl p-2">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
