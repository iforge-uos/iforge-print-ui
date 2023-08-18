export type User = {
  id: number
  email: string
  uid: string
  name: string
  short_name: string | null
  user_score: number
  is_rep: boolean
  score_editable: boolean
  date_added: Date
  completed_count: number
  failed_count: number
  rejected_count: number
  slice_completed_count: number
  slice_failed_count: number
  slice_rejected_count: number

  roles: UserRole[]
}

type UserRole = {
  user_id: number
  role_id: number
  user: User
  role: Role
}

type RolePermission = {
  role_id: number
  permission_id: number
  role: Role
  permission: Permission
}

type Permission = {
  id: number
  name: string
  description: string | null
  roles: RolePermission[]
}

type Role = {
  id: number
  name: string
  permissions: RolePermission[]
  users: UserRole[]
}
