<script lang="ts">
    export let firstDate: Date;
    export let maybeActiveDate: Date | undefined;

    // print date for debugging. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
    const options: Intl.DateTimeFormatOptions = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
    };
    const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

</script>

<div>{americanDateTime(firstDate)}</div>


