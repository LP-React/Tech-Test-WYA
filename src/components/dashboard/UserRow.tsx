import { MoreVertical } from "lucide-react";
import { User } from "@/types/core/user";

export function UserRow({ user }: { user: User }) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <tr className="hover:bg-surface-container transition-colors group">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant font-bold text-sm">
            {getInitials(user.name)}
          </div>
          <div className="ml-3">
            <div className="text-body-md font-semibold text-on-surface">
              {user.name}
            </div>
            <div className="text-label-sm text-on-surface-variant">
              ID: {user.id}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-body-md text-on-surface-variant">
        @{user.username}
      </td>
      <td className="px-6 py-4 text-body-md text-on-surface-variant">
        {user.email}
      </td>
      <td className="px-6 py-4">
        <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-secondary-container text-on-secondary-container">
          {user.company.name}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="p-2 text-outline hover:text-primary hover:bg-primary/5 rounded-full transition-all">
          <MoreVertical size={20} />
        </button>
      </td>
    </tr>
  );
}
