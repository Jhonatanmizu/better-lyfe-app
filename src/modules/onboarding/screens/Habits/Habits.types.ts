export interface UseHabitsReturn {
  handleNextPress: () => void;
  handleSkipPress: () => void;
  activeIndex: number;
  totalSteps: number;
  iconSize: number;
  iconColor: string;
}
