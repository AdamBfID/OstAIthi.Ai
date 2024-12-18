import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Contact } from "@/components/ui/Contact";
import { Article } from "@/components/ui/Article";
import { Home } from "@/components/ui/Home";
import Vistunisie from "@/components/ui/Vistunisie"
import  Dataset  from "./components/ui/Dataset";
// Dummy pages for other routes



function Visualization() {
  return <div className="p-6">Visualization Page</div>;
}

function Feedback() {
  return <div className="p-6">Feedback Page</div>;
}

// Layout Component
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}

// App Component
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/article"
          element={
            <Layout>
              <Article />
            </Layout>
          }
        />
        <Route
          path="/visualization"
          element={
            <Layout>
              <Visualization />
            </Layout>
          }
        />
        <Route
          path="/visualization/tunisie"
          element={
            <Layout>
              <Vistunisie />
            </Layout>
          }
        />
        <Route
          path="/visualization/etranger"
          element={
            <Layout>
              <Feedback />
            </Layout>
          }
        />
        <Route
          path="/feedback"
          element={
            <Layout>
              <Feedback />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/dataset"
          element={
            <Layout>
              <Dataset />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
