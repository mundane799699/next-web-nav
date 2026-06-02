import { NavData, NavGroup } from "@/config/site"
import { create } from "zustand"

interface NavConfigState {
  // 顶级分组（只读，数据源为 config/site.ts）
  groups: NavGroup[]
}

export const useConfigStore = create<NavConfigState>(() => ({
  groups: NavData
}))
