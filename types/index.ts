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

export interface User {
  id: string,
  email: string,
  password: string,
  namaTim: string,
}
