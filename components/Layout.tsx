import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="font-body w-full h-full">
      <Nav/>
      {/* <div> */}
        <main className="main">
          {children}
        </main>
      {/* </div> */}
    </div>
  );
};

export default Layout;
