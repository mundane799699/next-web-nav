"use client"

import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import {
  ChevronDown,
  Code2,
  Compass,
  GraduationCap,
  Lightbulb,
  LucideIcon,
  Mail,
  Megaphone,
  Palette,
  Rocket
} from "lucide-react"
import { useConfigStore } from "@/stores"

interface SidebarProps {
  onLinkClick?: () => void
}

// 分组图标名 → lucide 组件映射
const groupIcons: Record<string, LucideIcon> = {
  Lightbulb,
  Code2,
  Megaphone,
  Palette,
  Rocket,
  GraduationCap,
  Compass
}

// 平滑滚动到主内容区指定锚点（顶部留出 99px 给固定头部）
const scrollToAnchor = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 99
  window.scrollTo({ top, behavior: "smooth" })
}

// 可复用的悬浮高亮行：统一处理 hover 背景动画与点击，内容由 children 决定
interface NavItemProps {
  active?: boolean
  onClick: () => void
  children: ReactNode
}

function NavItem({ active, onClick, children }: NavItemProps) {
  return (
    <div className={`cursor-pointer rounded-lg ${active ? "bg-accent" : ""}`} onClick={onClick}>
      {children}
    </div>
  )
}

export function Sidebar({ onLinkClick }: SidebarProps) {
  const { groups } = useConfigStore()
  const [activeId, setActiveId] = useState(0) // 当前高亮的二级分类（扁平序号）
  const [openGroup, setOpenGroup] = useState(0) // 手风琴：当前展开的分组，-1 表示全部收起
  // 点击滚动进行中：锁定高亮与自动展开，避免被途经分类覆盖、避免手风琴动画打断平滑滚动
  const isClickScrolling = useRef(false)
  const settleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  // 滚动停止 150ms 后解除锁定（点击滚动到位、或用户中途手动打断都适用）
  const armUnlock = () => {
    clearTimeout(settleTimer.current)
    settleTimer.current = setTimeout(() => {
      isClickScrolling.current = false
    }, 150)
  }

  // 每个分组首个二级分类的扁平起始序号，用于和主内容区的 id 对应
  const groupOffsets = useMemo(() => {
    const offsets: number[] = []
    let index = 0
    groups.forEach((group) => {
      offsets.push(index)
      index += group.children.length
    })
    return offsets
  }, [groups])

  // 滚动监听：找出当前停留的二级分类
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    const onScroll = () => {
      // 点击滚动途中：保持点击时设定的高亮，不被途经分类覆盖；滚动停止后解锁
      if (isClickScrolling.current) {
        armUnlock()
        return
      }
      const main = document.getElementById("main")
      if (!main) return
      let current: number | null = null
      for (const child of Array.from(main.children)) {
        if (/^\d+$/.test(child.id) && child.getBoundingClientRect().top < 100) {
          current = Number(child.id)
        }
      }
      if (current !== null) setActiveId(current)
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      clearTimeout(settleTimer.current)
    }
  }, [])

  // 滚动到某分类时，自动展开其所属分组（点击滚动途中跳过，避免打断）
  useEffect(() => {
    if (isClickScrolling.current) return
    const groupIndex = groupOffsets.findIndex(
      (offset, i) => activeId >= offset && activeId < (groupOffsets[i + 1] ?? Infinity)
    )
    if (groupIndex >= 0) setOpenGroup(groupIndex)
  }, [activeId, groupOffsets])

  const toggleGroup = (index: number) => setOpenGroup((prev) => (prev === index ? -1 : index))

  const handleCategoryClick = (flatIndex: number) => {
    isClickScrolling.current = true
    setActiveId(flatIndex)
    scrollToAnchor(String(flatIndex))
    armUnlock() // 兜底：若目标已在视口内、不产生滚动，也能解除锁定
    onLinkClick?.()
  }

  const handleContactClick = () => {
    scrollToAnchor("contact")
    onLinkClick?.()
  }

  return (
    <nav className="flex h-screen w-full flex-col flex-nowrap bg-background px-4 pt-16 font-semibold sm:w-60 sm:bg-background sm:px-6 sm:pb-6 sm:pt-0">
      <div className="mx-6 hidden sm:flex sm:h-14 sm:items-center sm:gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={28}
          height={28}
          className="overflow-hidden border border-slate-600 object-fill"
        />
        <h2 className="text-lg font-semibold tracking-tight">独立掘金网</h2>
      </div>
      <div className="flex-start relative z-40 flex min-h-0 w-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded pt-4 opacity-100">
        <div className="space-y-1 pb-12 pt-2">
          {groups.map((group, groupIndex) => {
            const Icon = groupIcons[group.icon] ?? Compass
            const open = openGroup === groupIndex
            return (
              <div key={group.title}>
                {/* 顶级分组头：点击展开/收起（手风琴） */}
                <NavItem onClick={() => toggleGroup(groupIndex)}>
                  <div className="flex items-center gap-3 p-2 text-sm">
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="flex-1 truncate">{group.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "" : "-rotate-90"}`}
                    />
                  </div>
                </NavItem>
                {/* 二级分类列表 */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {group.children.map((child, childIndex) => {
                        const flatIndex = groupOffsets[groupIndex] + childIndex
                        return (
                          <NavItem
                            key={child.title}
                            active={activeId === flatIndex}
                            onClick={() => handleCategoryClick(flatIndex)}
                          >
                            <div className="flex items-center p-2 pl-10 text-sm">
                              <span className="truncate">{child.title}</span>
                            </div>
                          </NavItem>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
          {/* 联系我 */}
          <NavItem onClick={handleContactClick}>
            <div className="flex items-center gap-3 p-2 text-sm">
              <Mail className="h-5 w-5 shrink-0" />
              <span className="flex-1 truncate">联系我</span>
            </div>
          </NavItem>
        </div>
      </div>
    </nav>
  )
}
