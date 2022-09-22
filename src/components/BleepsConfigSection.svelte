<script>
	import {
		setTime,
		startTime,
		endTime,
	} from "../stores/bleepsStore.js";
	import Section from "../components/Section.svelte";

	//- For configuration
	const handleSetTime = () => {
		$setTime = !$setTime;
	};

	const handleStartTime = (evt) => {
		$startTime = evt.target.value;
	};

	const handleEndTime = (evt) => {
		$endTime = evt.target.value;
	};
</script>

<Section contentType="config-section">
  <h2 slot="title">Configurations</h2>

  <ul slot="content">
    <li>
      <input type="checkbox" checked={$setTime} on:change={handleSetTime} />
      Set Time
      {#if $setTime === true}
        <ul>
          <li>
            <label for="time-from">From</label>
            <input
              type="time"
              id="time-from"
              value={$startTime}
              on:change={handleStartTime}
            />
            <label for="time-to">To</label>
            <input
              type="time"
              id="time-to"
              value={$endTime}
              on:change={handleEndTime}
            />
          </li>
        </ul>
      {/if}
    </li>
  </ul>

  <em slot="info">
    * Make sure to allow notifications in your OS to receive bleeps.
  </em>
</Section>
