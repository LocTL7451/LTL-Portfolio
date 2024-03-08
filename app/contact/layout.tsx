import AnimatedHorizontalPage from "../AnimatedHorizontalPage";

export const metadata = {
  title: "Loc Lien - Contact",
  description: "Portfolio Contact Section",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedHorizontalPage>
      <main>{children}</main>
    </AnimatedHorizontalPage>
  );
}

export default Layout;
