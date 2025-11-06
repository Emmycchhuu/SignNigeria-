"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { SimpleIcon } from "@/components/simple-icons"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return

      const scrollY = window.scrollY
      const elements = heroRef.current.querySelectorAll("[data-scroll]")

      elements.forEach((el) => {
        const element = el as HTMLElement
        const offset = element.getAttribute("data-scroll-offset") || "30"
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
        {/* Background Elements */}
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
          {/* Left Content */}
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

          {/* Right Image */}
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To create a decentralized platform that empowers Nigerian communities by integrating their
                socio-economic, cultural, and historical assets into the blockchain economy.
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            {/* Vision */}
            <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                A fully decentralized Nigeria where blockchain connects businesses, education, healthcare, and heritage
                with global opportunities.
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Core Values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Community Driven", color: "from-primary", icon: "community" },
              { title: "Decentralization", color: "from-accent", icon: "link" },
              { title: "Transparency", color: "from-secondary", icon: "eye" },
              { title: "Cultural Sovereignty", color: "from-primary", icon: "building" },
              { title: "Innovation through Web3", color: "from-accent", icon: "lightning" },
              { title: "Inclusion & Education", color: "from-secondary", icon: "book" },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-transparent mb-4 group-hover:scale-110 transition-transform flex items-center justify-center text-accent">
                  <SimpleIcon type={value.icon} size="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Platforms */}
      <section id="ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">SIGNigeria Ecosystem</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Marketplace", desc: "Peer-to-peer commerce using crypto assets", icon: "shopping" },
              { title: "Health Hub", desc: "Blockchain-based health records & consultations", icon: "hospital" },
              { title: "EduChain", desc: "Smart learning platform with verified credentials", icon: "book" },
              { title: "CultureChain", desc: "NFT-based cultural artifacts & preservation", icon: "palette" },
              { title: "Media Network", desc: "Decentralized content & news platform", icon: "newspaper" },
              { title: "Entertainment", desc: "Creator tools & token-gated experiences", icon: "filmstrip" },
            ].map((platform, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-gradient-to-br from-card via-card/50 to-transparent border border-border/50 hover:border-accent/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mb-4 group-hover:scale-125 transition-transform text-accent flex items-center">
                  <SimpleIcon type={platform.icon} size="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.title}</h3>
                <p className="text-foreground/60">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Join Nigeria's Decentralized Future</h2>
            <p className="text-xl text-foreground/70">
              Be part of a movement empowering communities and preserving culture through Web3
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 rounded-full bg-primary text-white hover:bg-primary/90 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
              Join Discord
            </button>
            <a
              href="https://x.com/africasigngiant?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-accent/50 text-accent hover:bg-accent/10 font-semibold transition-all duration-300"
            >
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">SIGNigeria</h3>
              <p className="text-foreground/60 text-sm">Bringing Nigeria on-chain through community-driven Web3</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platforms</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    EduChain
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    CultureChain
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2025 SIGNigeria. All rights reserved.</p>
            <p>Empowering Communities • Preserving Culture • Building Web3</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
