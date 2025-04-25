import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PatientSearch } from "@/components/PatientSearch";
import { PatientFilters } from "@/components/PatientFilters";
import { PlusCircle, FileText, UserRound } from "lucide-react";

// Временные данные пациентов для демонстрации
const mockPatients = [
  { id: 1, name: "Иванов Иван Иванович", age: 45, diagnosis: "Гипертония", lastVisit: "15.04.2025" },
  { id: 2, name: "Петрова Анна Сергеевна", age: 37, diagnosis: "Диабет II типа", lastVisit: "22.03.2025" },
  { id: 3, name: "Сидоров Алексей Петрович", age: 52, diagnosis: "Артрит", lastVisit: "10.04.2025" },
  { id: 4, name: "Козлова Мария Дмитриевна", age: 29, diagnosis: "Бронхит", lastVisit: "05.04.2025" },
  { id: 5, name: "Никитин Павел Андреевич", age: 63, diagnosis: "Ишемическая болезнь сердца", lastVisit: "18.03.2025" },
];

const PatientRegistry = () => {
  const [patients, setPatients] = useState(mockPatients);
  const [searchTerm, setSearchTerm] = useState("");

  // Функция для фильтрации пациентов по поисковому запросу
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <UserRound className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Регистр пациентов</h1>
        </div>
        <div className="flex items-center">
          {/* Иллюстрация врача */}
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" 
            alt="Медицинский персонал" 
            className="h-20 w-20 object-cover rounded-full border-4 border-primary/20 mr-4 hidden md:block"
          />
          <Button className="bg-primary">
            <PlusCircle className="mr-2 h-4 w-4" />
            Добавить пациента
          </Button>
        </div>
      </div>

      {/* Декоративное изображение медицинских данных */}
      <div className="relative mb-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="max-w-lg">
            <h2 className="text-xl font-semibold mb-2">База данных пациентов</h2>
            <p className="text-muted-foreground">
              Электронная система учета пациентов позволяет эффективно управлять данными и обеспечивать качественное медицинское обслуживание.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" 
            alt="Медицинские данные" 
            className="h-32 rounded-lg shadow-md object-cover hidden md:block"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <div className="bg-card rounded-lg p-4 shadow">
            <div className="mb-4">
              <PatientSearch value={searchTerm} onChange={setSearchTerm} />
            </div>

            <Table>
              <TableCaption>Всего пациентов: {filteredPatients.length}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ФИО</TableHead>
                  <TableHead>Возраст</TableHead>
                  <TableHead>Диагноз</TableHead>
                  <TableHead>Последний визит</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.diagnosis}</TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">Просмотреть карту</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div>
          <PatientFilters />
        </div>
      </div>
    </div>
  );
};

export default PatientRegistry;
