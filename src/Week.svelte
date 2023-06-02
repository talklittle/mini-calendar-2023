<script lang="ts">
    import { CellData } from "./cell_data";
    import Day from './Day.svelte';

    export let firstDate: Date;
    export let maybeActiveDate: Date | undefined;

    let dayDatas: CellData[] = [];

    const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
    const msPerWeek = 7 * msPerDay;
    let aDate = new Date(firstDate.getTime());
    while (aDate.getTime() < firstDate.getTime() + msPerWeek) {
        dayDatas.push(new CellData(new Date(aDate.getTime())));
        aDate.setTime(aDate.getTime() + msPerDay);
    }
</script>

<div>
    {#each dayDatas as dayData}
        <Day date={dayData.date} maybeActiveDate={maybeActiveDate}/>
    {/each}
</div>
