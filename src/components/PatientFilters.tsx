import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Filter } from "lucide-react";

export const PatientFilters = () => {
  return (
    <div className="bg-card rounded-lg p-6 shadow space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Фильтры</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Возраст</Label>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>18</span>
            <span>100</span>
          </div>
          <Slider defaultValue={[18, 80]} min={18} max={100} step={1} />
        </div>

        <div className="space-y-3 pt-3">
          <Label>Тип диагноза</Label>
          <div className="space-y-3">
            {["Сердечно-сосудистые", "Эндокринные", "Неврологические", "Респираторные", "Опорно-двигательные"].map(
              (diagnosis) => (
                <div key={diagnosis} className="flex items-center space-x-2">
                  <Checkbox id={diagnosis} />
                  <Label htmlFor={diagnosis} className="font-normal cursor-pointer">
                    {diagnosis}
                  </Label>
                </div>
              )
            )}
          </div>
        </div>

        <div className="space-y-3 pt-3">
          <Label>Последний визит</Label>
          <div className="space-y-3">
            {[
              { id: "week", label: "За последнюю неделю" },
              { id: "month", label: "За последний месяц" },
              { id: "quarter", label: "За последние 3 месяца" },
              { id: "year", label: "За последний год" },
            ].map((period) => (
              <div key={period.id} className="flex items-center space-x-2">
                <Checkbox id={period.id} />
                <Label htmlFor={period.id} className="font-normal cursor-pointer">
                  {period.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col gap-2">
        <Button className="w-full">Применить фильтры</Button>
        <Button variant="outline" className="w-full">Сбросить</Button>
      </div>
    </div>
  );
};
