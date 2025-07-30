"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

const contactEmails = [
  process.env.CONTACT_EMAIL ,
  process.env.CONTACT_EMAIL_1,
  process.env.CONTACT_EMAIL_2,
  process.env.CONTACT_EMAIL_3,
].filter(email => email && email.trim() !== "") as string[];

const sendFrom = process.env.RESEND_EMAIL || "Soft3ch <onboarding@soft3ch.com>";

const sendTo = contactEmails.length > 0 ? contactEmails : ['soft3ch.dev@gmail.com'];

export async function sendContactEmail(formData: FormData) {
  try {
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    }

    // Validación básica
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        error: "Por favor completa todos los campos requeridos.",
      }
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Por favor ingresa un email válido.",
      }
    }

    // Preparamos las promesas de envío de correos
    const emailToSoft3chPromise = resend.emails.send({
      from: sendFrom,
      to: sendTo,
      subject: `Nuevo contacto desde la web - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nuevo mensaje de contacto</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Detalles del contacto:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #3b82f6;">
              <strong style="color: #3b82f6;">Nombre:</strong>
              <p style="margin: 5px 0 0 0; color: #475569;">${data.name}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #8b5cf6;">
              <strong style="color: #8b5cf6;">Email:</strong>
              <p style="margin: 5px 0 0 0; color: #475569;">${data.email}</p>
            </div>
            
            ${
              data.company
                ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #10b981;">
              <strong style="color: #10b981;">Empresa:</strong>
              <p style="margin: 5px 0 0 0; color: #475569;">${data.company}</p>
            </div>
            `
                : ""
            }
            
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <strong style="color: #f59e0b;">Mensaje:</strong>
              <p style="margin: 10px 0 0 0; color: #475569; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          
          <div style="background: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              Este mensaje fue enviado desde el formulario de contacto de soft3ch.com
            </p>
          </div>
        </div>
      `,
    });

    const emailToClientPromise = resend.emails.send({
      from: sendFrom,
      to: [data.email],
      subject: "Gracias por contactarnos - Soft3ch",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">¡Gracias por contactarnos!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Hola <strong>${data.name}</strong>,
            </p>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo en las próximas 24 horas.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e293b; margin: 0 0 10px 0;">Tu mensaje:</h3>
              <p style="color: #64748b; margin: 0; font-style: italic;">"${data.message}"</p>
            </div>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Mientras tanto, puedes conocer más sobre nuestros servicios en nuestro sitio web.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://soft3ch.com" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Visitar nuestro sitio
              </a>
            </div>
          </div>
          
          <div style="background: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0 0 10px 0; font-size: 18px; font-weight: bold;">
              Soft3ch
            </p>
            <p style="color: #64748b; margin: 0; font-size: 14px;">
              Transformamos tus ideas en software
            </p>
          </div>
        </div>
      `,
    });
    
    // Esperamos que ambas promesas se resuelvan
    await Promise.all([emailToSoft3chPromise, emailToClientPromise]);
    
    return {
      success: true,
      message: "Mensaje enviado correctamente. Te responderemos pronto.",
    }
  } catch (error) {
    console.error("Error al enviar correos:", error) // Mensaje de error más general
    return {
      success: false,
      error: "Hubo un error al enviar el mensaje. Por favor intenta nuevamente.",
    }
  }
}