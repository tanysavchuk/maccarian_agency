export interface Comment {
  body: string;
  created_at: string;
  id: number;
  updated_at: string;
  user_id: number;
}

export interface UsersInterface {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface CardCustomizeInterface {
  id: number;
  icon: string;
  title: string;
  text: string;
}

export interface PossibilitiesInterface {
  id: string;
  icon: string;
  header: string;
  body: string;
}

export interface TablesPagesInterface {
  id: number;
  title: string;
  body1: string;
  body2: string;
  created_at: string;
  deleted_at: string;
  updated_at: string;
}
