'use server';

import { z } from "zod";

const registerValidationScheme = z.object({
    name: z.string().min(12),
    school: z.string().min(12),
    gender: z.enum(['male', 'female']),
    mobilePhone: z.string().regex(new RegExp('/^0[1-9]{1}[0-9]{8}/$'), 'Invalid phone number'),
    whatsapp: z.string().regex(new RegExp('/^0[1-9]{1}[0-9]{8}/$'), 'Invalid WhatsApp number'),
});

export async function registerStudent(formData:FormData) {
    const parsed = registerValidationScheme.parse(formData);
    console.log(parsed);
}