export interface RsvpMessage {
  id: string;
  name: string;
  message: string;
  attendance: "Hadir" | "Tidak Hadir";
  timestamp: string;
}

export interface Couple {
  name: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  instagram: string;
  photo: string;
}

export interface EventDetails {
  title: string;
  date: string;
  timeString: string;
  timezone: string;
  venueName: string;
  address: string;
  mapUrl: string;
  calendarUrl: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  logo: string;
}
