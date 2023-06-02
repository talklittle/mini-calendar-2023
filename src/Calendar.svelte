


<script lang="ts">
    import Week from './Week.svelte';
    import { RowData } from './row_data';
    
    export let date: Date;
    
    let rows: RowData[] = [];
    // calculate days needed based on `date`
    
    const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
    const msPerWeek = 7 * msPerDay;

    // rewind to Sunday
    let targetRowFirstDate = new Date(date.getTime() - (date.getDay() * msPerDay));

    // find first row in mini calendar view, by rewinding week-by-week until Sunday is previous month
    let firstRowFirstDate = new Date(targetRowFirstDate.getTime());
    while (firstRowFirstDate.getMonth() == date.getMonth()) {
        firstRowFirstDate.setTime(firstRowFirstDate.getTime() - msPerWeek);
    }

    // get a total of 6 rows by offsetting 5 weeks from first row
    let lastRowFirstDate = new Date(firstRowFirstDate.getTime() + (5 * msPerWeek));

    let eachSunday = new Date(firstRowFirstDate.getTime());
    while (eachSunday.getTime() <= lastRowFirstDate.getTime()) {
        rows.push(new RowData(new Date(eachSunday.getTime()), date));
        eachSunday.setTime(eachSunday.getTime() + (7 * msPerDay));
    }
</script>


{#each rows as row}
    <Week firstDate={row.firstDate} maybeActiveDate={row.maybeActiveDate}/>
{/each}