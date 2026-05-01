import { z } from 'zod';

export const loginSchema = z.object({
    usuario: z.string().nonempty("O usuário é obrigatório.").min(8, "O usuário deve ter no mínimo 8 caracteres."),
    senha: z.string().nonempty("A senha é obrigatóra").min(3, "A senha deve ter no mínimo 3 caracteres.")
})

export type LoginFormData = z.infer<typeof loginSchema>;