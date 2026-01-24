'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
  Heart,
  Star,
  ChevronRight,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tentang', 'keunggulan', 'program', 'ppdb', 'prestasi', 'kontak']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">MTs AL IHSAN</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: 'home', label: 'Beranda' },
                { id: 'tentang', label: 'Tentang' },
                { id: 'keunggulan', label: 'Keunggulan' },
                { id: 'program', label: 'Program' },
                { id: 'ppdb', label: 'PPDB' },
                { id: 'prestasi', label: 'Prestasi' },
                { id: 'kontak', label: 'Kontak' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection('ppdb')} className="bg-primary hover:bg-primary/90">
                Daftar Sekarang
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t">
              {[
                { id: 'home', label: 'Beranda' },
                { id: 'tentang', label: 'Tentang' },
                { id: 'keunggulan', label: 'Keunggulan' },
                { id: 'program', label: 'Program' },
                { id: 'ppdb', label: 'PPDB' },
                { id: 'prestasi', label: 'Prestasi' },
                { id: 'kontak', label: 'Kontak' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button onClick={() => scrollToSection('ppdb')} className="w-full bg-primary hover:bg-primary/90">
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgMGgydjJoLTJ2LTJ6bTAgMGgydjJoLTJ2LTJ6bTAgMGgydjJoLTJ2LTJ6bTAgMGgydjJoLTJ2LTJ6bTAgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <Badge className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Penerimaan Peserta Didik Baru 2024/2025 Telah Dibuka!
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-foreground">Membentuk Generasi</span>
                <span className="block text-primary">Berakhlak Mulia & Berprestasi</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Bergabunglah bersama <strong className="text-foreground">MTs AL IHSAN</strong> untuk mendapatkan pendidikan berkualitas
                yang mengintegrasikan nilai Islami dengan kurikulum modern
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection('ppdb')}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Daftar PPDB Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => scrollToSection('tentang')}
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Pelajari Lebih Lanjut
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
                {[
                  { icon: Users, label: 'Siswa Aktif', value: '500+' },
                  { icon: GraduationCap, label: 'Guru Profesional', value: '45+' },
                  { icon: Award, label: 'Prestasi', value: '100+' },
                  { icon: BookOpen, label: 'Program Ekstrakurikuler', value: '15+' }
                ].map((stat, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur border-primary/10">
                    <CardContent className="p-6 text-center">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronRight className="h-8 w-8 text-muted-foreground rotate-90" />
          </div>
        </section>

        {/* Tentang Section */}
        <section id="tentang" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Tentang Kami</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Mengapa Memilih MTs AL IHSAN?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Madrasah Tsanawiyah Al Ihsan adalah lembaga pendidikan yang berdedikasi mencetak generasi
                  cerdas, berakhlak mulia, dan siap menghadapi tantangan masa depan
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Visi Kami
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Menjadi madrasah tsanawiyah unggulan yang menghasilkan lulusan berakhlak mulia,
                        berilmu pengetahuan luas, dan berkarakter Islami yang siap bersaing di era global
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Misi Kami
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-muted-foreground">
                        {[
                          'Menyelenggarakan pendidikan berkualitas dengan kurikulum terpadu',
                          'Mengembangkan potensi siswa melalui pembinaan karakter',
                          'Menciptakan lingkungan belajar yang kondusif dan Islami',
                          'Membekali siswa dengan keterampilan teknologi modern',
                          'Mengembangkan kerjasama dengan berbagai institusi pendidikan'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <BookOpen className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Kurikulum Terpadu</h4>
                            <p className="text-sm text-muted-foreground">
                              Menggabungkan kurikulum nasional dan kepesantrenan
                            </p>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Tenaga Pendidik Profesional</h4>
                            <p className="text-sm text-muted-foreground">
                              Guru-guru bersertifikasi dan berpengalaman
                            </p>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Heart className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Lingkungan Islami</h4>
                            <p className="text-sm text-muted-foreground">
                              Suasana belajar yang religius dan harmonis
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan Section */}
        <section id="keunggulan" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Keunggulan</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Keunggulan MTs AL IHSAN
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Berbagai keunggulan yang membuat MTs AL IHSAN menjadi pilihan terbaik untuk pendidikan putra-putri Anda
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: GraduationCap,
                    title: 'Pendidikan Berkualitas',
                    description: 'Kurikulum terpadu yang menggabungkan pendidikan umum dan kepesantrenan dengan standar nasional'
                  },
                  {
                    icon: Users,
                    title: 'Guru Profesional',
                    description: 'Tenaga pengajar bersertifikasi, berpengalaman, dan berdedikasi tinggi dalam mendidik siswa'
                  },
                  {
                    icon: BookOpen,
                    title: 'Fasilitas Lengkap',
                    description: 'Ruang kelas nyaman, laboratorium komputer, perpustakaan, mushola, dan fasilitas olahraga'
                  },
                  {
                    icon: Award,
                    title: 'Prestasi Unggulan',
                    description: 'Berbagai prestasi akademik dan non-akademik di tingkat kabupaten hingga nasional'
                  },
                  {
                    icon: Heart,
                    title: 'Pendidikan Karakter',
                    description: 'Pembentukan karakter Islami dan budi pekerti luhur melalui program khusus'
                  },
                  {
                    icon: Star,
                    title: 'Ekstrakurikuler',
                    description: 'Beragam kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat siswa'
                  }
                ].map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                    <CardHeader>
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Program</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Program Unggulan
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Program-program yang dirancang untuk mengembangkan potensi siswa secara optimal
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <BookOpen className="h-6 w-6 text-primary" />
                      Program Akademik
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {[
                        'Tahfidz Al-Quran (Juz 30 dan pilihan)',
                        'Bahasa Arab dan Bahasa Inggris Intensif',
                        'Matematika dan Sains Terapan',
                        'TIK dan Digital Skills',
                        'Pendidikan Agama Islam Terpadu'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Users className="h-6 w-6 text-primary" />
                      Program Ekstrakurikuler
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {[
                        'Pramuka',
                        'PMR',
                        'Paskibra',
                        'Rohis',
                        'Olahraga (Futsal, Basket, Voli)',
                        'Seni (Nasyid, Tari, Kaligrafi)',
                        'KIR (Karya Ilmiah Remaja)',
                        'Komputer & Coding'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* PPDB Section */}
        <section id="ppdb" className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-primary text-primary-foreground border-primary">Pendaftaran Dibuka!</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  PPDB 2024/2025
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Penerimaan Peserta Didik Baru Tahun Pelajaran 2024/2025
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Calendar className="h-6 w-6 text-primary" />
                      Informasi Pendaftaran
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary text-primary-foreground mt-0.5">Gelombang 1</Badge>
                        <div>
                          <p className="font-medium text-foreground">1 Februari - 31 Maret 2024</p>
                          <p className="text-sm text-muted-foreground">Prioritas dan potongan biaya</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary text-primary-foreground mt-0.5">Gelombang 2</Badge>
                        <div>
                          <p className="font-medium text-foreground">1 April - 31 Mei 2024</p>
                          <p className="text-sm text-muted-foreground">Reguler</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary text-primary-foreground mt-0.5">Gelombang 3</Badge>
                        <div>
                          <p className="font-medium text-foreground">1 Juni - 15 Juli 2024</p>
                          <p className="text-sm text-muted-foreground">Kursi terbatas</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                      Persyaratan Pendaftaran
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-6">
                    <ul className="space-y-3">
                      {[
                        'Mengisi formulir pendaftaran',
                        'Foto copy ijazah SD/MI (legalisir)',
                        'Foto copy SKHUN SD/MI (legalisir)',
                        'Foto copy kartu keluarga',
                        'Pas foto 3x4 (4 lembar)',
                        'Foto copy akta kelahiran',
                        'Surat keterangan sehat dari dokter',
                        'Surat keterangan berkelakuan baik dari sekolah asal'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary to-primary/90 border-0 text-primary-foreground">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Siap Bergabung dengan Keluarga Besar MTs AL IHSAN?</h3>
                    <p className="text-primary-foreground/90 mb-6">
                      Daftarkan putra-putri Anda sekarang dan berikan mereka pendidikan terbaik
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                        <Phone className="mr-2 h-5 w-5" />
                        Hubungi Kami
                      </Button>
                      <Button size="lg" variant="outline" className="border-background text-primary-foreground hover:bg-background/10">
                        <Mail className="mr-2 h-5 w-5" />
                        Kirim Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Prestasi Section */}
        <section id="prestasi" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Prestasi</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Prestasi Siswa
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Berbagai prestasi yang telah diraih oleh siswa MTs AL IHSAN
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    year: '2023',
                    category: 'Akademik',
                    title: 'Juara 1 Olimpiade Matematika Tingkat Kabupaten',
                    level: 'Kabupaten'
                  },
                  {
                    year: '2023',
                    category: 'Seni',
                    title: 'Juara 2 Lomba Nasyid Tingkat Provinsi',
                    level: 'Provinsi'
                  },
                  {
                    year: '2023',
                    category: 'Olahraga',
                    title: 'Juara 1 Turnamen Futsal Tingkat Kabupaten',
                    level: 'Kabupaten'
                  },
                  {
                    year: '2022',
                    category: 'Akademik',
                    title: 'Juara Harapan 1 KIR Nasional',
                    level: 'Nasional'
                  },
                  {
                    year: '2022',
                    category: 'Tahfidz',
                    title: 'Juara 1 Lomba Tahfidz Juz 30',
                    level: 'Kabupaten'
                  },
                  {
                    year: '2021',
                    category: 'Bahasa',
                    title: 'Juara 2 Lomba Pidato Bahasa Arab',
                    level: 'Kabupaten'
                  }
                ].map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <Badge className="w-fit mb-2 bg-primary/10 text-primary border-primary/20">
                        {item.year}
                      </Badge>
                      <Badge className="w-fit mb-2 bg-primary text-primary-foreground">
                        {item.category}
                      </Badge>
                      <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>{item.level}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kontak Section */}
        <section id="kontak" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Kontak</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan seputar PPDB atau informasi lainnya
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Informasi Kontak</CardTitle>
                    <CardDescription>Kami siap membantu Anda</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">Telepon</h4>
                          <p className="text-muted-foreground">(021) 1234-5678</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">Email</h4>
                          <p className="text-muted-foreground">info@mtsalihsan.sch.id</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">Alamat</h4>
                          <p className="text-muted-foreground">
                            Jl. Pendidikan No. 123, Kelurahan Sejahtera,<br />
                            Kecamatan Maju, Kota Berkah, 12345
                          </p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium text-foreground mb-3">Jam Operasional</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Senin - Kamis</span>
                          <span>07:00 - 15:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Jumat</span>
                          <span>07:00 - 11:30</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sabtu</span>
                          <span>08:00 - 12:00</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Pertanyaan Umum</CardTitle>
                    <CardDescription>FAQ PPDB</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        q: 'Kapan PPDB dibuka?',
                        a: 'PPDB dibuka mulai 1 Februari 2024 dengan 3 gelombang pendaftaran.'
                      },
                      {
                        q: 'Berapa biaya pendaftaran?',
                        a: 'Biaya pendaftaran Rp 200.000,- untuk semua gelombang.'
                      },
                      {
                        q: 'Apakah ada potongan biaya?',
                        a: 'Ya, gelombang 1 mendapatkan potongan biaya pendaftaran dan uang pangkal.'
                      },
                      {
                        q: 'Bagaimana cara mendaftar?',
                        a: 'Silakan datang ke sekretariat MTs AL IHSAN dengan membawa persyaratan lengkap.'
                      }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-medium text-foreground">{item.q}</h4>
                        <p className="text-sm text-muted-foreground">{item.a}</p>
                        {index < 3 && <Separator />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Bergabunglah Bersama Kami!
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Jangan lewatkan kesempatan untuk memberikan pendidikan terbaik bagi putra-putri Anda.
                Daftarkan sekarang sebelum kuota terpenuhi!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => scrollToSection('ppdb')}
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6"
                >
                  Daftar PPDB Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => scrollToSection('kontak')}
                  size="lg"
                  variant="outline"
                  className="border-background text-primary-foreground hover:bg-background/10 text-lg px-8 py-6"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">MTs AL IHSAN</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Membentuk generasi berakhlak mulia dan berprestasi untuk masa depan yang lebih baik
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Menu</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                    Beranda
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('tentang')} className="hover:text-primary transition-colors">
                    Tentang Kami
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('ppdb')} className="hover:text-primary transition-colors">
                    PPDB
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('kontak')} className="hover:text-primary transition-colors">
                    Kontak
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Program</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Program Akademik</li>
                <li>Ekstrakurikuler</li>
                <li>Tahfidz Al-Quran</li>
                <li>Bahasa Arab & Inggris</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Kontak</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (021) 1234-5678
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@mtsalihsan.sch.id
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Jl. Pendidikan No. 123, Kota Berkah</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 MTs AL IHSAN. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
