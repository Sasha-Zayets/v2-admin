import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/dashboard/dashboard'
import Dashboard2 from '../components/dashboard-2/dashboard-2'
import Calendar from '../components/calendar/calendar'
import Button from '../components/material-components/button/button'
import Card from '../components/material-components/card/card'
import Checkbox from '../components/material-components/checkbox/checkbox'
import Chips from '../components/material-components/chips/chips'
import Dialog from '../components/material-components/dialog/dialog'
import Icon from '../components/material-components/icon/icon'
import Inputs from '../components/material-components/input/inputs'
import List from '../components/material-components/list/list'
import Tooltip from '../components/material-components/tooltips/tooltips'
import Toolbar from '../components/material-components/toolbar/toolbar'
import Tabs from '../components/material-components/tabs/tabs'
import Snackbar from '../components/material-components/snackbar/snackbar'
import SlideToggle from '../components/material-components/slide-toggle/slide-toggle'
import RadioButton from '../components/material-components/radio-button/radio-button'
import Select from '../components/material-components/select/select'
import ProgressBar from '../components/material-components/progress-bar/progress-bar'
import ProgressSpinner from '../components/material-components/progress-spinner/progress-spinner'
import Menu from '../components/material-components/menu/menu'
import Slider from '../components/material-components/slider/slider'
import Typography from '../components/typography/typography'
import Alert from '../components/vue-components/alert/alert'
import VueCard from '../components/vue-components/card/card'
import Files from '../components/vue-components/file/files'
import Badge from '../components/vue-components/badge/badge'
import Breadcrumb from '../components/vue-components/breadcrumb/breadcrumb'
import Faq from '../components/page-service/faq/faq'
import AboutUs from '../components/page-service/about-us/about-us'
import Timeline from '../components/page-service/timeline/timeline'
import Invoice from '../components/page-service/invoice/invoice'
import SimpleTable from '../components/tables/simple-tables/simple-table'
import SortTable from '../components/tables/sorting-table/sorting-table'
import FilterTable from '../components/tables/filtering-table/filtering-table'
import PageTable from '../components/tables/pagination-table/pagination-table'
import BootstrapTable from '../components/tables/bootstrap-table/bootstrap-table'
import Page404 from '../components/extra-page/page-404/page-404'
import Page500 from '../components/extra-page/page-500/page-500'
import NotFound from '../components/extra-page/not-found/not-found'
import Confirm from '../components/extra-page/confirm/confirm'
import Forgot from '../components/extra-page/forgot/forgot'
import SignIn1 from '../components/extra-page/sign-in-1/sign-in-1'
import SignIn2 from '../components/extra-page/sign-in-2/sign-in-2'
import SignInSocial from '../components/extra-page/sign-in-3/sign-in-3'
import SignUp1 from '../components/extra-page/sign-up-1/sign-up-1'
import SignUp2 from '../components/extra-page/sign-up-2/sign-up-2'
import Widtgets from '../components/widgets/widgets'
import FormElements from '../components/form/form-elements/form-elements'
import FormLayout from '../components/form/form-layout/form-layout'
import FormValidator from '../components/form/form-validator/form-validator'
import PolarChart from '../components/charts/polar/polar'
import PieChart from '../components/charts/pieChart/pieChart'
import RadarChart from '../components/charts/radarChart/radarChart'
import DoughnutChart from '../components/charts/doughnutChart/doughnutChart'
import LineCharts from '../components/charts/lineCharts/lineCharts'
import BarCharts from '../components/charts/barChart/barChart'
import DynamicChart from '../components/charts/dynamicChart/dynamicChart'
import LeafterMaps from '../components/maps/leafter'
import GoogleMap from '../components/maps/google/googleMaps'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Defalut',
      redirect: '/default-layout/dashboard'
    },
    {
      path: '/default-layout/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/default-layout/dashboard-2',
      name: 'Dashboard-2',
      component: Dashboard2
    },
    {
      path: '/default-layout/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/default-layout/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/default-layout/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/default-layout/checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path: '/default-layout/chips',
      name: 'Chips',
      component: Chips
    },
    {
      path: '/default-layout/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/default-layout/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/default-layout/input',
      name: 'Inputs',
      component: Inputs
    },
    {
      path: '/default-layout/list',
      name: 'List',
      component: List
    },
    {
      path: '/default-layout/radio-button',
      name: 'Radio Button',
      component: RadioButton
    },
    {
      path: '/default-layout/progress-bar',
      name: 'Progress bar',
      component: ProgressBar
    },
    {
      path: '/default-layout/progress-spinner',
      name: 'Progress spinner',
      component: ProgressSpinner
    },
    {
      path: '/default-layout/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/default-layout/slide-toggle',
      name: ' Slide toggle',
      component: SlideToggle
    },
    {
      path: '/default-layout/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/default-layout/snackbar',
      name: ' Snackbar',
      component: Snackbar
    },
    {
      path: '/default-layout/tabs',
      name: ' Tabs',
      component: Tabs
    },
    {
      path: '/default-layout/slider',
      name: ' Slider',
      component: Slider
    },
    {
      path: '/default-layout/toolbar',
      name: ' Toolbar',
      component: Toolbar
    },
    {
      path: '/default-layout/tooltip',
      name: ' Tooltip',
      component: Tooltip
    },
    {
      path: '/default-layout/alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/default-layout/a2-card',
      name: 'Cards',
      component: VueCard
    },
    {
      path: '/default-layout/file',
      name: 'File',
      component: Files
    },
    {
      path: '/default-layout/badge',
      name: 'Badge',
      component: Badge
    },
    {
      path: '/default-layout/breadcrumb',
      name: 'Breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/default-layout/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/default-layout/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/default-layout/about-us',
      name: 'About Us',
      component: AboutUs
    },
    {
      path: '/default-layout/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/default-layout/invoice',
      name: 'Invoice',
      component: Invoice
    },
    {
      path: '/default-layout/simple-table',
      name: 'Simple table',
      component: SimpleTable
    },
    {
      path: '/default-layout/sorting-table',
      name: 'Sorting table',
      component: SortTable
    },
    {
      path: '/default-layout/filtering-table',
      name: 'Filtering table',
      component: FilterTable
    },
    {
      path: '/default-layout/pagination-table',
      name: 'Pagination table',
      component: PageTable
    },
    {
      path: '/default-layout/bootstrap-tables',
      name: 'Bootstrap tables',
      component: BootstrapTable
    },
    {
      path: '/default-layout/not-found',
      name: 'Not found',
      component: NotFound
    },
    {
      path: '/extra-layout/sign-in',
      name: 'Sign In',
      component: SignIn2
    },
    {
      path: '/extra-layout/sign-in-social',
      name: 'Sign in social',
      component: SignInSocial
    },
    {
      path: '/default-layout/sign-in',
      name: 'Sign in',
      component: SignIn1
    },
    {
      path: '/extra-layout/sign-up',
      name: 'Sign Up',
      component: SignUp1
    },
    {
      path: '/default-layout/sign-up',
      name: 'Sign Up',
      component: SignUp2
    },
    {
      path: '/extra-layout/page-404',
      name: '404',
      component: Page404
    },
    {
      path: '/extra-layout/page-500',
      name: '500',
      component: Page500
    },
    {
      path: '/extra-layout/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/extra-layout/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/default-layout/widgets',
      name: 'Widgets',
      component: Widtgets
    },
    {
      path: '/default-layout/form-elements',
      name: 'Form Elements',
      component: FormElements
    },
    {
      path: '/default-layout/form-layout',
      name: 'Form Layout',
      component: FormLayout
    },
    {
      path: '/default-layout/form-validation',
      name: 'Form Validation',
      component: FormValidator
    },
    {
      path: '/default-layout/polar-area-chart',
      name: 'Polar chart',
      component: PolarChart
    },
    {
      path: '/default-layout/pie-chart',
      name: 'Pie chart',
      component: PieChart
    },
    {
      path: '/default-layout/radar-chart',
      name: 'Radar chart',
      component: RadarChart
    },
    {
      path: '/default-layout/doughnut-chart',
      name: 'Doughnut chart',
      component: DoughnutChart
    },
    {
      path: '/default-layout/line-chart',
      name: 'Line chart',
      component: LineCharts
    },
    {
      path: '/default-layout/bar-chart',
      name: 'Bar chart',
      component: BarCharts
    },
    {
      path: '/default-layout/dynamic-chart',
      name: 'Dynamic chart',
      component: DynamicChart
    },
    {
      path: '/default-layout/leaflet-map',
      name: 'Leaflet maps',
      component: LeafterMaps
    },
    {
      path: '/default-layout/google-map',
      name: 'Google map',
      component: GoogleMap
    }
  ],
  mode: 'history'
})
