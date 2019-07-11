<template>
  <div class="site-host">
    <div class="site-navbar">
    <div class="navbar-button" :class="classOpen()" @click="openSidebar()">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h1 class="page-title">{{ this.title }}</h1>

    <div class="nav-items">
      <div class="nav-item">
        <button class="mat-icon-button" @click="open($event)">
          <v-badge right color="red">
            <span slot="badge">1</span>
            <v-icon>
              notifications_none
              <badge :color="'danger'">1</badge>
            </v-icon>
          </v-badge>
        </button>

        <div class="dropdown-menu">
          <h4 class="menu-title">Notifications</h4>
          <ul>
            <li>
              <a href="#">
                <v-icon>group_add</v-icon>
                <div class="content">
                  <span class="desc">This is a new message for my dear friend <strong>Rob</strong>.</span>
                  <span class="date">10 minutes ago</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <v-icon>check</v-icon>
                <div class="content">
                  <span class="desc">Your site visits have increased <strong>15.5%</strong> more since the last week.</span>
                  <span class="date">23 minutes ago</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <v-icon>star</v-icon>
                <div class="content">
                  <span class="desc">Server loaded by 98% please recover soon</span>
                  <span class="date">25 minutes ago</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <v-icon>notifications_active</v-icon>
                <div class="content">
                  <span class="desc">We're looking to hire two more protypers to our team.</span>
                  <span class="date">32 minutes ago</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <v-icon>file_download</v-icon>
                <div class="content">
                  <span class="desc">This is a new message for my dear friend <strong>Rob</strong>.</span>
                  <span class="date">58 minutes ago</span>
                </div>
              </a>
            </li>
          </ul>

          <div class="menu-footer">
            <a href="#">View all notifications</a>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <button class="mat-icon-button" @click="open($event)">
          <v-icon>
            event
            <div class="marker"></div>
          </v-icon>
        </button>

        <div class="dropdown-menu">
          <h4 class="menu-title">Events</h4>

          <ul>
            <li>
              <a href="#">
                <v-icon>android</v-icon>
                <div class="content">
                  <span class="desc">This is a new message for my dear friend <strong>Rob</strong>.</span>
                  <span class="date">2 minutes ago</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <v-icon>free_breakfast</v-icon>
                <div class="content">
                  <span class="desc">This is a new message for my dear friend <strong>Rob</strong>.</span>
                  <span class="date">14 minutes ago</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <v-icon>mood</v-icon>
                <div class="content">
                  <span class="desc">This is a new message for my dear friend <strong>Rob</strong>.</span>
                  <span class="date">15 minutes ago</span>
                </div>
              </a>
            </li>
          </ul>

          <div class="menu-footer">
            <a href="#">View all events</a>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <button class="mat-icon-button" @click="open($event)">
          <v-icon>chat_bubble_outline</v-icon>
        </button>

        <div class="dropdown-menu">
          <h4 class="menu-title">You have 3 new messages</h4>

          <ul>
            <li>
              <a href="#">
                <img class="avatar" src="@/assets/content/avatar-1.jpg" width="42" height="42" alt="">

                <div class="content">
                <span class="meta">
                  <strong class="name">Victor Jara</strong>
                  <span class="date">3 Apr</span>
                </span>
                  <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, odio.</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="avatar" src="@/assets/content/avatar-4.jpg" width="42" height="42" alt="">
                <div class="content">
                <span class="meta">
                  <strong class="name">Nancy Allen</strong>
                  <span class="date">2 Apr</span>
                </span>
                  <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="avatar" src="@/assets/content/avatar-3.jpg" width="42" height="42" alt="">
                <div class="content">
                <span class="meta">
                  <strong class="name">Emma Watson</strong>
                  <span class="date">1 Apr</span>
                </span>
                  <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="nav-item">
        <button class="mat-button" @click="open($event)">
          <div class="avatar"><img src="@/assets/content/avatar-2.jpg" width="40" height="40" alt=""></div>
          <div class="name">Justin Adams</div>
        </button>

        <div class="dropdown-menu mini-menu">
          <ul>
            <li>
              <a href="#"><i class="fa fa-home"></i> My Account</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-user"></i>Profile</a>
            </li>
            <li>
              <router-link tag="a"  to="/default-layout/calendar"><i class="fa fa-calendar"></i> Calendar</router-link>
            </li>
            <li>
              <a href="#"><i class="fa fa-cogs"></i> Settings</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-sign-out-alt"></i> Log Out</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="items-overlay" @click="close($event)"></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'openedSidebar'],
  name: 'navbar',
  methods: {
    classOpen () {
      return {
        'open': this.openedSidebar
      }
    },
    open (event) {
      let clickedComponent = event.target.closest('.nav-item')
      let items = clickedComponent.parentElement.children

      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('opened')
      }
      clickedComponent.classList.add('opened')
    },
    close (event) {
      let clickedComponent = event.target
      let items = clickedComponent.parentElement.children

      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('opened')
      }
    },
    openSidebar () {
      this.$emit('sidebarState')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/variable';
  .site-host {
    background: #fff;
    border-bottom: 1px solid #dfe4ed;
    display: block;
    height: 70px;
    left: $sidebar-width;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 997;
    padding: 0;
    @media #{$max991} {
      left: 0;
    }

    .rtl & {
      left: 0;
      right: $sidebar-width;
      @media #{$max991} {
        right: 0;
      }
    }
    .site-navbar {
      align-items: center;
      display: flex;
      flex-wrap: nowrap;
      height: 100%;
      justify-content: space-between;
      padding: 0 22px;
      @media #{$max991} {
        flex-wrap: wrap;
      }

      .navbar-button {
        cursor: pointer;
        display: none;
        height: 24px;
        margin: 0;
        position: relative;
        transform: rotate(0deg);
        width: 30px;
        @media #{$max991} {
          display: block;
        }

        span {
          background: main-color(500);
          display: block;
          height: 3px;
          opacity: 1;
          position: absolute;
          transform: rotate(0deg);
          transition: .25s $animation;
          width: 50%;

          &:nth-child(even) {
            left: 50%;
          }
          &:nth-child(odd) {
            left: 0px;
          }
          &:nth-child(1),
          &:nth-child(2) {
            top: 0px;
          }
          &:nth-child(3),
          &:nth-child(4) {
            top: 10px;
          }
          &:nth-child(5),
          &:nth-child(6) {
            top: 20px;
          }
        }
        &.open {
          span {
            &:nth-child(1),
            &:nth-child(6) {
              transform: rotate(45deg);
            }
            &:nth-child(2),
            &:nth-child(5) {
              transform: rotate(-45deg);
            }
            &:nth-child(1) {
              left: 3px;
              top: 6px;
            }
            &:nth-child(2) {
              left: calc(50% - 3px);
              top: 6px;
            }
            &:nth-child(3) {
              left: -50%;
              opacity: 0;
            }
            &:nth-child(4) {
              left: 100%;
              opacity: 0;
            }
            &:nth-child(5) {
              left: 3px;
              top: 15px;
            }
            &:nth-child(6) {
              left: calc(50% - 3px);
              top: 15px;
            }
          }
        }
      }
      .page-title {
        font-size: 1.6rem;
        font-weight: normal;
        line-height: 1;
        margin: 0;
        width: 100%;
        @media #{$max991} {
          display: none;
        }
      }
      .nav-items {
        display: flex;
        height: 100%;
        margin: 0 -5px;

        .nav-item {
          align-items: center;
          display: flex;
          height: 100%;
          margin: 0 5px;

          @media #{$min544} {
            position: relative;
          }
            .mat-icon-button,
            .mat-button {
              //color: rgba(#000,.3);
              cursor: pointer;
              min-width: 44px;
              padding: 0;
              transition: color .2s $animation;
              &:focus {
                outline: none !important;
              }
              .v-badge__badge {
                color: white;
                background-color: red;
                border-radius: 50%;
              }
              .v-icon {
                font-size: 30px;
                height: 30px;
                line-height: 30px;
                vertical-align: top;
                width: 30px;
                color: black;
                font-weight: normal;
                &:hover {
                  color: #4FA5DD;
                }
                .marker {
                  background: $info-color;
                  border-radius: 50%;
                  height: 6px;
                  position: absolute;
                  right: 0;
                  top: 0;
                  width: 6px;

                  .rtl & {
                    left: 0;
                    right: auto;
                  }
                }
              }
              .avatar {
                border-radius: 50%;
                height: 40px;
                overflow: hidden;
                width: 40px;
              }
              .name {
                padding-left: 10px;
                white-space: nowrap;
                @media #{$max991} {
                  display: none;
                }
                .rtl & {
                  padding-left: 0;
                  padding-right: 10px;
                }
              }

              .mat-button-focus-overlay,
              .mat-button-ripple {
                display: none;
              }
              &:hover {
                color: main-color(A100);
              }
            }
            .mat-button {
              display: flex;
              align-items: center;
            }
          .dropdown-menu {
            background: main-color(500);
            box-shadow: 0 5px 10px 2px rgba(#000,.25);
            display: none;
            left: 50%;
            margin: 0 0 0 -150px;
            padding: 0;
            position: absolute;
            top: 100%;
            width: 300px;
            z-index: 9999;

            @media #{$max991} {
              left: auto;
              margin-left: 0;
              right: 0;
            }
            @media #{$max543} {
              left: 0;
              margin-left: 0;
              width: 100%;
            }

            .rtl & {
              left: auto;
              margin: 0 -150px 0 0;
              right: 50%;
              @media #{$max991} {
                left: 0;
                margin-right: 0;
                right: auto;
              }
              @media #{$max543} {
                margin-right: 0;
                right: 0;
              }
            }
            &:before {
              border: 10px solid transparent;
              border-bottom-color: main-color(500);
              bottom: 100%;
              content: '';
              left: 50%;
              margin: 0 0 0 -10px;
              position: absolute;
              @media #{$max991} {
                left: 100%;
                margin-left: -34px;
              }
              @media #{$max543} {
                display: none;
              }
            }
            .menu-title,
            .menu-footer {
              margin: 0;
              padding: 11px;
              text-align: center;
            }
            .menu-title {
              border-bottom: 1px solid rgba(#fff,.1);
              color: #fff;
              font-size: 16px;
              line-height: 1.3;
            }
            .menu-footer {
              background: main-color(600);
              a {
                color: #fff;

                &:hover {
                  color: rgba(#fff,.8);
                }
              }
            }
            > ul {
              list-style-type: none;
              margin: 0;
              max-height: 241px;
              overflow: auto;
              padding: 0;

              > li {
                border-bottom: 1px solid rgba(#fff,.05);

                &:last-child {
                  border-bottom: 0;
                }
                > a {
                  align-items: center;
                  color: #fff;
                  display: flex;
                  padding: 11px;
                  transition: background .2s $animation;
                  text-decoration: none;
                  &:hover {
                    background: main-color(A100);
                  }
                  .v-icon {
                    background: rgba(#fff,.1);
                    border-radius: 50%;
                    font-size: 26px;
                    color: white;
                    height: auto;
                    margin-right: 11px;
                    padding: 7px;
                    width: auto;

                    .rtl & {
                      margin-right: 0;
                      margin-left: 11px;
                    }
                  }
                  .avatar {
                    border-radius: 50%;
                    height: 40px;
                    margin-right: 11px;
                    width: 40px;

                    .rtl & {
                      margin-right: 0;
                      margin-left: 11px;
                    }
                  }
                  .content {
                    font-size: .85rem;

                    .desc {
                      display: block;
                    }
                    .date {
                      display: block;
                      font-size: .75rem;
                      font-style: italic;
                      margin-top: 4px;
                      opacity: .6;
                    }
                    .meta {
                      align-items: flex-end;
                      display: flex;
                      justify-content: space-between;
                      line-height: 1.3;
                      margin-bottom: 4px;

                      .date {
                        margin: 0 0 0 11px;
                      }
                    }
                  }
                }
              }
            }
            &.mini-menu {
              left: auto;
              right: 0;
              width: 220px;
              @media #{$max543} {
                width: 100%;
              }

              .rtl & {
                left: 0;
                right: auto;
              }
              &:before {
                display: none;
              }
              > ul {
                > li {
                  > a {
                    padding-top: 8px;
                    padding-bottom: 8px;

                    .fa {
                      margin-right: 11px;
                      min-width: 15px;

                      .rtl & {
                        margin-left: 11px;
                        margin-right: 0;
                      }
                    }
                  }
                }
              }
            }
          }
          &.opened {
              .mat-icon-button,
              .mat-button {
                outline: none;
                color: main-color(A100);
              }
            .dropdown-menu {
              display: block;
            }
            ~ .items-overlay {
              opacity: 1;
              transition:
                .2s opacity 0s $animation,
                0s visibility 0s $animation;
              visibility: visible;
            }
          }
        }
        .items-overlay {
          background: rgba(main-color(500),.2);
          height: 100%;
          left: 0;
          opacity: 0;
          position: fixed;
          top: 0;
          transition:
            .2s opacity 0s $animation,
            0s visibility .2s $animation;
          visibility: hidden;
          width: 100%;
          z-index: 9998;
        }
      }
    }
  }
</style>
