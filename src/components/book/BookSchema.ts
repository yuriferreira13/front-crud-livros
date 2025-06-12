import { z } from "zod";

export const bookSchema = z.object({
  title: z.string()
    .min(1, { message: "O título é obrigatório" })
    .max(100, { message: "O título não pode ultrapassar 100 caracteres" }),
  author: z.string()
    .min(1, { message: "O autor é obrigatório" })
    .max(50, { message: "O nome do autor não pode ultrapassar 50 caracteres" }),
  publishedYear: z.number()
    .int({ message: "O ano de publicação deve ser um número inteiro" })
    .min(1000, { message: "O ano de publicação deve ser maior que 1000" })
    .refine((value) => !isNaN(value), { message: "Ano de publicação inválido" }),
  isRead: z.boolean({ message: "O status de leitura é obrigatório" }),
});
