export interface SidebarProps {
  onClose?: () => void
}

export interface SidebarItemProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  isActive?: boolean
}

export interface SidebarProfileProps {
  username: string
  avatar?: string
  role?: string
}