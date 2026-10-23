import { getCurrentInstance, onMounted, ref, watch } from "vue";
import { RACE_TYPES, type RaceType } from "@/schemas/RaceSchema";

const STORAGE_KEY = "active-race-types";
const DEFAULT_RACE_TYPES: RaceType[] = ["T", "J", "G"];

// Module-scoped ref shared by every component that calls useActiveRaceTypes().
const activeRaceTypes = ref<RaceType[]>([...DEFAULT_RACE_TYPES]);

function restoreActiveRaceTypes(): void {
  try {
    const rawActiveRaceTypes = localStorage.getItem(STORAGE_KEY);

    if (rawActiveRaceTypes === null) {
      return;
    }

    const parsed: unknown = JSON.parse(rawActiveRaceTypes);

    if(Array.isArray(parsed)) {
      activeRaceTypes.value = parsed.filter(
        (value): value is RaceType =>
          typeof value === "string" &&
          (RACE_TYPES as readonly string[]).includes(value)
      );
    } else {
      activeRaceTypes.value = [...DEFAULT_RACE_TYPES];
    }
  } catch {
    activeRaceTypes.value = [...DEFAULT_RACE_TYPES];
  }
}

function persistActiveRaceTypes(value: RaceType[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // storage unavailable (private mode/quota) — in-memory state keeps working
  }
}

function toggleRaceType(type: RaceType): void {
  if(activeRaceTypes.value.includes(type)) {
    activeRaceTypes.value = activeRaceTypes.value.filter(active => active !== type);
  } else {
    activeRaceTypes.value = [...activeRaceTypes.value, type];
  }
}

watch(activeRaceTypes, persistActiveRaceTypes);

let restoreRegistered = false;

/**
 * Shares the active race-type selection across components and persists it in
 * localStorage. Primate renders views on the server, so the stored value is
 * only read in the browser, after hydration.
 */
export function useActiveRaceTypes() {
  if (!restoreRegistered && getCurrentInstance()) {
    restoreRegistered = true;

    onMounted(restoreActiveRaceTypes);
  }

  return { activeRaceTypes, toggleRaceType };
}