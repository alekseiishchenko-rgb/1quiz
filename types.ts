
export type DirectorId = 
  | 'Tarantino' 
  | 'Hitchcock' 
  | 'Kurosawa' 
  | 'Bergman' 
  | 'Tarkovsky' 
  | 'Kubrick' 
  | 'Balabanov' 
  | 'Fellini' 
  | 'Bertolucci' 
  | 'Spielberg';

export interface Option {
  id: string;
  text: string;
  points: DirectorId[];
}

export interface Question {
  id: number;
  text: string;
  imageUrl: string;
  options: Option[];
}

export interface DirectorResult {
  id: DirectorId;
  name: string;
  description: string;
  imageUrl: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  scores: Record<DirectorId, number>;
  answers: string[];
}
