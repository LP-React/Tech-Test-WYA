import { UserListView } from "@/components/views/UserListView";

export default function UsersPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="p-8 lg:p-12 max-w-8xl mx-auto">
        <UserListView />
      </div>
    </main>
  );
}
