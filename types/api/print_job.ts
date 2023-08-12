enum JobStatus {
  queued = "Queued",
  approval = "Awaiting Approval",
  running = "Running",
  completed = "Completed",
  failed = "Failed",
  rejected = "Rejected",
  under_review = "Under Review"
}

enum ProjectTypes {
  personal = "Personal",
  uni_module = "Module",
  co_curricular = "Co-curricular",
  society = "Society",
  other = "Other"
}


type PrintJob = {
  gcode_slug: string;
  id: number;
  filament_usage: number;
  print_name: string;
  print_time: number; // Time in seconds
  printer_type: PrinterType;
  project: ProjectTypes;
  user_id: number;
  date_added: Date;
  date_ended: Date | null;
  date_started: Date | null;
  colour: string | null;
  printer: number | null;
  project_string: string | null;
  queue_notes: string;
  rep_check: number;
  status: JobStatus;
  stl_slug: string | null;
  upload_notes: string | null;
}
