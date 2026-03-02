import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  BarChart3,
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Target,
  Globe,
  Laptop,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              soft3ch
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#servicios" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Servicios
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contacto
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href="#contacto">Hablemos </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 font-medium mb-6">
                <Zap className="h-3.5 w-3.5" />
                Software a medida · Corrientes, Argentina
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Transformamos tus{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ideas</span>{" "}
                en software
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
                Diseñamos software a medida, gestionamos proyectos y realizamos análisis de sistemas para impulsar tu negocio hacia el futuro digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-base px-8 py-6 shadow-lg shadow-blue-500/25"
                >
                  <Link href="#contacto">
                    Comenzar proyecto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 border border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                  <Link href="#portfolio">Ver nuestro trabajo</Link>
                </Button>
              </div>

              {/* Social proof mini-stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
                <div>
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-sm text-slate-400">Proyectos entregados</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">5★</p>
                  <p className="text-sm text-slate-400">Valoración de clientes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3 años</p>
                  <p className="text-sm text-slate-400">De experiencia</p>
                </div>
              </div>
            </div>

            {/* Right: Code mockup visual */}
            <div className="relative hidden lg:block">
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl shadow-blue-900/30 overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900/80 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-slate-400 font-mono">soft3ch · proyecto.tsx</span>
                </div>
                {/* Code lines */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <p><span className="text-blue-400">import</span> <span className="text-white">{"{ Software }"}</span> <span className="text-blue-400">from</span> <span className="text-green-400">&apos;@soft3ch/core&apos;</span></p>
                  <p className="mt-3"><span className="text-purple-400">const</span> <span className="text-yellow-300">proyecto</span> <span className="text-white">=</span> <span className="text-blue-400">new</span> <span className="text-cyan-300">Software</span><span className="text-white">({"{"}</span></p>
                  <p className="pl-6"><span className="text-slate-400">cliente</span><span className="text-white">:</span> <span className="text-green-400">&quot;Tu empresa&quot;</span><span className="text-white">,</span></p>
                  <p className="pl-6"><span className="text-slate-400">tipo</span><span className="text-white">:</span> <span className="text-green-400">&quot;a medida&quot;</span><span className="text-white">,</span></p>
                  <p className="pl-6"><span className="text-slate-400">calidad</span><span className="text-white">:</span> <span className="text-orange-400">&quot;premium&quot;</span><span className="text-white">,</span></p>
                  <p className="pl-6"><span className="text-slate-400">soporte</span><span className="text-white">:</span> <span className="text-orange-400">&quot;24/7&quot;</span><span className="text-white">,</span></p>
                  <p><span className="text-white">{"})"};</span></p>
                  <p className="mt-3"><span className="text-purple-400">await</span> <span className="text-yellow-300">proyecto</span><span className="text-white">.</span><span className="text-cyan-300">launch</span><span className="text-white">()</span></p>
                  <p className="mt-4 text-green-400">{"// ✓ Proyecto lanzado exitosamente"}</p>
                  <p className="text-slate-500">{"// ✓ Tests pasando: 100%"}</p>
                  <p className="text-slate-500">{"// ✓ Deploy en producción"}</p>
                  <p className="mt-2"><span className="inline-block w-2 h-4 bg-blue-400 animate-pulse" /></p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
                Deploy exitoso ✓
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-2 rounded-xl shadow-lg">
                <span className="text-blue-400">⚡</span> Entrega en tiempo récord
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Soluciones tecnológicas diseñadas para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Servicio 1 */}
            <div className="group flex gap-5 p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5">Sitios Web y Landing Pages</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">Presencia digital profesional: sitios corporativos, páginas de campaña y tiendas online optimizadas para conversión y SEO.</p>
                <div className="flex flex-wrap gap-2">
                  {["Responsive", "SEO", "E-commerce", "CMS"].map(t => (
                    <span key={t} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Servicio 2 */}
            <div className="group flex gap-5 p-6 rounded-2xl border border-slate-100 bg-white hover:border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5">Software a Medida</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">Desarrollamos sistemas personalizados que se adaptan exactamente a los procesos de tu empresa: ERPs, dashboards, APIs y más.</p>
                <div className="flex flex-wrap gap-2">
                  {["ERP", "APIs", "Dashboards", "Integraciones"].map(t => (
                    <span key={t} className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Servicio 3 */}
            <div className="group flex gap-5 p-6 rounded-2xl border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5">Análisis y Consultoría IT</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">Evaluamos tus sistemas actuales, definimos requerimientos y diseñamos arquitecturas robustas antes de escribir una sola línea de código.</p>
                <div className="flex flex-wrap gap-2">
                  {["Relevamiento", "Arquitectura", "Auditoría", "Roadmap"].map(t => (
                    <span key={t} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Servicio 4 */}
            <div className="group flex gap-5 p-6 rounded-2xl border border-slate-100 bg-white hover:border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5">Automatización de Procesos</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">Identificamos tareas repetitivas y las automatizamos con herramientas modernas, liberando tiempo de tu equipo para lo que realmente importa.</p>
                <div className="flex flex-wrap gap-2">
                  {["Workflows", "Bots", "Notificaciones", "Reportes"].map(t => (
                    <span key={t} className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Trabajo</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Algunos proyectos que hemos desarrollado para nuestros clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Porto Store — screenshot real */}
            <Link href="https://tiendaportostore.com/" target="_blank" className="group block">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <Image
                    src="/porto-store.png"
                    alt="Porto Store — E-commerce de moda"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <ArrowRight className="h-3 w-3" /> Ver proyecto
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Porto Store</CardTitle>
                    <span className="text-xs bg-pink-100 text-pink-700 font-medium px-2 py-0.5 rounded-full">E-commerce</span>
                  </div>
                  <CardDescription>E-commerce moderno de moda y accesorios con experiencia de compra optimizada.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* NEA Servicios — screenshot real */}
            <Link href="https://serviciosnea.vercel.app/" target="_blank" className="group block">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <Image
                    src="/nea-servicios.png"
                    alt="NEA Servicios — Sector industrial"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <ArrowRight className="h-3 w-3" /> Ver proyecto
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>NEA Servicios</CardTitle>
                    <span className="text-xs bg-emerald-100 text-emerald-700 font-medium px-2 py-0.5 rounded-full">Corporativo</span>
                  </div>
                  <CardDescription>Soluciones integrales para el sector industrial y forestal con gestión operativa eficiente.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* SAT App — screenshot real */}
            <Link href="https://sat-rho.vercel.app/landing" target="_blank" className="group block">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <Image
                    src="/sat-app.png"
                    alt="SAT — App Seguridad e Higiene"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <ArrowRight className="h-3 w-3" /> Ver proyecto
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>App — Seguridad e Higiene</CardTitle>
                    <span className="text-xs bg-purple-100 text-purple-700 font-medium px-2 py-0.5 rounded-full">SaaS</span>
                  </div>
                  <CardDescription>Aplicación web para gestión de equipos y reportes en seguridad e higiene laboral.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* ERP — placeholder estilizado */}
            <Link href="/erp-system/panel.html" className="group block">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Target className="h-10 w-10 mb-2 opacity-80" />
                    <span className="text-sm font-medium opacity-70">Sistema ERP</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <ArrowRight className="h-3 w-3" /> Ver demo
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Sistema de Gestión ERP</CardTitle>
                    <span className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">Enterprise</span>
                  </div>
                  <CardDescription>Plataforma integral para la gestión de recursos empresariales con módulos personalizados.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Dashboard — placeholder estilizado */}
            <Link href="/analytics/dashboard.html" className="group block">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-emerald-500 to-cyan-600 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <BarChart3 className="h-10 w-10 mb-2 opacity-80" />
                    <span className="text-sm font-medium opacity-70">Analytics Dashboard</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <ArrowRight className="h-3 w-3" /> Ver demo
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Dashboard Analítico</CardTitle>
                    <span className="text-xs bg-emerald-100 text-emerald-700 font-medium px-2 py-0.5 rounded-full">Analytics</span>
                  </div>
                  <CardDescription>Herramienta de visualización de datos en tiempo real para toma de decisiones estratégicas.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Real Estate — placeholder estilizado */}
            <Link href="/real-state/home.html" className="group block">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-violet-500 to-fuchsia-600 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Laptop className="h-10 w-10 mb-2 opacity-80" />
                    <span className="text-sm font-medium opacity-70">Real Estate App</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <ArrowRight className="h-3 w-3" /> Ver demo
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Real Estate</CardTitle>
                    <span className="text-xs bg-violet-100 text-violet-700 font-medium px-2 py-0.5 rounded-full">Inmobiliaria</span>
                  </div>
                  <CardDescription>Plataforma para gestión y comunicación en el sector inmobiliario.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Nos diferenciamos por nuestro enfoque personalizado y resultados comprobados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiencia Comprobada</h3>
              <p className="text-slate-600">Más de 50 proyectos exitosos en diversos sectores</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-slate-600">Metodologías ágiles para resultados en tiempo récord</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipo Experto</h3>
              <p className="text-slate-600">Profesionales especializados en las últimas tecnologías</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
              <p className="text-slate-600">Acompañamiento continuo después de la entrega</p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para comenzar?</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span>soft3ch.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <span>+54 3756 43 3760</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span>Corrientes, Argentina</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Horarios de Atención</h4>
                  <p className="text-slate-300">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-slate-300">Sábados: 9:00 - 13:00</p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                soft3ch
              </span>
            </div>
            <div className="text-slate-400 text-sm">© 2026 Soft3ch. Todos los derechos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
