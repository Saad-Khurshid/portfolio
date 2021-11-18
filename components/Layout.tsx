import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="font-body w-full">
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
