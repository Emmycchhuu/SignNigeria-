"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      const elements = heroRef.current.querySelectorAll("[data-scroll]")
      elements.forEach((el) => {
        const element = el as HTMLElement
        element.style.transform = `translateY(${scrollY * 0.5}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 animate-fadeInUp hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 rounded-full border-2 border-primary/30 p-0.5 bg-gradient-to-br from-primary/20 to-transparent">
              <Image
                src="/signigeria-logo.png"
                alt="SIGNigeria"
                width={48}
                height={48}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="font-bold text-xl text-white hidden sm:inline">SIGNigeria</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="#ecosystem" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Platforms
            </Link>
            <Link
              href="/whitepaper"
              className="hidden sm:block text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              Whitepaper
            </Link>
            <Link
              href="/whitepaper"
              className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
            >
              Read Whitepaper
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
            data-scroll
          />
          <div
            className="absolute bottom-40 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
            data-scroll
          />
          <div
            className="absolute top-1/3 left-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
            data-scroll
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mt-12">
              <p className="text-sm font-medium text-secondary">Nigeria On-Chain</p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Empowering Communities
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Preserving Culture
              </span>
            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
              Join SIGNigeria's decentralized ecosystem connecting commerce, health, education, culture, and
              entertainment on the blockchain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/whitepaper"
                className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary/50 text-center"
              >
                Read Whitepaper
              </Link>
              <a
                href="https://x.com/africasigngiant?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-secondary/50 text-secondary hover:bg-secondary/10 transition-all duration-300 font-semibold text-center"
              >
                Join Community
              </a>
            </div>

            <div className="pt-8 flex items-center gap-12">
              <div>
                <p className="text-2xl font-bold text-accent">6</p>
                <p className="text-sm text-foreground/60">Platforms</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">∞</p>
                <p className="text-sm text-foreground/60">Possibilities</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl animate-glow" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3b9aff01-382f-4894-a738-f4b2fc815c86-SpTeuseoYUuaNyC9jjhBBUCXgk7iXX.jpeg"
                alt="SIGNigeria - Empowering Nigeria"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto flex justify-center flex-wrap gap-4">
          <a
            href="https://x.com/africasigngiant?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-secondary/50 text-secondary hover:bg-secondary/10 transition-all text-sm font-medium"
          >
            X
          </a>
          <a
            href="https://youtube.com/@africasigngiant?si=CgsYxqbJyLt_7Dfm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-secondary/50 text-secondary hover:bg-secondary/10 transition-all text-sm font-medium"
          >
            YouTube
          </a>
          <a
            href="https://medium.com/@AfricaSIGNGiant"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-secondary/50 text-secondary hover:bg-secondary/10 transition-all text-sm font-medium"
          >
            Medium
          </a>
          <a
            href="https://www.tiktok.com/@africasigngiant?_r=1&_t=ZS-91BMyCJ5BDj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-secondary/50 text-secondary hover:bg-secondary/10 transition-all text-sm font-medium"
          >
            TikTok
          </a>
          <a
            href="https://t.me/signigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-secondary/50 text-secondary hover:bg-secondary/10 transition-all text-sm font-medium"
          >
            Telegram
          </a>
        </div>
      </section>
    </div>
  )
}
