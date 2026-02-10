import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Pencil, Plus, Search } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Motorista = Tables<"motoristas">;

const statusColors: Record<string, string> = {
  PENDENTE: "bg-yellow-100 text-yellow-800 border-yellow-300",
  APROVADO: "bg-green-100 text-green-800 border-green-300",
  REJEITADO: "bg-red-100 text-red-800 border-red-300",
};

export default function MotoristasAdmin() {
  const [data, setData] = useState<Motorista[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<Motorista | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    const { data: rows } = await supabase.from("motoristas").select("*").order("data_registo", { ascending: false });
    setData(rows || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const updateStatus = async (id: string, status: string) => {
    const updates: Record<string, string | null> = { status };
    if (status === "APROVADO") {
      updates.data_aprovacao = new Date().toISOString();
    }
    await supabase.from("motoristas").update(updates).eq("id", id);
    toast({ title: `Status atualizado para ${status}` });
    fetchData();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja apagar este motorista?")) return;
    await supabase.from("motoristas").delete().eq("id", id);
    toast({ title: "Motorista apagado" });
    fetchData();
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      nome_completo: fd.get("nome_completo") as string,
      whatsapp: fd.get("whatsapp") as string,
      tipo_veiculo: fd.get("tipo_veiculo") as string || null,
      matricula: fd.get("matricula") as string || null,
      zona_trabalho: fd.get("zona_trabalho") as string || null,
      local_registo: fd.get("local_registo") as string || null,
      observacoes: fd.get("observacoes") as string || null,
    };

    if (editItem) {
      await supabase.from("motoristas").update(payload).eq("id", editItem.id);
      toast({ title: "Motorista atualizado" });
    } else {
      await supabase.from("motoristas").insert({ ...payload, status: "PENDENTE" });
      toast({ title: "Motorista adicionado" });
    }
    setDialogOpen(false);
    setEditItem(null);
    fetchData();
  };

  const filtered = data.filter((m) => {
    const matchSearch = m.nome_completo.toLowerCase().includes(search.toLowerCase()) ||
      m.whatsapp.includes(search);
    const matchStatus = filterStatus === "ALL" || m.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Motoristas</h1>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setEditItem(null); }}>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Adicionar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editItem ? "Editar Motorista" : "Novo Motorista"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-3">
              <div><Label>Nome Completo *</Label><Input name="nome_completo" required defaultValue={editItem?.nome_completo || ""} /></div>
              <div><Label>WhatsApp *</Label><Input name="whatsapp" required defaultValue={editItem?.whatsapp || ""} /></div>
              <div><Label>Tipo Veículo</Label><Input name="tipo_veiculo" defaultValue={editItem?.tipo_veiculo || ""} /></div>
              <div><Label>Matrícula</Label><Input name="matricula" defaultValue={editItem?.matricula || ""} /></div>
              <div><Label>Zona de Trabalho</Label><Input name="zona_trabalho" defaultValue={editItem?.zona_trabalho || ""} /></div>
              <div><Label>Local de Registo</Label><Input name="local_registo" defaultValue={editItem?.local_registo || ""} /></div>
              <div><Label>Observações</Label><Input name="observacoes" defaultValue={editItem?.observacoes || ""} /></div>
              <Button type="submit" className="w-full">Guardar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Pesquisar por nome ou WhatsApp..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Todos</SelectItem>
            <SelectItem value="PENDENTE">Pendente</SelectItem>
            <SelectItem value="APROVADO">Aprovado</SelectItem>
            <SelectItem value="REJEITADO">Rejeitado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? <p className="text-muted-foreground">A carregar...</p> : (
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>WhatsApp</TableHead>
                <TableHead>Veículo</TableHead>
                <TableHead>Zona</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Nenhum motorista encontrado</TableCell></TableRow>
              ) : filtered.map((m) => (
                <TableRow key={m.id}>
                  <TableCell className="font-medium">{m.nome_completo}</TableCell>
                  <TableCell>{m.whatsapp}</TableCell>
                  <TableCell>{m.tipo_veiculo || "-"}</TableCell>
                  <TableCell>{m.zona_trabalho || "-"}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusColors[m.status || "PENDENTE"]}>
                      {m.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 flex-wrap">
                      {m.status !== "APROVADO" && (
                        <Button size="sm" variant="outline" className="text-accent border-accent" onClick={() => updateStatus(m.id, "APROVADO")}>Aprovar</Button>
                      )}
                      {m.status !== "REJEITADO" && (
                        <Button size="sm" variant="outline" className="text-destructive border-destructive" onClick={() => updateStatus(m.id, "REJEITADO")}>Rejeitar</Button>
                      )}
                      {m.status !== "PENDENTE" && (
                        <Button size="sm" variant="outline" onClick={() => updateStatus(m.id, "PENDENTE")}>Pendente</Button>
                      )}
                      <Button size="sm" variant="ghost" onClick={() => { setEditItem(m); setDialogOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                      <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleDelete(m.id)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
