import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div>
      <Nav title="CV"></Nav>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
            Mark Zunino&apos;s Resume{" "}
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
