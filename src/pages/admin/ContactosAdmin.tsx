import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Search } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Contacto = Tables<"contactos_site">;

export default function ContactosAdmin() {
  const [data, setData] = useState<Contacto[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    const { data: rows } = await supabase.from("contactos_site").select("*").order("data_envio", { ascending: false });
    setData(rows || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Apagar este contacto?")) return;
    await supabase.from("contactos_site").delete().eq("id", id);
    toast({ title: "Contacto apagado" });
    fetchData();
  };

  const filtered = data.filter((c) =>
    (c.nome || "").toLowerCase().includes(search.toLowerCase()) ||
    (c.assunto || "").toLowerCase().includes(search.toLowerCase()) ||
    (c.contacto || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Contactos do Site</h1>

      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Pesquisar por nome, assunto ou contacto..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      {loading ? <p className="text-muted-foreground">A carregar...</p> : (
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead>Assunto</TableHead>
                <TableHead>Mensagem</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Sem contactos</TableCell></TableRow>
              ) : filtered.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.nome || "-"}</TableCell>
                  <TableCell>{c.contacto || "-"}</TableCell>
                  <TableCell>{c.assunto || "-"}</TableCell>
                  <TableCell className="max-w-[250px] truncate">{c.mensagem || "-"}</TableCell>
                  <TableCell>{c.data_envio ? new Date(c.data_envio).toLocaleDateString("pt") : "-"}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleDelete(c.id)}><Trash2 className="h-4 w-4" /></Button>
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
