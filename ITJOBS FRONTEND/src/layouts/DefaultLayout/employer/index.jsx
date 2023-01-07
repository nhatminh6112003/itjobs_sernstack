import Header from "~/layouts/Components/employer/Header";
import Footer from "~/layouts/Components/employer/Footer";

export const employerLayout = ({ children }) => {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  