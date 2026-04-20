import { Outlet, NavLink } from "react-router";
import { Home, LineChart, Wallet, CheckSquare, User } from "lucide-react";

export function Layout() {
  return (
    <div className="flex h-screen bg-[#fafafa]">
      {/* Sidebar */}
      <aside className="w-20 bg-white border-r border-[rgba(0,0,0,0.06)] flex flex-col items-center py-8">
        {/* Logo */}
        <div className="mb-12">
          <div className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold text-lg">W</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                isActive
                  ? "text-[#1e3a5f] bg-[#f5f5f5]"
                  : "text-[#666666] hover:text-[#1a1a1a] hover:bg-[#fafafa]"
              }`
            }
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </NavLink>

          <NavLink
            to="/plan"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                isActive
                  ? "text-[#1e3a5f] bg-[#f5f5f5]"
                  : "text-[#666666] hover:text-[#1a1a1a] hover:bg-[#fafafa]"
              }`
            }
          >
            <LineChart className="w-5 h-5" />
            <span className="text-xs">Plan</span>
          </NavLink>

          <NavLink
            to="/wealth"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                isActive
                  ? "text-[#1e3a5f] bg-[#f5f5f5]"
                  : "text-[#666666] hover:text-[#1a1a1a] hover:bg-[#fafafa]"
              }`
            }
          >
            <Wallet className="w-5 h-5" />
            <span className="text-xs">Wealth</span>
          </NavLink>

          <NavLink
            to="/actions"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                isActive
                  ? "text-[#1e3a5f] bg-[#f5f5f5]"
                  : "text-[#666666] hover:text-[#1a1a1a] hover:bg-[#fafafa]"
              }`
            }
          >
            <CheckSquare className="w-5 h-5" />
            <span className="text-xs">Actions</span>
          </NavLink>
        </nav>

        {/* Profile at bottom */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
              isActive
                ? "text-[#1e3a5f] bg-[#f5f5f5]"
                : "text-[#666666] hover:text-[#1a1a1a] hover:bg-[#fafafa]"
            }`
          }
        >
          <User className="w-5 h-5" />
          <span className="text-xs">Profile</span>
        </NavLink>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
