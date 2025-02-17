export interface Activity {
  id: string;
  name: string;
  date: string;
  energyLevel: number;
  engagement: number;
  notes?: string;
}

export type ActivityFormData = Omit<Activity, 'id' | 'date'> & {
  id?: string;
  date?: string;
};