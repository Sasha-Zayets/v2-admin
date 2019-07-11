<template>
  <full-calendar :config="config" :events="events" :class="'but'"/>
</template>

<script>
export default {
  name: 'calendar',
  data: () => ({
    events: [
      {
        title: 'event1',
        start: '2018-11-01'
      },
      {
        title: 'event2',
        start: '2018-11-05',
        end: '2018-11-07'
      },
      {
        title: 'event3',
        start: '2018-11-09T12:30:00',
        allDay: false
      }
    ],
    config: {
      defaultView: 'month',
      eventRender: function (event, element) {
      }
    }
  })
}
</script>

<style lang="scss">
.but {
  .fc-left, .fc-right {
    .fc-button-group {
      button {
        border: none;
        background-color: #3c4e62;
        color: white;
        background-image: none;
        outline: none;
        &.fc-state-active {
          background-color: white;
          color: #3c4e62;
        }
      }
    }
    & button {
      border: none;
      background-color: #3c4e62;
      color: white;
      background-image: none;
      outline: none;
      opacity: 1;
      &.fc-state-disabled {
        opacity: 0.6;
      }
    }
  }
}
@media (max-width: 321px) {
  .fc-toolbar .fc-right {
    float: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

</style>
