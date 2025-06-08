
export interface Company {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  website?: string;
  contactEmail?: string;
  areaOfActivity: string;
}

export interface Teacher {
  id: string;
  name: string;
  cvSummary: string;
  department: string;
  photoUrl: string;
  email?: string;
  specializations: string[];
}

export enum ProjectStatus {
  OPEN = "Ouvert",
  IN_PROGRESS = "En Cours",
  CLOSED = "Fermé",
  PENDING_APPROVAL = "En Attente d'Approbation"
}

export interface SolicitedEntity {
  id: string;
  name: string;
  type: "company" | "teacher";
}

export interface ProjectProposal {
  id: string;
  title: string;
  description: string;
  postedBy: "teacher" | "company";
  posterId: string;
  posterName: string;
  solicitedEntities: SolicitedEntity[];
  status: ProjectStatus;
  creationDate: string; // ISO Date string
  keywords: string[];
}

export interface Internship {
  id: string;
  title: string;
  description: string;
  companyId: string;
  companyName: string;
  companyLogoUrl: string;
  duration: string; // e.g., "3 mois"
  solicitedTutorId?: string;
  solicitedTutorName?: string;
  status: ProjectStatus;
  creationDate: string; // ISO Date string
  location: string;
  skillsRequired: string[];
}

// For form states, allowing partial data during creation
export type NewCompany = Omit<Company, 'id' | 'logoUrl'> & { logoUrl?: string };
export type NewTeacher = Omit<Teacher, 'id' | 'photoUrl'> & { photoUrl?: string };
export type NewProjectProposal = Omit<ProjectProposal, 'id' | 'creationDate' | 'posterName'>;
export type NewInternship = Omit<Internship, 'id' | 'creationDate' | 'companyName' | 'companyLogoUrl'>;
    