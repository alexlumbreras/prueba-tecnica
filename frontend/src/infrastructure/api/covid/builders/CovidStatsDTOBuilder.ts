import { Stats } from '../dtos/CovidStatsDTO';

export class CovidStatsDTOBuilder {
  private stats: Stats;

  constructor() {
    this.stats = {
      date: '2025-01-01',
      states: 50,
      cases: {
        total: {
          value: 0,
          calculated: {
            population_percent: 0,
          },
        },
      },
      testing: {
        total: {
          value: 0,
          calculated: {
            population_percent: 0,
          },
        },
      },
      outcomes: {
        hospitalized: {
          currently: { value: 0, calculated: { population_percent: 0 } },
          in_icu: {
            currently: { value: 0, calculated: { population_percent: 0 } },
          },
          on_ventilator: {
            currently: { value: 0, calculated: { population_percent: 0 } },
          },
        },
        death: {
          total: { value: 0, calculated: { population_percent: 0 } },
        },
      },
    };
  }

  setDate(date: string) {
    this.stats.date = date;
    return this;
  }

  setCases(value: number) {
    this.stats.cases.total.value = value;
    return this;
  }

  setTesting(value: number) {
    this.stats.testing.total.value = value;
    return this;
  }

  setDeaths(value: number) {
    this.stats.outcomes.death.total.value = value;
    return this;
  }

  build(): Stats {
    return this.stats;
  }
}
