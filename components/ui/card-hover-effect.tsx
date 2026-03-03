import { NavLink } from "@/config/site"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"

export const HoverEffect = ({ items, className }: { items: NavLink[]; className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = useCallback((e: React.MouseEvent, link: string, idx: number) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(link).then(() => {
      setCopiedIndex(idx)
      setTimeout(() => setCopiedIndex(null), 1500)
    })
  }, [])

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item.link}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
        >
          <Link
            href={item?.link}
            className="group relative block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            target="_blank"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-xl bg-accent"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 }
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 }
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>
                {item.icon && (
                  <Image
                    src={item.icon}
                    className="overflow-hidden rounded-lg object-fill"
                    alt=""
                    width={40}
                    height={40}
                    unoptimized
                  />
                )}
                {item.title}
              </CardTitle>
              {item.desc && <CardDescription>{item.desc}</CardDescription>}
              {item.tip && (
                <div className="mt-3 flex items-center gap-1.5">
                  <CardTip>{item.tip}</CardTip>
                  <button
                    onClick={(e) => handleCopy(e, item.link, idx)}
                    className="inline-flex items-center rounded-md p-1 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    title="复制"
                  >
                    {copiedIndex === idx ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              )}
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-lg border bg-background p-2 shadow-md",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("mt-2 flex items-center gap-3 font-bold tracking-wide", className)}>{children}</h4>
}
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("mt-4 text-sm leading-relaxed tracking-wide", className)}>{children}</p>
}
export const CardTip = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <span
      className={cn("inline-block rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary", className)}
    >
      {children}
    </span>
  )
}
