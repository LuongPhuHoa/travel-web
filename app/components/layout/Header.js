import Link from "next/link";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <section className="bg-center bg-no-repeat jumbotron pl-20">
        <nav className="bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">Travel</div>
              <ul className="flex items-center space-x-8">
                <li>Home</li>
                <li>About</li>
                <ul>Services</ul>
                <li>Upcoming Packages</li>
              </ul>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-4 rounded">
                Get in touch
              </button>
            </div>
          </div>
        </nav>
        <div className="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
          <h1 className="title mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            No matter where you’re going to, we’ll take you there
          </h1>

          <nav className="subnav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-3">
                <ul className="flex items-center space-x-10 self-center pl-6">
                  <li>Where to ?</li>
                  <hr></hr>
                  <ul>Travel Type</ul>
                  <hr></hr>
                  <ul>Duration</ul>
                  <hr></hr>
                </ul>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-4 rounded">
                  Get in touch
                </button>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Header;
