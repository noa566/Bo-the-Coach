import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHalos from "@/components/PageHalos";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="relative flex-1 pt-24 overflow-x-clip">
        <PageHalos />
        {children}
      </main>
      <Footer />
    </>
  );
}
