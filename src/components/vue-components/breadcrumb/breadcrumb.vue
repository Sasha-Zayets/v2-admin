<template>
    <div >
      <h5 class="mt-0">Simple breadcrumbs</h5>
      <breadcrumb :menu="breadcrumb" :separator="'/'"></breadcrumb>
      <br>

      <h5>Simple breadcrumbs with custom separator</h5>
      <breadcrumb :menu="breadcrumb" :separator="'→'"></breadcrumb>
      <br>
      <breadcrumb :menu="breadcrumb" :separator="'»'"></breadcrumb>
      <br>

      <h5>Custom style breadcrumbs</h5>
      <breadcrumb :menu="breadcrumb" :styles="'custom1'"></breadcrumb>
      <br>

      <h5>Custom style 2 breadcrumbs</h5>
      <breadcrumb :menu="breadcrumb" :styles="'custom2'"></breadcrumb>
      <br>

      <h5>Breadcrumbs with icon</h5>
      <breadcrumb :menu="breadcrumbIcon" :separator="'/'"></breadcrumb>
      <br>
      <breadcrumb :menu="breadcrumbIcon" :styles="'custom1'"></breadcrumb>
      <br>
      <breadcrumb :menu="breadcrumbIcon" :styles="'custom2'"></breadcrumb>
    </div>
</template>

<script>
import breadcrumb from '../../breadcrumb/breadcrumb'
export default {
  name: 'breadcrumb-body',
  data: () => ({
    breadcrumb: [
      {
        title: 'Home',
        link: '#',
        icon: ''
      },
      {
        title: 'UI Elements',
        link: '#',
        icon: ''
      },
      {
        title: 'Components',
        link: '#',
        icon: ''
      },
      {
        title: 'Breadcrumb',
        link: '',
        icon: ''
      }
    ],
    breadcrumbIcon: [
      {
        title: 'Home',
        link: '#',
        icon: 'fa fa-home'
      },
      {
        title: 'UI Elements',
        link: '#',
        icon: 'fa fa-paper-plane'
      },
      {
        title: 'Components',
        link: '#',
        icon: 'fa fa-shopping-bag'
      },
      {
        title: 'Breadcrumb',
        link: '',
        icon: 'fa fa-diamond'
      }
    ]
  }),
  components: {
    breadcrumb
  }
}
</script>

<style scoped>

</style>
