"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { sendContactEmail } from "@/app/actions/index"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    
    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await sendContactEmail(formData)
      setResult(response)

      // Si fue exitoso, limpiar el formulario
      if (response.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setResult({
        success: false,
        message: "Error inesperado. Por favor intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Envíanos un mensaje</CardTitle>
        <CardDescription className="text-slate-300">Te responderemos en menos de 24 horas</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Nombre *</label>
              <Input
                name="name"
                placeholder="Tu nombre"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Email *</label>
              <Input
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-white">Empresa</label>
            <Input
              name="company"
              placeholder="Nombre de tu empresa (opcional)"
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-white">Mensaje *</label>
            <Textarea
              name="message"
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={4}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
            />
          </div>

          {/* Mostrar resultado */}
          {result && (
            <div
              className={`p-4 rounded-lg flex items-center space-x-2 ${
                result.success ? "bg-green-500/20 border border-green-500/30" : "bg-red-500/20 border border-red-500/30"
              }`}
            >
              {result.success ? (
                <CheckCircle className="h-5 w-5 text-green-400" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-400" />
              )}
              <span className={result.success ? "text-green-300" : "text-red-300"}>{result.message}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar mensaje
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
