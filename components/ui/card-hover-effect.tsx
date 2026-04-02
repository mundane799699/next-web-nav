import { NavLink } from "@/config/site"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"

export const HoverEffect = ({ items, className }: { items: NavLink[]; className?: string }) => {
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
        <div key={item.link}>
          <Link
            href={item?.link}
            className="group relative block h-full w-full p-2"
            target="_blank"
          >
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
        </div>
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
