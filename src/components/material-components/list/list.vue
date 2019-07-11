<template>
    <div>
      <card :title="'Simple lists'">
        <v-list>
          <v-list-tile>
            <v-list-tile-content>Pepper</v-list-tile-content>
          </v-list-tile>
         <v-list-tile>
           <v-list-tile-content>Salt</v-list-tile-content>
         </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Paprika</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </card>

      <card :title="'Navigation lists'">
        <v-list>
          <v-list-tile @click="item">
            <v-list-tile-content>
              <router-link class="link" to="/default-layout/dashboard">
                Pepper
                <v-btn icon>
                  <v-icon>info</v-icon>
                </v-btn>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="item">
            <v-list-tile-content>
              <router-link class="link" to="/default-layout/dashboard">
                Salt
                <v-btn icon>
                  <v-icon>info</v-icon>
                </v-btn>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="item">
            <v-list-tile-content>
              <router-link class="link" to="/default-layout/dashboard">
                Paprika
                <v-btn icon>
                  <v-icon>info</v-icon>
                </v-btn>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </card>

      <card :title="'Multi-line lists'">
        <v-list>
          <v-list-tile
            v-for="items in list"
            :key="items.from"
            class="list-item"
          >
            <v-list-tile-content>
              <v-list-tile-title class="title">{{items.from}}</v-list-tile-title>
              <v-list-tile-sub-title class="sub-title">{{items.subject}} - {{items.content}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </card>

      <card :title="'Lists with avatars'">
        <v-list>
          <v-list-content
            two-line
            v-for="item in messages"
            :key="item.avatar"
            class="list-user"
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title class="h3-user">{{item.from}}</v-list-tile-title>
              <v-list-tile-sub-title class="content-user">{{item.subject}} - {{item.content}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-content>
        </v-list>
      </card>

      <card :title="'Dense lists'">
        <v-list>
          <v-list-tile>
            <v-list-tile-content class="small-text">Pepper</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content class="small-text">Salt</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content class="small-text">Paprika</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </card>

      <card :title="'Lists with multiple sections'" class="mb-0">
        <v-list two-line subheader>
          <v-subheader inset>Folders</v-subheader>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="item"
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]" color="black" style="font-size: 40px;">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-subheader inset>Files</v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click="item"
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'list',
  data: () => ({
    list: [
      {
        from: 'Nancy',
        subject: 'HTML',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
      },
      {
        from: 'Mary',
        subject: 'Css',
        content: 'Lorem Ipsum has been the industrys standard'
      },
      {
        from: 'Bobby',
        subject: 'Angular 2',
        content: 'It is a long established fact that a reader will be distracted by the readable content'
      },
      {
        from: 'Roma',
        subject: 'Type Script',
        content: 'There are many variations of passages of'
      }
    ],
    messages: [
      {
        from: 'Nancy',
        subject: 'HTML',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        avatar: '/content/avatar-4.jpg'
      },
      {
        from: 'Mary',
        subject: 'Css',
        content: 'Lorem Ipsum has been the industrys standard',
        avatar: '/content/avatar-3.jpg'
      },
      {
        from: 'Bobby',
        subject: 'Angular 2',
        content: 'It is a long established fact that a reader will be distracted by the readable content',
        avatar: '/content/avatar-2.jpg'
      },
      {
        from: 'Roma',
        subject: 'Type Script',
        content: 'There are many variations of passages of',
        avatar: '/content/avatar-1.jpg'
      },
      {
        from: 'Amanda',
        subject: 'PHP',
        content: 'Lorem Ipsum has been the industrys standard',
        avatar: '/content/avatar-5.jpg'
      },
      {
        from: 'Tom',
        subject: 'Sql',
        content: 'There are many variations of passages of',
        avatar: '/content/avatar-6.jpg'
      }
    ],
    items: [
      { icon: 'folder', iconClass: '', title: 'Photos', subtitle: 'Jan 9, 2014' },
      { icon: 'folder', iconClass: '', title: 'Recipes', subtitle: 'Jan 17, 2014' },
      { icon: 'folder', iconClass: '', title: 'Work', subtitle: 'Jan 28, 2014' }
    ],
    items2: [
      { icon: 'note', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
      { icon: 'note', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
    ]
  }),
  methods: {
    item () {}
  },
  components: {
    card
  }
}
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
  color: #3c4e62;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    color: #3c4e62;
  }
}
.title {
  font-weight: bold;
}
.list-item {
  height: 72px;
  display: flex;
  align-items: center;
}
.sub-title {
  color: black;
}
.list-user {
  display: flex;
  align-items: center;
  height: 72px;
}
.h3-user {
  font-size: inherit;
  font-weight: 700;
  line-height: 1.3;
  overflow: hidden;
  margin: 0;
  padding: 0;
  align-items: center;
  display: flex;
}
.content-user {
  font-size: 14px;
  color: black;
}
.v-list__tile__content {
  justify-content: center;
}
.small-text {
  font-size: 12px;
}
</style>
