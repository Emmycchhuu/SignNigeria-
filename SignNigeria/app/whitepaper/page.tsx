"use client"

import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { useState } from "react"

export default function WhitepaperPage() {
  const [scrollToTop, setScrollToTop] = useState(false)

  const toggleScrollToTop = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 300) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }
    }
  }

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            SIGNigeria
          </Link>
          <Link href="/" className="text-sm text-foreground/70 hover:text-accent transition-colors">
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="space-y-4 mb-12 animate-slideInLeft">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            SIGNigeria
            <span className="block text-primary">Whitepaper</span>
          </h1>
          <p className="text-xl text-foreground/70">Bringing Nigeria On-Chain • Building Web3 Communities</p>
          <p className="text-sm text-foreground/60">Draft 1.0</p>
        </div>

        {/* Executive Summary */}
        <section className="space-y-6 mb-16 p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-slideInRight">
          <h2 className="text-4xl font-bold text-white">Executive Summary</h2>
          <div className="space-y-4 text-foreground/80">
            <h3 className="text-2xl font-semibold text-accent">Introduction to SIGNigeria</h3>
            <p className="leading-relaxed">
              SIGNigeria represents a transformative vision: bringing Nigeria on-chain. This whitepaper outlines our
              comprehensive approach to integrating Nigerian communities, cultural heritage, and economic opportunities
              into the blockchain economy.
            </p>

            <h3 className="text-2xl font-semibold text-accent mt-6">Why Now: The Urgency and Opportunity</h3>
            <p className="leading-relaxed">
              Nigeria stands at a critical juncture. With over 218 million people and a rapidly growing tech-savvy youth
              population, the nation is primed to become a leader in Web3 adoption. SIGNigeria bridges the gap between
              traditional socio-economic structures and decentralized blockchain solutions.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="space-y-8 mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Mission</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              To create a decentralized platform that empowers Nigerian communities by integrating their socio-economic,
              cultural, and historical assets into the blockchain economy.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/20 via-secondary/5 to-transparent border border-secondary/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Vision</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              A fully decentralized Nigeria where blockchain connects businesses, education, healthcare, and heritage
              with global opportunities. A nation where Web3 tools empower individuals and communities to control their
              economic destinies.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-6 mb-16">
          <h2 className="text-4xl font-bold text-white">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Community Driven",
                desc: "Every decision is made with communities at the center, ensuring inclusive growth and shared benefits.",
              },
              {
                title: "Decentralization",
                desc: "We believe in removing intermediaries and empowering individuals through decentralized governance.",
              },
              {
                title: "Transparency",
                desc: "All operations, transactions, and governance decisions are transparent and verifiable on-chain.",
              },
              {
                title: "Cultural Sovereignty",
                desc: "Nigerian culture, heritage, and traditions remain sovereign and under community control.",
              },
              {
                title: "Innovation through Web3",
                desc: "We leverage blockchain technology to solve real-world problems in Nigerian communities.",
              },
              {
                title: "Inclusion & Education",
                desc: "Everyone deserves access to Web3 opportunities, regardless of technical background.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card/60 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <h3 className="text-xl font-semibold text-accent mb-2">{value.title}</h3>
                <p className="text-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features & Platforms */}
        <section className="space-y-8 mb-16">
          <h2 className="text-4xl font-bold text-white">Key Features & Platforms</h2>

          <div className="space-y-6">
            {[
              {
                num: "4.1",
                title: "SIGNigeria Marketplace",
                features: [
                  "Peer-to-peer commerce using $SIGN and other crypto assets",
                  "Auctions and global product listings",
                  "Vendor storefronts with blockchain verification",
                ],
              },
              {
                num: "4.2",
                title: "SIGNigeria Health Hub",
                features: [
                  "Blockchain-based health record system",
                  "Decentralized medical consultations",
                  "Wellness DAO initiatives",
                ],
              },
              {
                num: "4.3",
                title: "SIGNigeria EduChain",
                features: [
                  "Smart learning platform",
                  "Blockchain-verified certificates",
                  "Decentralized academic institutions",
                ],
              },
              {
                num: "4.4",
                title: "SIGNigeria CultureChain",
                features: [
                  "NFT-based cultural artifacts",
                  "Indigenous language preservation dApps",
                  "On-chain storytelling and music",
                ],
              },
              {
                num: "4.5",
                title: "SIGNigeria Media & News Network",
                features: [
                  "Decentralized content and media platform",
                  "Public forums and news hubs",
                  "Blog-to-earn modules",
                ],
              },
              {
                num: "4.6",
                title: "SIGNigeria Entertainment Platform",
                features: [
                  "Token-gated access to concerts and films",
                  "Creator tools for musicians and artists",
                  "NFT-based creative showcases",
                ],
              },
            ].map((platform, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="flex gap-4">
                  <div className="text-primary font-bold text-3xl min-w-fit">{platform.num}</div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {platform.title}
                    </h3>
                    <ul className="space-y-2">
                      {platform.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3 text-foreground/70">
                          <span className="text-accent mt-1">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="p-12 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 border border-border/50 backdrop-blur-sm text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Join the Revolution?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            SIGNigeria is more than a platform. It's a movement to bring Nigeria on-chain and empower millions through
            Web3 technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary/50">
              Join Community
            </button>
            <a
              href="https://x.com/africasigngiant?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300 font-semibold"
            >
              Follow on X
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-foreground/60 text-sm">
          <p>&copy; 2025 SIGNigeria. All rights reserved.</p>
          <p className="mt-2">Bringing trust to trustless networks • Empowering Communities • Preserving Culture</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {typeof window !== "undefined" && (
        <button
          onClick={handleScrollToTop}
          onScroll={toggleScrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 ${scrollToTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
