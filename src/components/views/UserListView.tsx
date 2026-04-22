"use client";

import { useEffect, useState } from "react";
import { getUsers } from "@/services/user-service";
import { User } from "@/types/core/user";
import { UserFilters } from "../dashboard/UserFilters";
import { UserTable } from "../dashboard/UserTable";

export function UserListView() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-h1 font-bold text-on-surface">
            Gestión de Usuarios
          </h2>
          <p className="text-body-md text-on-surface-variant mt-1">
            Administra el acceso y los perfiles de tu organización.
          </p>
        </div>
        <UserFilters searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </header>

      <UserTable
        users={filteredUsers}
        loading={loading}
        searchTerm={searchTerm}
      />
    </div>
  );
}
