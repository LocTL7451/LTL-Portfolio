import React from "react";
import Sidebar from "./_components/Sidebar";
import AnimatedHorizontalPage from "../AnimatedHorizontalPage";
import "react-multi-carousel/lib/styles.css";

export const metadata = {
  title: "Loc Lien - Projects & Tools",
  description: "Projects and Tools developed by Loc Lien",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedHorizontalPage>
      <main className="flex flex-row ">
        <Sidebar />
        <section className="w-full  ">{children}</section>
      </main>
    </AnimatedHorizontalPage>
  );
}

export default Layout;
