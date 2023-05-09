import { Container } from "reactstrap";
import "./HomePage.css";
import Header from "../Components/Header";
import About from "../Components/About";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <Container fluid className="wrapper">
      <Header />
      <About />
      <Footer />
    </Container>
  );
};

export default HomePage;
