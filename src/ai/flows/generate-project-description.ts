'use server';

/**
 * @fileOverview Generates engaging descriptions of completed projects, highlighting design details, materials, and industry specifics.
 *
 * - generateProjectDescription - A function that generates a project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectType: z.string().describe('The type of the project (e.g., creative design, engineering, CNC machining).'),
  materialsUsed: z.string().describe('A comma-separated list of materials used in the project.'),
  industry: z.string().describe('The industry the project belongs to.'),
  designDetails: z.string().describe('Detailed design aspects of the project.'),
});

export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z.string().describe('A compelling description of the project.'),
});

export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const generateProjectDescriptionPrompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are a marketing expert skilled at writing compelling project descriptions.

  Based on the project details provided, generate an engaging description that highlights the design details, materials used, and industry specifics.

  Project Name: {{projectName}}
  Project Type: {{projectType}}
  Materials Used: {{materialsUsed}}
  Industry: {{industry}}
  Design Details: {{designDetails}}

  Write a concise and impactful description that captures the essence of the project.`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateProjectDescriptionPrompt(input);
    return output!;
  }
);
