import { Search, Plus } from "lucide-react";

interface UserFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function UserFilters({ searchTerm, onSearchChange }: UserFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative w-full sm:w-72">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
          size={18}
        />
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg bg-surface text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-on-primary rounded-lg text-button shadow-sm flex items-center justify-center transition-all active:scale-95">
        <Plus size={18} className="mr-2" />
        Nuevo Usuario
      </button>
    </div>
  );
}
