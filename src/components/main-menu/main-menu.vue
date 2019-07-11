<template>
  <div class="menu-host">
    <nav class="main-menu">
    <ul>
      <li
        class="menu-item"
        v-for="item of mainMenuService"
        :key="item.title"
        :class="{
        'has-sub': item.sub,
        'active': item.active,
        'menu-item-group': item.groupTitle
      }"
        active-class="active"
        @click="pathClick(item)"
      >
        <!-- Group title -->
        <span class="group-title" v-if="item.groupTitle">{{ item.title }}</span>

        <!-- Simple item -->
        <router-link tag="a" :to="item.routing" class="item-link" v-if="!item.groupTitle && !item.sub">
          <span class="item-badge" v-if="item.budge" :style="{'background': item.budgeColor}">{{ item.budge }}</span>
          <span class="icon" v-if="item.icon" :class="item.icon"></span>{{ item.title }}
        </router-link>

        <!-- Item with sub -->
        <a href="#" class="item-link test" v-if="!item.groupTitle && item.sub" @click="toggle($event, item, this)">
          <span class="item-badge" v-if="item.budge" :style="{'background': item.budgeColor}">{{ item.budge }}</span>
          <span class="icon" v-if="item.icon" :class="item.icon"></span>{{ item.title }}
          <i class="caret fa fa-angle-right" v-if="item.sub"></i>
        </a>

        <!-- Menu sub -->
        <ul class="sub" v-if="!item.groupTitle && item.sub">
          <li
            class="menu-item"
            v-for="itemSub of item.sub"
            :key="itemSub.title"
          >
            <router-link tag="a" :to="itemSub.routing" class="item-link">{{ itemSub.title }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'main-menu',
  data: () => ({
    mainMenuService: [
      {
        'title': 'Main',
        'icon': '',
        'active': true,
        'groupTitle': true,
        'sub': '',
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Dashboards',
        'icon': 'fa fa-home',
        'active': false,
        'groupTitle': false,
        'sub': [
          {
            'title': 'Dashboard 1',
            'routing': '/default-layout/dashboard'
          },
          {
            'title': 'Dashboard 2',
            'routing': '/default-layout/dashboard-2'
          }
        ],
        'routing': '',
        'externalLink': '',
        'budge': '2',
        'budgeColor': '#f44236'
      },
      {
        'title': 'Widgets',
        'icon': 'fa fa-th',
        'active': false,
        'groupTitle': false,
        'sub': '',
        'routing': '/default-layout/widgets',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Calendar',
        'icon': 'fa fa-calendar',
        'active': false,
        'groupTitle': false,
        'sub': '',
        'routing': '/default-layout/calendar',
        'externalLink': '',
        'budge': 'New',
        'budgeColor': '#008000'
      },
      {
        'title': 'UI Elements',
        'icon': '',
        'active': false,
        'groupTitle': true,
        'sub': '',
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Material components',
        'icon': 'fa fa-briefcase',
        'active': false,
        'groupTitle': false,
        'sub': [
          {
            'title': 'Button',
            'routing': '/default-layout/button'
          },
          {
            'title': 'Card',
            'routing': '/default-layout/card'
          },
          {
            'title': 'Checkbox',
            'routing': '/default-layout/checkbox'
          },
          {
            'title': 'Chips',
            'routing': '/default-layout/chips'
          },
          {
            'title': 'Dialog',
            'routing': '/default-layout/dialog'
          },
          {
            'title': 'icon',
            'routing': '/default-layout/icon'
          },
          {
            'title': 'Input',
            'routing': '/default-layout/input'
          },
          {
            'title': 'List',
            'routing': '/default-layout/list'
          },
          {
            'title': 'Menu',
            'routing': '/default-layout/menu'
          },
          {
            'title': 'Progress bar',
            'routing': '/default-layout/progress-bar'
          },
          {
            'title': 'Progress spinner',
            'routing': '/default-layout/progress-spinner'
          },
          {
            'title': 'Radio Button',
            'routing': '/default-layout/radio-button'
          },
          {
            'title': 'Select',
            'routing': '/default-layout/select'
          },
          {
            'title': 'Slider',
            'routing': '/default-layout/slider'
          },
          {
            'title': 'Slide toggle',
            'routing': '/default-layout/slide-toggle'
          },
          {
            'title': 'Snackbar',
            'routing': '/default-layout/snackbar'
          },
          {
            'title': 'Tabs',
            'routing': '/default-layout/tabs'
          },
          {
            'title': 'Toolbar',
            'routing': '/default-layout/toolbar'
          },
          {
            'title': 'Tooltip',
            'routing': '/default-layout/tooltip'
          }
        ],
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'A2 components',
        'icon': 'fa fa-gem',
        'active': false,
        'groupTitle': false,
        'sub': [
          {
            'title': 'Alert',
            'routing': '/default-layout/alert'
          },
          {
            'title': 'Badge',
            'routing': '/default-layout/badge'
          },
          {
            'title': 'Breadcrumb',
            'routing': '/default-layout/breadcrumb'
          },
          {
            'title': 'Card',
            'routing': '/default-layout/a2-card'
          },
          {
            'title': 'File',
            'routing': '/default-layout/file'
          }
        ],
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Typography',
        'icon': 'fa fa-font',
        'active': false,
        'groupTitle': false,
        'sub': '',
        'routing': '/default-layout/typography',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Tables',
        'icon': 'fa fa-table',
        'active': false,
        'groupTitle': false,
        'sub': [
          {
            'title': 'Simple table',
            'routing': '/default-layout/simple-table'
          },
          {
            'title': 'Sorting table',
            'routing': '/default-layout/sorting-table'
          },
          {
            'title': 'Filtering table',
            'routing': '/default-layout/filtering-table'
          },
          {
            'title': 'Pagination table',
            'routing': '/default-layout/pagination-table'
          },
          {
            'title': 'Bootstrap tables',
            'routing': '/default-layout/bootstrap-tables'
          }
        ],
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Forms',
        'icon': 'fa fa-check-square',
        'active': false,
        'groupTitle': false,
        'sub': [
          {
            'title': 'Form Elements',
            'routing': '/default-layout/form-elements'
          },
          {
            'title': 'Form Layout',
            'routing': '/default-layout/form-layout'
          },
          {
            'title': 'Form Validation',
            'routing': '/default-layout/form-validation'
          }
        ],
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Charts',
        'icon': 'fa fa-chart-pie',
        'active': false,
        'groupTitle': false,
        'sub': [
          {
            'title': 'Line Chart',
            'routing': '/default-layout/line-chart'
          },
          {
            'title': 'Bar Chart',
            'routing': '/default-layout/bar-chart'
          },
          {
            'title': 'Doughnut Chart',
            'routing': '/default-layout/doughnut-chart'
          },
          {
            'title': 'Radar Chart',
            'routing': '/default-layout/radar-chart'
          },
          {
            'title': 'Pie Chart',
            'routing': '/default-layout/pie-chart'
          },
          {
            'title': 'Polar Area Chart',
            'routing': '/default-layout/polar-area-chart'
          },
          {
            'title': 'Dynamic Chart',
            'routing': '/default-layout/dynamic-chart'
          }
        ],
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Maps',
        'icon': 'fa fa-map-marker',
        'active': false,
        'groupTitle': false,
        'sub': [
          {
            'title': 'Google map',
            'routing': '/default-layout/google-map'
          },
          {
            'title': 'Leaflet map',
            'routing': '/default-layout/leaflet-map'
          }
        ],
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Pages',
        'icon': '',
        'active': false,
        'groupTitle': true,
        'sub': '',
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      },
      {
        'title': 'Pages service',
        'icon': 'fa fa-edit',
        'active': false,
        'groupTitle': false,
        'sub': [
          {
            'title': 'About Us',
            'routing': '/default-layout/about-us'
          },
          {
            'title': 'FAQ',
            'routing': '/default-layout/faq'
          },
          {
            'title': 'TimeLine',
            'routing': '/default-layout/timeline'
          },
          {
            'title': 'Invoice',
            'routing': '/default-layout/invoice'
          }
        ],
        'routing': '',
        'externalLink': '',
        'budge': 'New',
        'budgeColor': '#008000'
      },
      {
        'title': 'Extra pages',
        'icon': 'fa fa-clone',
        'active': false,
        'groupTitle': false,
        'sub': [
          {
            'title': 'Sign In 1',
            'routing': '/extra-layout/sign-in'
          },
          {
            'title': 'Sign In 2',
            'routing': '/default-layout/sign-in'
          },
          {
            'title': 'Sign In with Social',
            'routing': '/extra-layout/sign-in-social'
          },
          {
            'title': 'Sign Up 1',
            'routing': '/extra-layout/sign-up'
          },
          {
            'title': 'Sign Up 2',
            'routing': '/default-layout/sign-up'
          },
          {
            'title': 'Forgot password',
            'routing': '/extra-layout/forgot'
          },
          {
            'title': 'Confirm email',
            'routing': '/extra-layout/confirm'
          },
          {
            'title': '404',
            'routing': '/extra-layout/page-404'
          },
          {
            'title': '500',
            'routing': '/extra-layout/page-500'
          },
          {
            'title': 'Not found',
            'routing': '/default-layout/not-found'
          }
        ],
        'routing': '',
        'externalLink': '',
        'budge': '',
        'budgeColor': ''
      }
    ]
  }),
  mounted () {
    let element = document.querySelector('.item-link.router-link-active').parentNode
    let clickElement = element.parentNode.previousSibling
    let classHas = element.classList.contains('active')

    if (classHas === false) {
      element.classList.add('active')
      if (element.nextSibling === null) {
        element.previousSibling.childNodes[0].click()
        element.childNodes[0].click()
      } else {
        element.nextSibling.childNodes[0].click()
        element.childNodes[0].click()
      }
    }

    if (clickElement === null) {
      element.classList.add('active')
    } else {
      clickElement.parentNode.classList.add('active')
    }
  },
  methods: {
    toggle (event, item, el) {
      event.preventDefault()
      let items = this.mainMenuService
      if (item.active) item.active = false
      else {
        for (let i = 0; i < items.length; i++) {
          items[i].active = false
        }
        item.active = true
      }
    },
    pathClick (elem) {
      if (elem.routing === '' || elem.routing === undefined) {
        let link = document.querySelectorAll('.menu-item.active')
        let linkClassHas = false
        let path = window.location.pathname

        link.forEach(function (el, index, arr) {
          linkClassHas = el.classList.contains('has-sub')
          if (linkClassHas === false) {
            el.classList.remove('active')
            let objAttrHref = el.children[0].getAttribute('href')

            if (objAttrHref === path) {
              let hasLink = document.querySelectorAll('.menu-item.has-sub.active')

              hasLink.forEach(function (el, index, arr) {
                el.classList.remove('active')
              })

              el.classList.add('active')
            }
          }
        })
      } else {
        let elements = document.querySelectorAll('.router-link-active')
        let temp = ''
        let hasLink = document.querySelectorAll('.menu-item.has-sub.active')

        hasLink.forEach(function (el, index, arr) {
          el.classList.remove('active')
        })

        elements.forEach(function (el, index, mas) {
          temp = el.parentNode.classList.contains('active')

          if (temp === true) {
            el.parentNode.classList.remove('active')
          }
        })

        let rout = elem.routing
        let aHref = document.querySelector('a.item-link[href="' + rout + '"]')

        aHref.parentNode.classList.add('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/sass/variable';
.item-link.router-link-exact-active.router-link-active {
  background-color: #2E3D50;
}

.menu-host {
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  .main-menu {
    max-width: 100%;

    > ul {
      list-style-type: none;
      margin: 0;
      padding: 22px 0;

      .menu-item {
        position: relative;

        &:after {
          background: main-color(A100);
          bottom: 0;
          content: '';
          position: absolute;
          right: 100%;
          top: 0;
          transition: transform .2s $animation;
          width: 4px;

          .rtl & {
            left: 100%;
            right: auto;
          }
        }
        .item-link {
          color: rgba(#fff,.5);
          display: block;
          font-size: 1rem;
          font-weight: 400;
          padding: 11px 22px;
          position: relative;
          text-decoration: none;
          transition:
            background .2s $animation,
            color .2s $animation;

          .item-badge {
            background: rgba(#fff,.2);
            border-radius: 8px;
            color: #fff;
            float: right;
            font-size: 10px;
            line-height: 1;
            margin-top: 2px;
            padding: 2px 6px 4px;

            .rtl & {
              float: left;
            }
          }
          .icon {
            transition: color .2s $animation;
            width: 22px;
          }
          &:hover {
            color: #fff;
          }
        }
        &.menu-item-group {
          &:after {
            display: none;
          }
        }
        .group-title {
          color: rgba(#000,.6);
          display: block;
          font-size: .8rem;
          font-weight: 600;
          padding: 6px 22px 5px;
          text-transform: uppercase;
        }
        .sub {
          list-style-type: none;
          overflow: hidden;
          margin: 0;
          max-height: 0;
          padding: 0;
          transition: max-height .1s $animation;

          .menu-item {
            .item-link {
              padding: 5px 22px 6px 44px;
            }
            &:first-child {
              > .item-link {
                &:before {
                  border-top: 1px solid transparent;
                  content: '';
                  left: 0;
                  position: absolute;
                  right: 0;
                  top: 0;
                  transition: border .2s $animation;
                }
              }
            }
          }
        }
        &:hover {
          &:after {
            transform: translateX(4px);

            .rtl & {
              transform: translateX(-4px);
            }
          }
        }
        &.active {
          &:after {
            transform: translateX(4px);

            .rtl & {
              transform: translateX(-4px);
            }
          }
          > .item-link {
            background: main-color(700);
            color: #fff;

            .icon {
              color: main-color(A100);
            }
          }
        }
        &.has-sub {
          position: relative;

          > .item-link {
            position: relative;

            .caret {
              margin-top: .55rem;
              position: absolute;
              right: 13px;
              top: 6px;
              transition: transform .1s $animation;

              .rtl & {
                left: 13px;
                right: auto;
              }
            }
          }
          &.active {
            > .item-link {
              .caret {
                transform: rotate(90deg);
              }
            }
            > .sub {
              max-height: 1000px;

              > .menu-item {
                .router-link-active {
                  color: white;
                }
                &.active {
                  &:first-child {
                    > .item-link {
                      &:before {
                        border-top-color: rgba(#fff,.1);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
