"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateDescriptionAction, FormState } from "../actions";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Generate Description"}
    </Button>
  );
}

export function DescriptionGeneratorForm() {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useFormState(generateDescriptionAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  const handleCopy = () => {
    if (state.description) {
      navigator.clipboard.writeText(state.description);
      toast({
        title: "Copied to clipboard!",
      });
    }
  };

  return (
    <>
      <Card className="bg-secondary border-border/50">
        <form ref={formRef} action={formAction}>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>
              Provide the details of the project to generate a description.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" name="projectName" placeholder="e.g., Kinetic Facade" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type</Label>
              <Input id="projectType" name="projectType" placeholder="e.g., Creative Design, CNC Machining" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="materialsUsed">Materials Used</Label>
              <Input id="materialsUsed" name="materialsUsed" placeholder="e.g., Aluminum, Carbon Fiber, Steel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" name="industry" placeholder="e.g., Architecture, Automotive" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="designDetails">Design Details</Label>
              <Textarea
                id="designDetails"
                name="designDetails"
                placeholder="Describe key design features, challenges, and solutions."
                required
                className="min-h-[120px]"
              />
            </div>
            {state.message && state.message !== "success" && (
                <p className="text-destructive text-sm">{state.message}</p>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      {state.description && (
        <Card className="mt-8 bg-secondary border-border/50">
          <CardHeader>
            <CardTitle>Generated Description</CardTitle>
            <CardDescription>
              Here is the AI-generated description for your project.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative rounded-md border border-border bg-background p-4">
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 h-7 w-7"
                onClick={handleCopy}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
              <p className="text-muted-foreground whitespace-pre-wrap">{state.description}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
