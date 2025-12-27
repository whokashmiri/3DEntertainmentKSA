"use server";

import { generateProjectDescription, GenerateProjectDescriptionInput } from "@/ai/flows/generate-project-description";
import { z } from "zod";

const formSchema = z.object({
  projectName: z.string().min(2, "Project name is required"),
  projectType: z.string().min(2, "Project type is required"),
  materialsUsed: z.string().min(2, "Materials are required"),
  industry: z.string().min(2, "Industry is required"),
  designDetails: z.string().min(10, "Design details must be at least 10 characters"),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  description?: string;
  isSubmitting?: boolean;
};

export async function generateDescriptionAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
    };
  }

  try {
    const result = await generateProjectDescription(parsed.data);
    return {
      message: "success",
      description: result.description,
    };
  } catch (e) {
    console.error(e);
    return {
      message: "An error occurred while generating the description.",
    };
  }
}
