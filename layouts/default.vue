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
  },
  {
    text: 'Profile',
    href: '',
    icon: 'feather:user'
  },
  {
    text: 'Chat',
    href: '',
    icon: 'feather:message-square'
  },
  {
    text: 'Updates',
    href: '',
    icon: 'feather:bell',
    notification: true
  }
]
</script>

<template>
  <main>
    <header
      class="bg-green font-700 h-18 fixed w-full p-4 text-center text-2xl text-white"
    >
      <div
        v-if="$route.path === '/'"
        class="flex h-full w-full flex-row flex-nowrap justify-between"
      >
        <img class="w-auto h-full" src="~/assets/header-logo.png" />
        <p class="whitespace-nowrap pl-2 leading-[40px]">Frontier College</p>
      </div>
      <div v-else>
        <button
          v-if="route.meta.showBack"
          class="absolute left-4 top-1/2 -translate-y-1/2 transform"
          @click="goBack"
        >
          <Icon name="feather:arrow-left" />
        </button>
        <h1 class="whitespace-nowrap leading-[40px]">
          {{ route.meta.title }}
        </h1>
      </div>
    </header>
    <div class="pt-18 pb-18 main-container">
      <slot />
    </div>

    <footer class="bg-light-blue h-18 fixed bottom-0 w-full">
      <nav class="flex h-full flex-row flex-nowrap justify-center">
        <NuxtLink
          v-for="(link, i) in links"
          :key="i"
          :to="link.href"
          class="mobile-button leading-18 z-1 block flex h-full flex-col items-center justify-center px-3"
        >
          <Icon :name="link.icon" size="25px" />
          <span class="font-500 text-sm">{{ link.text }}</span>
          <span class="notification banner" v-show="link.notification"></span>
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
    background: #3dc5c4;
    border-radius: 16px;
    content: '';
    height: 32px;
    opacity: 0;
    position: absolute;
    top: 10px;
    transition: opacity 0.3s;
    width: 60px;
    z-index: -1;
  }

  &:hover,
  &.router-link-active {
    &:after {
      opacity: 1;
    }
  }
}
</style>
