
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-primary">Медицинская Система</h1>
        <p className="text-xl text-gray-600 mb-8">Добро пожаловать в систему учета пациентов</p>
        
        <div className="space-y-4">
          <Link to="/patients">
            <Button className="w-full gap-2 text-base">
              <UserRound className="h-5 w-5" />
              Регистр пациентов
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
