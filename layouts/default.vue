<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const goBack = () => {
  router.go(-1)
}

type Link = {
  text: string
  href: string
  icon: string
  notification?: boolean
}

const links: Link[] = [
  {
    text: 'Home',
    href: '/',
    icon: 'feather:home'
  },
  {
    text: 'Programs',
    href: '/programs',
    icon: 'feather:briefcase'
  }
  // {
  //   text: 'Profile',
  //   href: '',
  //   icon: 'feather:user'
  // },
  // {
  //   text: 'Chat',
  //   href: '',
  //   icon: 'feather:message-square'
  // },
  // {
  //   text: 'Updates',
  //   href: '',
  //   icon: 'feather:bell',
  //   notification: true
  // }
]
</script>

<template>
  <main :class="$route.path === '/' ? 'home' : ''">
    <header class="header fixed w-full text-center text-2xl z-100">
      <div
        v-if="$route.path === '/'"
        class="p-2 flex h-full w-full flex-row flex-nowrap"
      >
        <img class="w-auto h-full" src="~/assets/header-logo.png" />
      </div>
      <div v-else class="p-4 h-full flex flex-col justify-center">
        <button
          v-if="route.meta.showBack"
          class="back-button absolute left-4 top-1/2 -translate-y-1/2 transform"
          @click="goBack"
        >
          <Icon name="feather:arrow-left" />
        </button>
        <h1 class="whitespace-nowrap leading-[40px]">
          {{ route.meta.title }}
        </h1>
      </div>
    </header>
    <div class="pb-18 main-container">
      <slot />
    </div>

    <footer class="footer h-18 fixed bottom-0 w-full">
      <nav class="flex h-full flex-row flex-nowrap justify-center">
        <NuxtLink
          v-for="(link, i) in links"
          :key="i"
          :to="link.href"
          class="mobile-button leading-18 z-1 block flex h-full flex-col items-center justify-center px-3"
        >
          <Icon :name="link.icon" size="25px" />
          <span class="font-500 text-sm">{{ link.text }}</span>
          <span v-show="link.notification" class="notification banner"></span>
        </NuxtLink>
      </nav>
    </footer>
  </main>
</template>

<style lang="scss">
body {
  min-width: 360px;
}
</style>

<style scoped lang="scss">
main {
  header {
    height: 80px;
  }

  .main-container {
    padding-top: 80px;
  }
}

.header {
  background-color: var(--dark-blue);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: 700;
}

// .back-button {
//   color: var(--dark-blue);
// }

.main-container {
  margin: 0 auto;
  max-width: 700px;
  width: 95%;
}

.notification {
  background: red;
  border-radius: 50%;
  height: 10px;
  position: absolute;
  right: 30px;
  top: 13px;
  width: 10px;
}

.mobile-button {
  position: relative;

  &:after {
    // background: var(--green);
    background: var(--light-blue);
    border-radius: 16px;
    content: '';
    height: 32px;
    opacity: 0;
    position: absolute;
    top: 10px;
    transition: background-color 0.5s;
    width: 60px;
    z-index: -1;
  }
  svg {
    color: white;
    transition: color 0.3s;
  }

  &:hover,
  &.router-link-active {
    &:after {
      opacity: 1;
    }
    svg {
      color: var(--black);
    }
  }
}

.footer {
  // background-color: var(--spring-green);
  background-color: var(--dark-blue);
  // background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: white;
  // color: var(--light-blue);
  // color: var(--dark-blue);
}
</style>
