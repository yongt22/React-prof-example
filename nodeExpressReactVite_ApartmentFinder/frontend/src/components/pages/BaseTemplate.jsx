
import NavigationBar from "../NavigationBar.jsx";
import Container from "react-bootstrap/Container";

export default function BaseTemplate({ children }) {
  return (
    <Container>
      <NavigationBar />

      <main>
        {children}
      </main>

      <footer className="mt-4">
        <hr />
        <p className="text-center">
          &copy; 2026 Apartment Finder. All rights reserved.
        </p>
      </footer>
    </Container>
  );
}
