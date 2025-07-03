import "../_styles/Layout.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
