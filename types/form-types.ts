import * as z from 'zod';
import { LoginSchema, RegisterSchema } from '@/schemas';

export interface HooverFormTypes {
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

export interface LoginFormTypes extends z.infer<typeof LoginSchema> {
}

export interface RegisterFormTypes extends z.infer<typeof RegisterSchema> {
}