"use client"

import type React from "react"

import {
  Users,
  Link2,
  Eye,
  Building2,
  Zap,
  BookOpen,
  ShoppingCart,
  Heart,
  Palette,
  Newspaper,
  Film,
} from "lucide-react"

interface IconProps {
  type: string
  size?: string
  className?: string
}

export function SimpleIcon({ type, size = "w-6 h-6", className = "" }: IconProps) {
  const iconClass = `${size} ${className}`

  const icons: Record<string, React.ReactNode> = {
    community: <Users className={iconClass} />,
    link: <Link2 className={iconClass} />,
    eye: <Eye className={iconClass} />,
    building: <Building2 className={iconClass} />,
    lightning: <Zap className={iconClass} />,
    book: <BookOpen className={iconClass} />,
    shopping: <ShoppingCart className={iconClass} />,
    hospital: <Heart className={iconClass} />,
    palette: <Palette className={iconClass} />,
    newspaper: <Newspaper className={iconClass} />,
    filmstrip: <Film className={iconClass} />,
  }

  return (icons[type] || icons.book) as React.ReactElement
}
