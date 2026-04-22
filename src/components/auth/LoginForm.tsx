"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, LogIn, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.email === "admin@admin.com" &&
      formData.password === "admin123"
    ) {
      toast.success("¡Bienvenido!", {
        description: "Acceso concedido satisfactoriamente.",
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      toast.error("Error de acceso", {
        description: "Credenciales incorrectas. Prueba con admin@admin.com",
      });
    }
  };

  return (
    <div className="w-full max-w-[440px] z-10">
      <div className="bg-white border border-outline-variant rounded-xl p-8 shadow-sm">
        <header className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg mb-4">
            <ShieldCheck className="text-white w-7 h-7" />
          </div>
          <h1 className="text-[30px] font-bold tracking-tight text-on-surface mb-1">
            WYA
          </h1>
          <p className="text-sm text-on-surface-variant text-center">
            Inicia sesión para acceder a tu panel de control
          </p>
          <div className="mt-2 p-2 bg-surface-container-low border border-outline-variant/20 rounded-md">
            <p className="text-[10px] text-primary font-bold text-center">
              CREDENCIALES: admin@admin.com / admin123
            </p>
          </div>
        </header>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-medium text-on-surface-variant ml-1"
            >
              Correo electrónico
            </Label>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
              <Input
                id="email"
                type="email"
                placeholder="ejemplo@empresa.com"
                className="pl-10 h-12 bg-white border-outline-variant rounded-lg focus-visible:ring-primary/20"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <Label
                htmlFor="password"
                className="text-xs font-medium text-on-surface-variant"
              >
                Contraseña
              </Label>
              <a
                href="#"
                className="text-xs font-medium text-primary hover:underline underline-offset-4"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10 h-12 bg-white border-outline-variant rounded-lg focus-visible:ring-primary/20"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 px-1">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-xs text-on-surface-variant cursor-pointer select-none"
            >
              Recordar dispositivo por 30 días
            </label>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white gap-2 text-sm font-medium shadow-sm transition-all active:scale-[0.98]"
          >
            <span className="text-white">Iniciar sesión</span>
            <LogIn size={18} className="text-white" />
          </Button>
        </form>
      </div>
    </div>
  );
}
