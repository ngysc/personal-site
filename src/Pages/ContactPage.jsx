import { Container } from "reactstrap";
import "./ContactPage.css";
import Header from "../Components/Header";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const ContactPage = () => {
  return (
    <Container fluid className="wrapper">
      <Header />
      <Contact />
      <Footer />
    </Container>
  );
};

export default ContactPage;
