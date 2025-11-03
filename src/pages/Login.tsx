import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Lock } from "lucide-react";

const ACCESS_KEY = "8d8a09-dx82xi-9dc77xj-0c82sa";

const Login = () => {
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (key === ACCESS_KEY) {
      localStorage.setItem("driveZoneAuth", "true");
      toast.success("Авторизація успішна!");
      navigate("/courses");
    } else {
      toast.error("Невірний ключ доступу");
      setKey("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground mb-2">DriveZone</h1>
          <p className="text-muted-foreground">Платформа для навчання в автошколі</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="key" className="text-sm font-medium text-foreground">
                Ключ доступу
              </label>
              <Input
                id="key"
                type="text"
                placeholder="Введіть ключ доступу"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="text-center tracking-wider"
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Увійти
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Не маєте ключа доступу?
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open("https://t.me/Julia_m_ua", "_blank")}
            >
              Зв'язатися з менеджером
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
