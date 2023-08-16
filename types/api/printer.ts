export enum PrinterLocation {
  heartspace = "Heartspace",
  diamond = "Diamond"
}

export enum PrinterType {
  ultimaker = "Ultimaker Extended 2+",
  prusa = "Prusa MK3S+"
}

type Printer = {
  id: number;
  printer_name: string;
  printer_type: PrinterType;
  ip: string | null;
  api_key: string | null;
  total_time_printed: number | null;
  completed_prints: number | null;
  failed_prints: number | null;
  total_filament_used: number | null;
  days_on_time: number | null;
  location: PrinterLocation;
}
