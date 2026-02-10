import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Users, CheckCircle, Clock, XCircle, FileText } from "lucide-react";

interface Metrics {
  total: number;
  aprovados: number;
  pendentes: number;
  rejeitados: number;
  relatoriosHoje: number;
}

export default function Dashboard() {
  const [metrics, setMetrics] = useState<Metrics>({ total: 0, aprovados: 0, pendentes: 0, rejeitados: 0, relatoriosHoje: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      const [motoristas, relatorios] = await Promise.all([
        supabase.from("motoristas").select("status"),
        supabase.from("relatorios_diarios").select("id").eq("data_relatorio", new Date().toISOString().split("T")[0]),
      ]);

      const list = motoristas.data || [];
      setMetrics({
        total: list.length,
        aprovados: list.filter((m) => m.status === "APROVADO").length,
        pendentes: list.filter((m) => m.status === "PENDENTE").length,
        rejeitados: list.filter((m) => m.status === "REJEITADO").length,
        relatoriosHoje: relatorios.data?.length || 0,
      });
      setLoading(false);
    };
    fetchMetrics();
  }, []);

  const cards = [
    { label: "Total Motoristas", value: metrics.total, icon: Users, color: "text-primary" },
    { label: "Aprovados", value: metrics.aprovados, icon: CheckCircle, color: "text-accent" },
    { label: "Pendentes", value: metrics.pendentes, icon: Clock, color: "text-yellow-500" },
    { label: "Rejeitados", value: metrics.rejeitados, icon: XCircle, color: "text-destructive" },
    { label: "Relatórios Hoje", value: metrics.relatoriosHoje, icon: FileText, color: "text-primary" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {loading ? (
        <p className="text-muted-foreground">A carregar métricas...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((c) => (
            <Card key={c.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{c.label}</CardTitle>
                <c.icon className={`h-5 w-5 ${c.color}`} />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{c.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
