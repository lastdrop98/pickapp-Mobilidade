import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Users, CheckCircle, Clock, XCircle, FileText, TrendingUp, Activity } from "lucide-react";
import { motion } from "framer-motion";

interface Metrics {
  total: number;
  aprovados: number;
  pendentes: number;
  rejeitados: number;
  relatoriosHoje: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

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
    { label: "Total Motoristas", value: metrics.total, icon: Users, gradient: "from-primary to-primary/70", bgIcon: "bg-primary/10" },
    { label: "Aprovados", value: metrics.aprovados, icon: CheckCircle, gradient: "from-accent to-accent/70", bgIcon: "bg-accent/10" },
    { label: "Pendentes", value: metrics.pendentes, icon: Clock, gradient: "from-yellow-500 to-yellow-400", bgIcon: "bg-yellow-500/10" },
    { label: "Rejeitados", value: metrics.rejeitados, icon: XCircle, gradient: "from-destructive to-destructive/70", bgIcon: "bg-destructive/10" },
    { label: "Relatórios Hoje", value: metrics.relatoriosHoje, icon: FileText, gradient: "from-primary to-accent", bgIcon: "bg-primary/10" },
  ];

  const approvalRate = metrics.total > 0 ? Math.round((metrics.aprovados / metrics.total) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Visão geral do sistema PickApp</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Activity className="h-4 w-4 text-accent animate-pulse" />
          <span>Atualizado agora</span>
        </div>
      </motion.div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2"><div className="h-4 bg-muted rounded w-24" /></CardHeader>
              <CardContent><div className="h-8 bg-muted rounded w-16" /></CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <>
          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="relative overflow-hidden border-border/50 hover:shadow-lg transition-shadow cursor-default">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.gradient}`} />
                  <CardHeader className="flex flex-row items-center justify-between pb-2 pt-5">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{c.label}</CardTitle>
                    <div className={`h-10 w-10 rounded-xl ${c.bgIcon} flex items-center justify-center`}>
                      <c.icon className="h-5 w-5 text-foreground/70" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-extrabold text-foreground">{c.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    Taxa de Aprovação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-extrabold text-foreground">{approvalRate}%</span>
                    <span className="text-sm text-muted-foreground mb-2">dos motoristas registados</span>
                  </div>
                  <div className="mt-4 h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${approvalRate}%` }}
                      transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Resumo Rápido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Aprovados", value: metrics.aprovados, total: metrics.total, color: "bg-accent" },
                    { label: "Pendentes", value: metrics.pendentes, total: metrics.total, color: "bg-yellow-500" },
                    { label: "Rejeitados", value: metrics.rejeitados, total: metrics.total, color: "bg-destructive" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                      <span className="text-sm text-muted-foreground flex-1">{item.label}</span>
                      <span className="text-sm font-semibold text-foreground">{item.value}</span>
                      <span className="text-xs text-muted-foreground">
                        ({item.total > 0 ? Math.round((item.value / item.total) * 100) : 0}%)
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
