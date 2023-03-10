import filter from "../Filter";
import styles from "./FilterTab.module.css";

export const FilterTab = () => {
  const { filters, removeFilter, clearFilters } = filter;

  return (
    <Show when={filters().length}>
      <div class={styles.filter_container}>
        <div class={styles.filter_box}>
          <For each={filters()}>
            {(filter, i) => (
              <div class={styles.filter}>
                <span class={styles.filter_name}>{filter}</span>
                <button
                  class={styles.remove_filter}
                  onClick={() => removeFilter(filter)}
                >
                  <img src={"./images/icon-remove.svg"} alt="icon-remove" />
                </button>
              </div>
            )}
          </For>
        </div>
        <button class={styles.clear_filter} onClick={clearFilters}>
          Clear
        </button>
      </div>
    </Show>
  );
};
