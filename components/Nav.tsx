import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const linkStyle =
  "ml-2 text-xl text-white text-right hover:scale-125 hover:text-gray-800 hover:duration-500 ease-in-out transform transition ";
const menuLinkStyle =
  "mt-12 pl-4 text-xl w-min text-white hover:scale-125 hover:text-gray-800 hover:duration-500 ease-in-out transform transition ";
const activeLinkStyle = " text-gray-800 underline";
const navStyleDef =
  " bg-primary flex items-center px-2 py-4 sm:px-4 sm:py-8 lg:px-10 sticky top-0 transition-shadow duration-500 transform ";
const navScrolledStyle =
  "z-40 shadow-navShadow duration-500 ease-in-out transform";

const Nav = (props) => {
  const [active, setActive] = useState("/");
  const [navStyle, setNavStyle] = useState(navStyleDef);
  const navRef = useRef(navStyle);
  //small screen nav menu
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    if (window) {
      let currentPath = window.location.pathname;
      if (active !== currentPath) {
        switch (window.location.pathname) {
          case "/":
            return setActive("/");
          case "/portfolio":
            return setActive("/portfolio");
          case "/contact":
            return setActive("/contact");
          default:
            return setActive("");
        }
      }
    }
    return () => {
      //cleanup here
      return;
    };
  });

  const handleScroll = () => {
    if (window) {
      const offSet = window.scrollY;
      if (offSet > 0 && !navRef.current.includes(navScrolledStyle)) {
        navRef.current = `${navStyleDef} ${navScrolledStyle}`;
        return setNavStyle(navRef.current);
      }
      if (offSet <= 0 && navRef.current.includes(navScrolledStyle)) {
        navRef.current = navStyleDef;
        return setNavStyle(navRef.current);
      }
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll, false);
    }

    return () => window.removeEventListener("scroll", handleScroll, false);
  }, []);

  return (
    <>
      <nav key="nav" className={navStyle}>
        <Link href="/">
          <a
            className="font-logo h-10 text-white capitalize text-3xl leading-tight tracking-wider hover:cursor-pointer hover:text-gray-800 hover:duration-500 ease-in-out transform transition break-words"
            onClick={() => {
              if (menuIsVisible) {
                setMenuIsVisible(false);
              }
            }}
          >
            SAAD KHURSHID
          </a>
        </Link>
        {/*** medium and large screen nav menu */}
        <div className="flex-1 px-2 hidden md:block">
          <ul className="items-center space-y-2 ml-auto right-0 w-min md:flex md:space-y-0 md:space-x-4 lg:space-x-6">
            <li className={linkStyle + (active === "/" ? activeLinkStyle : "")}>
              <Link href="/">About</Link>
            </li>

            <li
              className={
                linkStyle + (active === "/portfolio" ? activeLinkStyle : "")
              }
            >
              <Link href="/portfolio">Portfolio</Link>
            </li>

            <li
              className={
                linkStyle + (active === "/contact" ? activeLinkStyle : "")
              }
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li className={linkStyle}>
              <a
                href="https://www.linkedin.com/in/saad-khurshid-a101a8126/"
                target="_blank"
              >
                <svg
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-auto fill-current stroke-current"
                >
                  <path d="M87.316 0H8.68398C3.888 0 0 3.888 0 8.68398V87.3158C0 92.112 3.888 96 8.68398 96H87.3158C92.112 96 96 92.112 96 87.3158V8.68398C96 3.888 92.112 0 87.316 0ZM29.7065 82.8927C29.7065 84.2885 28.5751 85.4199 27.1793 85.4199H16.4218C15.026 85.4199 13.8946 84.2885 13.8946 82.8927V37.7976C13.8946 36.4018 15.026 35.2704 16.4218 35.2704H27.1793C28.5751 35.2704 29.7065 36.4018 29.7065 37.7976V82.8927ZM21.8005 31.0196C16.1564 31.0196 11.5808 26.444 11.5808 20.7998C11.5808 15.1557 16.1564 10.5801 21.8005 10.5801C27.4447 10.5801 32.0203 15.1557 32.0203 20.7998C32.0203 26.444 27.4449 31.0196 21.8005 31.0196ZM85.925 83.0963C85.925 84.3795 84.8846 85.4199 83.6014 85.4199H72.0578C70.7746 85.4199 69.7342 84.3795 69.7342 83.0963V61.9441C69.7342 58.7887 70.6598 48.1169 61.488 48.1169C54.3737 48.1169 52.9307 55.4214 52.6409 58.6995V83.0963C52.6409 84.3795 51.6007 85.4199 50.3173 85.4199H39.1527C37.8695 85.4199 36.8291 84.3795 36.8291 83.0963V37.5941C36.8291 36.3109 37.8695 35.2704 39.1527 35.2704H50.3173C51.6005 35.2704 52.6409 36.3109 52.6409 37.5941V41.5283C55.2789 37.5694 59.1993 34.5138 67.5465 34.5138C86.0308 34.5138 85.925 51.7827 85.925 61.2711V83.0963Z" />
                </svg>
              </a>
            </li>
            <li className={linkStyle}>
              <a
                href="https://github.com/saad-Khurshid"
                target="_blank"
                className="hover:text-gray-800"
              >
                <svg
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-auto fill-current stroke-current"
                >
                  <path d="M47.994 0.999176C21.492 0.999176 0 22.5752 0 49.1912C0 70.4792 13.752 88.5392 32.832 94.9172C35.232 95.3612 36.108 93.8732 36.108 92.5952C36.108 91.4492 36.066 88.4192 36.042 84.3992C22.692 87.3092 19.872 77.9372 19.872 77.9372C17.694 72.3692 14.544 70.8872 14.544 70.8872C10.182 67.8992 14.868 67.9592 14.868 67.9592C19.686 68.3012 22.218 72.9272 22.218 72.9272C26.502 80.2892 33.456 78.1652 36.192 76.9292C36.624 73.8152 37.866 71.6912 39.24 70.4852C28.584 69.2672 17.376 65.1332 17.376 46.6712C17.376 41.4092 19.248 37.1072 22.32 33.7352C21.822 32.5172 20.178 27.6152 22.788 20.9852C22.788 20.9852 26.82 19.6892 35.988 25.9232C39.816 24.8552 43.92 24.3212 48.006 24.3032C52.08 24.3272 56.19 24.8552 60.024 25.9292C69.186 19.6952 73.212 20.9912 73.212 20.9912C75.828 27.6272 74.184 32.5232 73.692 33.7412C76.77 37.1132 78.624 41.4152 78.624 46.6772C78.624 65.1872 67.404 69.2612 56.712 70.4552C58.434 71.9432 59.97 74.8832 59.97 79.3772C59.97 85.8212 59.91 91.0172 59.91 92.5952C59.91 93.8852 60.774 95.3852 63.21 94.9112C82.26 88.5272 96 70.4732 96 49.1912C96 22.5752 74.508 0.999176 47.994 0.999176Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {/*** small screen nav menu icon*/}
        <div
          className="block md:hidden ml-auto"
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          {!menuIsVisible && (
            <svg
              className="w-8 h-8 text-white hover:text-gray-800 fill-current"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.6679 64.6582H154.668C156.876 64.6582 158.668 61.8291 158.668 58.3291C158.668 54.8291 156.876 52 154.668 52H34.6679C32.4599 52 30.6679 54.8291 30.6679 58.3291C30.6679 61.8291 32.4559 64.6582 34.6679 64.6582Z" />
              <path d="M34.6679 152.658H154.668C156.876 152.658 158.668 149.829 158.668 146.329C158.668 142.829 156.876 140 154.668 140H34.6679C32.4599 140 30.6679 142.829 30.6679 146.329C30.6679 149.829 32.4559 152.658 34.6679 152.658Z" />
              <path d="M34.6679 108.658H154.668C156.876 108.658 158.668 105.829 158.668 102.329C158.668 98.8291 156.876 96 154.668 96H34.6679C32.4599 96 30.6679 98.8291 30.6679 102.329C30.6679 105.829 32.4559 108.658 34.6679 108.658Z" />
            </svg>
          )}
          {menuIsVisible && (
            <svg
              className="w-8 h-8 text-white hover:text-gray-800 fill-current"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M149.281 126.211L98.0312 74.7656L149.398 23.9844C151.508 21.875 151.508 18.4375 149.398 16.3281L134.789 1.64062C133.773 0.624998 132.406 0.0781231 130.961 0.0781231C129.516 0.0781231 128.148 0.664061 127.133 1.64062L76 52.2656L24.7891 1.67969C23.7734 0.664063 22.4062 0.117188 20.9609 0.117188C19.5156 0.117188 18.1484 0.703125 17.1328 1.67969L2.5625 16.3672C0.453125 18.4766 0.453125 21.9141 2.5625 24.0234L53.9297 74.8047L2.71875 126.211C1.70313 127.227 1.11719 128.594 1.11719 130.039C1.11719 131.484 1.66406 132.852 2.71875 133.867L17.3281 148.555C18.3828 149.609 19.75 150.156 21.1562 150.156C22.5234 150.156 23.9297 149.648 24.9844 148.555L76 97.3047L127.055 148.516C128.109 149.57 129.477 150.117 130.883 150.117C132.25 150.117 133.656 149.609 134.711 148.516L149.32 133.828C150.336 132.813 150.922 131.445 150.922 130C150.883 128.594 150.297 127.227 149.281 126.211Z" />
            </svg>
          )}
        </div>
      </nav>
      {/*** small screen nav */}
      <div
        className={
          "inset-0 fixed mt-16 z-50 w-full h-80 items-center bg-primary shadow-navShadow transition-shadow duration-500 transform md:hidden " +
          (menuIsVisible ? "block" : "hidden")
        }
      >
        <ul className="space-y-2 lef-5 w-min">
          <li
            className={menuLinkStyle + (active === "/" ? activeLinkStyle : "")}
          >
            <Link href="/">
              <a
                onClick={() => {
                  if (menuIsVisible) {
                    setMenuIsVisible(false);
                  }
                }}
              >
                About
              </a>
            </Link>
          </li>

          <li
            className={
              menuLinkStyle + (active === "/portfolio" ? activeLinkStyle : "")
            }
          >
            <Link href="/portfolio">
              <a
                onClick={() => {
                  if (menuIsVisible) {
                    setMenuIsVisible(false);
                  }
                }}
              >
                Portfolio
              </a>
            </Link>
          </li>

          <li
            className={
              menuLinkStyle + (active === "/contact" ? activeLinkStyle : "")
            }
          >
            <Link href="/contact">
              <a
                onClick={() => {
                  if (menuIsVisible) {
                    setMenuIsVisible(false);
                  }
                }}
              >
                Contact
              </a>
            </Link>
          </li>
          <li className={menuLinkStyle}>
            <a
              href="https://www.linkedin.com/in/saad-khurshid-a101a8126/"
              target="_blank"
            >
              <svg
                onClick={() => {
                  if (menuIsVisible) {
                    setMenuIsVisible(false);
                  }
                }}
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-4 w-5 h-5 fill-current stroke-current"
              >
                <path d="M87.316 0H8.68398C3.888 0 0 3.888 0 8.68398V87.3158C0 92.112 3.888 96 8.68398 96H87.3158C92.112 96 96 92.112 96 87.3158V8.68398C96 3.888 92.112 0 87.316 0ZM29.7065 82.8927C29.7065 84.2885 28.5751 85.4199 27.1793 85.4199H16.4218C15.026 85.4199 13.8946 84.2885 13.8946 82.8927V37.7976C13.8946 36.4018 15.026 35.2704 16.4218 35.2704H27.1793C28.5751 35.2704 29.7065 36.4018 29.7065 37.7976V82.8927ZM21.8005 31.0196C16.1564 31.0196 11.5808 26.444 11.5808 20.7998C11.5808 15.1557 16.1564 10.5801 21.8005 10.5801C27.4447 10.5801 32.0203 15.1557 32.0203 20.7998C32.0203 26.444 27.4449 31.0196 21.8005 31.0196ZM85.925 83.0963C85.925 84.3795 84.8846 85.4199 83.6014 85.4199H72.0578C70.7746 85.4199 69.7342 84.3795 69.7342 83.0963V61.9441C69.7342 58.7887 70.6598 48.1169 61.488 48.1169C54.3737 48.1169 52.9307 55.4214 52.6409 58.6995V83.0963C52.6409 84.3795 51.6007 85.4199 50.3173 85.4199H39.1527C37.8695 85.4199 36.8291 84.3795 36.8291 83.0963V37.5941C36.8291 36.3109 37.8695 35.2704 39.1527 35.2704H50.3173C51.6005 35.2704 52.6409 36.3109 52.6409 37.5941V41.5283C55.2789 37.5694 59.1993 34.5138 67.5465 34.5138C86.0308 34.5138 85.925 51.7827 85.925 61.2711V83.0963Z" />
              </svg>
            </a>
          </li>
          <li className={menuLinkStyle}>
            <a href="https://github.com/saad-Khurshid" target="_blank">
              <svg
                onClick={() => {
                  if (menuIsVisible) {
                    setMenuIsVisible(false);
                  }
                }}
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-4 w-5 h-5 fill-current stroke-current"
              >
                <path d="M47.994 0.999176C21.492 0.999176 0 22.5752 0 49.1912C0 70.4792 13.752 88.5392 32.832 94.9172C35.232 95.3612 36.108 93.8732 36.108 92.5952C36.108 91.4492 36.066 88.4192 36.042 84.3992C22.692 87.3092 19.872 77.9372 19.872 77.9372C17.694 72.3692 14.544 70.8872 14.544 70.8872C10.182 67.8992 14.868 67.9592 14.868 67.9592C19.686 68.3012 22.218 72.9272 22.218 72.9272C26.502 80.2892 33.456 78.1652 36.192 76.9292C36.624 73.8152 37.866 71.6912 39.24 70.4852C28.584 69.2672 17.376 65.1332 17.376 46.6712C17.376 41.4092 19.248 37.1072 22.32 33.7352C21.822 32.5172 20.178 27.6152 22.788 20.9852C22.788 20.9852 26.82 19.6892 35.988 25.9232C39.816 24.8552 43.92 24.3212 48.006 24.3032C52.08 24.3272 56.19 24.8552 60.024 25.9292C69.186 19.6952 73.212 20.9912 73.212 20.9912C75.828 27.6272 74.184 32.5232 73.692 33.7412C76.77 37.1132 78.624 41.4152 78.624 46.6772C78.624 65.1872 67.404 69.2612 56.712 70.4552C58.434 71.9432 59.97 74.8832 59.97 79.3772C59.97 85.8212 59.91 91.0172 59.91 92.5952C59.91 93.8852 60.774 95.3852 63.21 94.9112C82.26 88.5272 96 70.4732 96 49.1912C96 22.5752 74.508 0.999176 47.994 0.999176Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
