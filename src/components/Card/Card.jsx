import { Show } from "solid-js";
import filter from "../Filter";
import styles from "./Card.module.css";

export const Card = (props) => {
  const { filters, addFilter } = filter;

  return (
    <div
      class={
        props.data.featured ? `${styles.card} ${styles.featured}` : styles.card
      }
    >
      <div class={styles.card_info}>
        <img src={props.data.logo} alt="logo" />
        <div class={styles.job_description}>
          <div class={styles.job_top}>
            <span class={styles.company_name}>{props.data.company}</span>
            <Show when={props.data.new} fallback={null}>
              <span class={styles.tag}>NEW!</span>
            </Show>
            <Show when={props.data.featured} fallback={null}>
              <span class={`${styles.tag} ${styles.dark}`}>FEATURED</span>
            </Show>
          </div>
          <p class={styles.job_position}>{props.data.position}</p>

          <div class={styles.job_bottom}>
            <span>{props.data.postedAt}</span>
            <span>.</span>
            <span>{props.data.contract}</span>
            <span>.</span>
            <span>{props.data.location}</span>
          </div>
        </div>
      </div>

      <div class={styles.filter_box}>
        <For each={props.data.categories}>
          {(category, i) => (
            <button
              class={styles.filter_tag}
              disabled={filters().includes(category)}
              onClick={() => addFilter(category)}
            >
              {category}
            </button>
          )}
        </For>
      </div>
    </div>
  );
};
