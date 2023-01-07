import Header from "~/layouts/Components/clients/Header";
import Footer from "~/layouts/Components/clients/Footer";

export const clientLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
