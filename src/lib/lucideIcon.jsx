import {
  Baby,
  Bath,
  BookOpen,
  HandHeart,
  Heart,
  Laugh,
  Music,
  RotateCcw,
  Smile,
  Sparkles,
  Sun,
} from 'lucide-react'

const ICONS = {
  Baby,
  Bath,
  BookOpen,
  HandHeart,
  Laugh,
  Music,
  RotateCcw,
  Smile,
  Sparkles,
  Sun,
}

/**
 * @param {{ name: string; className?: string; strokeWidth?: number }} props
 */
export function LucideByName({ name, className = 'h-6 w-6', strokeWidth = 1.5 }) {
  const Cmp = ICONS[name] || Heart
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />
}
