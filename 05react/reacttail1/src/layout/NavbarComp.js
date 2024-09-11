import React from "react";

function NavbarComp() {
  return (
    <div className="bg-sb-500 py-3">
      <nav className="container mx-auto flex justify-between px-4 md:px-0 ">
        <h1>
          <a
            href="#"
            className="block h-full text-3xl flex justify-center items-center"
          >
            NIKE
          </a>
        </h1>

        <div className="hidden md:block">
          <ul className="flex">
            <li>
              <a
                className="px-4 py-2 block text-gray-100 hover:text-red-500 hover:bg-gray-100"
                href="#"
              >
                New
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 block text-gray-100 hover:text-red-500 hover:bg-gray-100"
                href="#"
              >
                Men
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 block text-gray-100 hover:text-red-500 hover:bg-gray-100"
                href="#"
              >
                Women
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 block text-gray-100 hover:text-red-500 hover:bg-gray-100"
                href="#"
              >
                Kids
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 block text-gray-100 hover:text-red-500 hover:bg-gray-100"
                href="#"
              >
                Sale
              </a>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">test</div>
      </nav>
    </div>
  );
}

export default NavbarComp;
