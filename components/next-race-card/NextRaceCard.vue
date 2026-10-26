<script lang="ts" setup>
import { computed } from "vue";
import type { Race } from "@/schemas/RaceSchema";
import RaceIcon from "@/components/icons/race-icons/Index.vue";
import CountryFlag from "@/components/icons/country-flag/CountryFlag.vue";
import RacebetCard from "@/components/racebet-card/RacebetCard.vue";
import RacebetCardHeader from "@/components/racebet-card/RacebetCardHeader.vue";
import RacebetCardTitleRow from "@/components/racebet-card/RacebetCardTitleRow.vue";
import RacebetCardTitle from "@/components/racebet-card/RacebetCardTitle.vue";
import RacebetCardCountdown from "@/components/racebet-card/RacebetCardCountdown.vue";
import RacebetCardRule from "@/components/racebet-card/RacebetCardRule.vue";
import RacebetCardMetaRow from "@/components/racebet-card/RacebetCardMetaRow.vue";
import RacebetCardContent from "@/components/racebet-card/RacebetCardContent.vue";
import RacebetCardRunner from "@/components/racebet-card/RacebetCardRunner.vue";
import RacebetCardRunnerSilk from "@/components/racebet-card/RacebetCardRunnerSilk.vue";
import RacebetCardRunnerName from "@/components/racebet-card/RacebetCardRunnerName.vue";
import RacebetCardRunnerOdds from "@/components/racebet-card/RacebetCardRunnerOdds.vue";
import { formatDistance, formatPurse } from "@/lib/raceFormat";
import { BET_URL_BASE } from "@/lib/constants";

interface Props {
  race: Race;
}

const props = defineProps<Props>();

const betUrl = computed(() => `${BET_URL_BASE}${props.race.id_race}`);

const runnersLabel = computed(() => `${props.race.num_runners} runners`);

const distanceLabel = computed(() => formatDistance(props.race.distance));

const purseLabel = computed(() => formatPurse(props.race.purse));
</script>

<template>
  <RacebetCard :href="betUrl">
    <RacebetCardHeader>
      <RacebetCardTitleRow>
        <CountryFlag
          :country="props.race.event.country"
          class="h-3.5 w-5 shrink-0"
        />

        <RacebetCardTitle>
          {{ props.race.event.title }}
        </RacebetCardTitle>

        <RacebetCardCountdown :post-time="props.race.post_time" />
      </RacebetCardTitleRow>

      <RacebetCardRule />

      <RacebetCardMetaRow>
        <span>{{ runnersLabel }}</span>

        <RacebetCardRule orientation="vertical" />

        <span>{{ distanceLabel }}</span>

        <RacebetCardRule orientation="vertical" />

        <span>{{ purseLabel }}</span>

        <RaceIcon
          :type="props.race.race_type"
          :active="true"
          :inverted="true"
          class="ml-auto shrink-0"
        />
      </RacebetCardMetaRow>
    </RacebetCardHeader>

    <RacebetCardContent>
      <RacebetCardRunner
        v-for="runner in props.race.runners"
        :key="runner.id_runner"
      >
        <RacebetCardRunnerSilk :silk="runner.silk" :name="runner.name" />

        <RacebetCardRunnerName>
          {{ runner.name }}
        </RacebetCardRunnerName>

        <RacebetCardRunnerOdds :odds="runner.odds" />
      </RacebetCardRunner>
    </RacebetCardContent>
  </RacebetCard>
</template>
