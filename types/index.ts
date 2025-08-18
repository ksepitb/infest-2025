import { MouseEvent } from "react";

export interface MockLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}
export interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}
export interface FAQuestionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

export interface FAQItemData {
  value: string;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  faqData: FAQItemData[];
}

export type CountdownProps = {
  targetDate: Date;
  onFinish?: () => void;
};

export type PrizepoolData = {
  position : string;
  prize: string;
};

export type PrizeItem = {
  data: PrizepoolData;
  gradientClass: string;
}

export interface TimelineEvent {
  id: number;
  title: string;
  date: string;
}

export interface TimelineProps {
  timelineData: TimelineEvent[];
}

export interface UserProfile {
  id: string;
  teamName: string;
  competitionType: string;
  submissionLink1?: string;
  submissionLink2?: string;
}

export interface AuthUser {
  id: string;
  email: string;
}

export interface UserStore {
  user: AuthUser | null;
  userProfile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  isInitialized: boolean;
  
  setUser: (user: AuthUser | null) => void;
  setUserProfile: (profile: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setInitialized: (initialized: boolean) => void;
  fetchUserData: () => Promise<void>;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
  reset: () => void;
}