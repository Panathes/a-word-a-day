import { DateTime } from "luxon";

export interface Translation {
  id: string;
  word: string; // Ajout d'une interface pour définir la langue et le mot
  translatedWord: string;
  createdAt: DateTime;
}
