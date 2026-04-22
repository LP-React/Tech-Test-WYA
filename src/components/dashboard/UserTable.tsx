import { User } from "@/types/core/user";
import { UserRow } from "./UserRow";

interface UserTableProps {
  users: User[];
  loading: boolean;
  searchTerm: string;
}

export function UserTable({ users, loading, searchTerm }: UserTableProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              {["Nombre", "Usuario", "Correo", "Compañía", "Acciones"].map(
                (head) => (
                  <th
                    key={head}
                    className={`px-6 py-4 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider ${head === "Acciones" ? "text-right" : ""}`}
                  >
                    {head}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {loading ? (
              <LoadingState />
            ) : users.length > 0 ? (
              users.map((user) => <UserRow key={user.id} user={user} />)
            ) : (
              <EmptyState searchTerm={searchTerm} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LoadingState() {
  return Array.from({ length: 5 }).map((_, i) => (
    <tr key={`loading-${i}`} className="animate-pulse">
      <td colSpan={5} className="px-6 py-8 text-center text-on-surface-variant">
        <span className="flex items-center justify-center gap-2">
          <span className="h-2 w-2 bg-primary rounded-full animate-bounce" />
          Cargando datos...
        </span>
      </td>
    </tr>
  ));
}

function EmptyState({ searchTerm }: { searchTerm: string }) {
  return (
    <tr>
      <td
        colSpan={5}
        className="px-6 py-12 text-center text-on-surface-variant bg-surface"
      >
        No se encontraron usuarios que coincidan con{" "}
        <span className="font-bold">"{searchTerm}"</span>
      </td>
    </tr>
  );
}
