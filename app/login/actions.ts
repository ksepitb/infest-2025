"use server";

import { error } from "console";
import { z } from "zod";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";

const testUser = {
    id: "1",
    email: "nicholasaragih@gmail.com",
    password: "infestgacor",
    namaTim: "dhobyghaut"
}

const loginSchema = z.object({
  email: z.string().email({message: "Email tidak valid"}).trim(),
  password: z.string().min(8, {message: "Password minimal 8 karakter"}).trim(),
});


export async function login(prevState: any, formData: FormData) {
    const res = loginSchema.safeParse(Object.fromEntries(formData));
    if (!res.success) {
        return {
            errors: res.error.flatten().fieldErrors,
        }
    }

    const { email, password } = res.data

    if (email !== testUser.email || password !== testUser.password) {
        return {
            errors: {
                email: ["Email atau password salah"],
            }
        }
    }

    await createSession(testUser.id);

    redirect("/")

};

export async function logout() {
    await deleteSession();
    redirect("/login");
}

