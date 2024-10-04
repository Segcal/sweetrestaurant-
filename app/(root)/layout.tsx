export default function HomeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        <main>{children}</main>
      </section>
    );
  }