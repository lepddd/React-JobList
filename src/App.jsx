import styles from "./App.module.css";
import { createMemo, createSignal, For, onMount, Show } from "solid-js";
import jobs from "./data/data.json";
import { FilterTab } from "./components/FilterTab/FilterTab";
import filter from "./components/Filter";
import { Card } from "./components/Card/Card";

function App() {
  const [data, setData] = createSignal([]);
  const { filters } = filter;

  const filtered = createMemo(() =>
    data().filter((category) =>
      filters().every((filter) => category.categories.includes(filter))
    )
  );

  onMount(() => {
    //generate categories key and values and generate new array based on data
    const categories = jobs.map((job) => {
      return {
        ...job,
        categories: [job.role, job.level, ...job.languages, ...job.tools],
      };
    });

    setData(categories);
  });

  return (
    <div class={styles.App}>
      <FilterTab />
      <Show
        when={filters().length}
        fallback={
          <For each={data()}>
            {(data, i) => (
              <>
                <Card data={data} />
              </>
            )}
          </For>
        }
      >
        <For each={filtered()}>
          {(data, i) => (
            <>
              <Card data={data} />
            </>
          )}
        </For>
      </Show>
    </div>
  );
}

export default App;
