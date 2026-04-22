import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="lg:pl-[280px] flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 flex h-16 items-center border-b border-outline-variant bg-surface/80 backdrop-blur-md px-8">
          <h1 className="font-semibold text-on-surface">
            Panel de Administración
          </h1>
        </header>

        <main className="flex-1 overflow-auto bg-background p-lg md:p-xl">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
