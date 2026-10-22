export type Stage={title:string;description:string};
export type Scenario={title:string;intro:string;stages:Stage[];result:string};
export const fieldGuides:Record<string,string[]> = {
  "students-admissions": [
    "Requested grade",
    "Applicant and guardian details",
    "Previous school",
    "Application decision",
    "Admission ID",
    "Emergency contacts",
    "Medical and allergy notes",
    "Student 360 tabs",
    "Filtered CSV export"
  ],
  "academics-timetable": [
    "Class and grade",
    "Section and capacity",
    "Subject and code",
    "Teacher assignment",
    "Room",
    "Weekday (Monday–Friday)",
    "Six predefined periods",
    "Teacher clash check",
    "Room clash check",
    "Section clash check"
  ],
  "attendance-leave": [
    "Class and section",
    "Attendance date",
    "Student status",
    "Mark all present",
    "Save attendance batch",
    "Monthly view",
    "CSV report",
    "Below-85% indicator",
    "Leave dates and reason",
    "Approve or reject"
  ],
  "fees-finance": [
    "Student or class",
    "Billing month",
    "Due date",
    "Tuition amount",
    "Concession",
    "Challan reference",
    "Received amount",
    "Payment method",
    "Transaction reference",
    "Three-part voucher",
    "Printable receipt"
  ],
  "exams-results": [
    "Exam",
    "Class and section",
    "Subject",
    "Maximum marks",
    "Marks obtained",
    "Teacher remarks",
    "Calculated letter grade",
    "Calculated GPA",
    "Merit view",
    "Printable report card"
  ],
  "homework": [
    "Class and section",
    "Subject",
    "Assignment title",
    "Due date",
    "Maximum score",
    "Teacher attachments",
    "Student upload",
    "Submission status",
    "Recorded grade",
    "Written feedback"
  ],
  "portals": [
    "Linked child record",
    "Exam marks",
    "Printable report card",
    "Fee status",
    "Printable challan",
    "Student assignments",
    "File submission",
    "Submission feedback"
  ],
  "communication-calendar": [
    "Message recipients",
    "Message content",
    "Announcement",
    "Event title",
    "Event date",
    "Location",
    "Calendar view",
    "Role-based event creation"
  ],
  "reports-analytics": [
    "Report type",
    "Available filters",
    "Student records",
    "Attendance summaries",
    "Fee reports",
    "Exam results",
    "CSV export",
    "Browser print",
    "Enrolment distribution",
    "Subject benchmarks"
  ],
  "administration-security": [
    "School profile",
    "School logo",
    "Account role",
    "Linked student/teacher",
    "Suspend or reactivate",
    "Permission matrix",
    "Custom fields",
    "Audit log",
    "Signed document link",
    "JSON data export"
  ]
};
export const workflowGuides:Record<string,string[]> = {
  "students-admissions": [
    "Enter the applicant’s name, requested grade, gender, guardian contacts and previous-school information in the admissions form.",
    "Move the application through Pending, Interview, Approved or Rejected as the school reviews it.",
    "Use the enrolment action for an approved applicant to create a student record and admission identifier.",
    "Open the student directory or Student 360 to review academic, guardian, emergency, fee and document information."
  ],
  "academics-timetable": [
    "Create the academic structure: class, grade, department, sections, rooms and section capacities.",
    "Define subjects with their codes and departments, and assign teaching responsibilities where available.",
    "Select the class or teacher view and add a weekday lesson slot with a subject, teacher and room.",
    "When saving, the application checks for teacher, room and class-section clashes in that period."
  ],
  "attendance-leave": [
    "Choose the class, section and date for the daily roll call.",
    "Mark all students present as a starting point, then adjust individual attendance statuses as needed.",
    "Save the attendance batch so the day’s statuses become part of the attendance records.",
    "Review the monthly report, export CSV and follow up on students flagged below the displayed threshold."
  ],
  "fees-finance": [
    "Select the billing month, due date and relevant student or class; confirm the fee amount and concession.",
    "Create an individual challan or generate a class-wide batch, then print the available three-part bank-style vouchers.",
    "When money is received, enter the amount, method and transaction reference against the relevant challan.",
    "Print the receipt and review paid, unpaid or overdue fee records to identify remaining balances."
  ],
  "exams-results": [
    "Select the existing exam, class section and subject for which marks are being entered.",
    "Enter obtained marks, maximum marks and optional remarks for each student in the selected group.",
    "Save the mark set; the application calculates grade and GPA from its defined percentage thresholds.",
    "Review class results and merit information, then open or print the available student report cards."
  ],
  "homework": [
    "Choose the class section and subject, then provide assignment instructions, deadline and maximum score.",
    "Attach relevant teaching resources to the assignment before students review it.",
    "Students open their assignments in the portal and upload the work they want to submit.",
    "Teachers review submitted work and record a score and written feedback for the learner."
  ],
  "portals": [
    "An authorised parent or student signs into the appropriate portal account.",
    "The parent selects a linked child, or the student opens their own available academic information.",
    "Parents can review fee challans and results; students can open assignments and submit work files.",
    "Review available report cards, submission statuses, grades or printable vouchers as permitted."
  ],
  "communication-calendar": [
    "Open the messaging or announcements area with the appropriate account permissions.",
    "Compose the message or announcement and select the available recipient or audience controls.",
    "Publish the information in the application so it appears in the relevant communication views.",
    "Create or review calendar events using title, date and location fields where authorised."
  ],
  "reports-analytics": [
    "Select a student, attendance, fee or examination report relevant to the question being investigated.",
    "Apply the filters offered for that report to focus on the desired student group or period.",
    "Review the table or dashboard, including available enrolment and subject-performance summaries.",
    "Export the supported CSV output or use browser printing for a meeting or follow-up."
  ],
  "administration-security": [
    "Configure school identity, branding and applicable school settings.",
    "Create accounts with the appropriate role and link parent, teacher or student identities where required.",
    "Adjust the available permission controls or account status through authorised administration screens.",
    "Review audit information and use secure document workflows with time-limited access links."
  ]
};
export const scenarios:Record<string,Scenario> = {
  "students-admissions": {
    "title": "A new learner joins the school",
    "intro": "An admissions officer needs to turn a reviewed application into a usable student profile.",
    "stages": [
      {
        "title": "Capture the application",
        "description": "Record grade preference, guardian details and previous-school information."
      },
      {
        "title": "Make a decision",
        "description": "Track the candidate through the review statuses and approve the application."
      },
      {
        "title": "Enrol and maintain",
        "description": "Create the student record, then complete contacts and other available profile details."
      }
    ],
    "result": "The school can follow the application decision and work with the enrolled student record."
  },
  "academics-timetable": {
    "title": "Planning Monday lessons",
    "intro": "The academic coordinator is assigning teachers and rooms across multiple sections.",
    "stages": [
      {
        "title": "Set up structure",
        "description": "Confirm class sections, capacities, subjects and teaching assignments."
      },
      {
        "title": "Allocate the period",
        "description": "Choose the weekday, predefined period, teacher, room and section."
      },
      {
        "title": "Resolve conflicts",
        "description": "If a clash is detected, revise the allocation before saving."
      }
    ],
    "result": "Teachers and coordinators can review class and teacher timetable views."
  },
  "attendance-leave": {
    "title": "A morning class roll call",
    "intro": "A teacher needs to save attendance and an administrator wants to review repeated absences.",
    "stages": [
      {
        "title": "Select the group",
        "description": "Open the class, section and current attendance date."
      },
      {
        "title": "Mark the class",
        "description": "Start with all present and adjust individual records."
      },
      {
        "title": "Review trends",
        "description": "Save the batch and later inspect monthly attendance or export CSV."
      }
    ],
    "result": "A recorded daily roll call supports attendance review and follow-up."
  },
  "fees-finance": {
    "title": "Preparing and collecting monthly school fees",
    "intro": "The accounts office is issuing challans for a class and tracking payments received.",
    "stages": [
      {
        "title": "Prepare the billing run",
        "description": "Choose the month and due date, then generate individual or bulk challans."
      },
      {
        "title": "Provide the voucher",
        "description": "Print the three-part fee challan for the relevant student."
      },
      {
        "title": "Record the collection",
        "description": "Enter received amount, payment method and reference, then print a receipt."
      }
    ],
    "result": "The accounts team can review the challan and its recorded payment status; this is not an online payment gateway."
  },
  "exams-results": {
    "title": "Publishing a term assessment",
    "intro": "A teacher has completed an exam and must record results consistently.",
    "stages": [
      {
        "title": "Select assessment",
        "description": "Choose the exam, section and subject."
      },
      {
        "title": "Enter marks",
        "description": "Record scores, maximum marks and remarks for students."
      },
      {
        "title": "Review output",
        "description": "Save grades and GPA, then open the available class results and report cards."
      }
    ],
    "result": "Results are recorded in the system and can be reviewed in relevant authorised views."
  },
  "homework": {
    "title": "A science assignment with attachments",
    "intro": "A teacher assigns coursework that requires students to upload completed work.",
    "stages": [
      {
        "title": "Create the task",
        "description": "Set the class, subject, deadline and maximum score."
      },
      {
        "title": "Collect work",
        "description": "Attach instructions; students upload their files through the portal."
      },
      {
        "title": "Give feedback",
        "description": "Review each submission and record a grade and remarks."
      }
    ],
    "result": "The submission, grade and feedback can be reviewed within the assignment workflow."
  },
  "portals": {
    "title": "A parent and learner check school information",
    "intro": "A family needs exam information while a learner has an assignment due.",
    "stages": [
      {
        "title": "Open the portal",
        "description": "Sign in to the appropriate parent or student view."
      },
      {
        "title": "Review relevant records",
        "description": "See linked child results and fee documents, or the student’s assignments."
      },
      {
        "title": "Take the available action",
        "description": "Print a voucher or report card, or submit a homework file."
      }
    ],
    "result": "Families can access the specific school records and tasks available to their accounts."
  },
  "communication-calendar": {
    "title": "Publishing a school notice",
    "intro": "School staff need to share a notice and record an upcoming school event.",
    "stages": [
      {
        "title": "Prepare communication",
        "description": "Compose a message or announcement using the application interface."
      },
      {
        "title": "Publish internally",
        "description": "Use the available audience and publication controls."
      },
      {
        "title": "Schedule the date",
        "description": "Create an event with title, date and location."
      }
    ],
    "result": "The school has an in-app communication record and an event calendar; external SMS delivery is not implied."
  },
  "reports-analytics": {
    "title": "Preparing a leadership review",
    "intro": "A principal needs a concise view of attendance, fees and academic performance.",
    "stages": [
      {
        "title": "Choose the question",
        "description": "Open the relevant reporting category and filters."
      },
      {
        "title": "Inspect the data",
        "description": "Review available report tables and dashboard indicators."
      },
      {
        "title": "Share a view",
        "description": "Export supported CSV information or print the report in the browser."
      }
    ],
    "result": "Leadership can work from recorded operational data rather than assembling separate spreadsheets."
  },
  "administration-security": {
    "title": "Preparing staff accounts for a new term",
    "intro": "An administrator needs to grant appropriate access and review account activity.",
    "stages": [
      {
        "title": "Set up identities",
        "description": "Create role-specific accounts and link eligible school records."
      },
      {
        "title": "Review permissions",
        "description": "Use the available permission matrix and account-status controls."
      },
      {
        "title": "Maintain oversight",
        "description": "Inspect audit views and use document access links where appropriate."
      }
    ],
    "result": "School teams have defined account access and administrative review tools."
  }
};
