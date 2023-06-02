<script lang="ts">
    export let date: Date;
    export let maybeActiveDate: Date | undefined;
</script>

<style>
    span {
        display: inline-block;
        width: 50px;
        height: 50px;
        color: lightgray;
    }
    .active-month {
        color: black;
    }
    .active-day {
        color: red !important;
    }
</style>

<span
    class:active-month={date.getMonth() == maybeActiveDate?.getMonth()}
    class:active-day={date.getMonth() == maybeActiveDate?.getMonth() && date.getDate() == maybeActiveDate?.getDate()}
    >
    {date.getDate()}
</span>