type ApiResponse<T> = {
  status: "success" | "error"
  payload: {
    data?: T // Success-specific data
    error?: {
      code: string // Error-specific code
      message: string // Error-specific message
    }
  }
  meta?: {
    message?: string // Optional success message
  }
}
