export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      activacoes_motoristas: {
        Row: {
          created_at: string | null
          data: string
          id: string
          local: string | null
          motoristas_abordados: number | null
          motoristas_registados: number | null
          observacoes: string | null
        }
        Insert: {
          created_at?: string | null
          data?: string
          id?: string
          local?: string | null
          motoristas_abordados?: number | null
          motoristas_registados?: number | null
          observacoes?: string | null
        }
        Update: {
          created_at?: string | null
          data?: string
          id?: string
          local?: string | null
          motoristas_abordados?: number | null
          motoristas_registados?: number | null
          observacoes?: string | null
        }
        Relationships: []
      }
      contactos_site: {
        Row: {
          assunto: string | null
          contacto: string | null
          data_envio: string | null
          id: string
          mensagem: string | null
          nome: string | null
        }
        Insert: {
          assunto?: string | null
          contacto?: string | null
          data_envio?: string | null
          id?: string
          mensagem?: string | null
          nome?: string | null
        }
        Update: {
          assunto?: string | null
          contacto?: string | null
          data_envio?: string | null
          id?: string
          mensagem?: string | null
          nome?: string | null
        }
        Relationships: []
      }
      motoristas: {
        Row: {
          aprovado_por: string | null
          data_aprovacao: string | null
          data_registo: string | null
          id: string
          local_registo: string | null
          matricula: string | null
          nome_completo: string
          observacoes: string | null
          status: string | null
          tipo_veiculo: string | null
          whatsapp: string
          zona_trabalho: string | null
        }
        Insert: {
          aprovado_por?: string | null
          data_aprovacao?: string | null
          data_registo?: string | null
          id?: string
          local_registo?: string | null
          matricula?: string | null
          nome_completo: string
          observacoes?: string | null
          status?: string | null
          tipo_veiculo?: string | null
          whatsapp: string
          zona_trabalho?: string | null
        }
        Update: {
          aprovado_por?: string | null
          data_aprovacao?: string | null
          data_registo?: string | null
          id?: string
          local_registo?: string | null
          matricula?: string | null
          nome_completo?: string
          observacoes?: string | null
          status?: string | null
          tipo_veiculo?: string | null
          whatsapp?: string
          zona_trabalho?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string | null
          id: string
          is_admin: boolean | null
        }
        Insert: {
          created_at?: string | null
          full_name?: string | null
          id: string
          is_admin?: boolean | null
        }
        Update: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          is_admin?: boolean | null
        }
        Relationships: []
      }
      relatorios_diarios: {
        Row: {
          atualizacoes_dados: number | null
          carteira_percent: number | null
          criado_em: string | null
          data_relatorio: string
          id: string
          novos_registos: number | null
          observacoes: string | null
          perdidos_achados: number | null
          questoes_motoristas: string | null
          questoes_usuarios: string | null
        }
        Insert: {
          atualizacoes_dados?: number | null
          carteira_percent?: number | null
          criado_em?: string | null
          data_relatorio: string
          id?: string
          novos_registos?: number | null
          observacoes?: string | null
          perdidos_achados?: number | null
          questoes_motoristas?: string | null
          questoes_usuarios?: string | null
        }
        Update: {
          atualizacoes_dados?: number | null
          carteira_percent?: number | null
          criado_em?: string | null
          data_relatorio?: string
          id?: string
          novos_registos?: number | null
          observacoes?: string | null
          perdidos_achados?: number | null
          questoes_motoristas?: string | null
          questoes_usuarios?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
