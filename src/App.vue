<template>
  <main class="bg-richBlack min-h-screen">
    <!--Header Div-->
    <div>
      <div class="flex justify-left pl-8 fixed">
        <img src="./assets/icon.svg" width="60" height="60" class="">
        <h1 class="text-2xl font-mono p-6 text-white font-ubuntu font-bold transition duration-300 hover:text-green">
          Rhys Appleby
        </h1>
      </div>
    </div>
    <!--Landing page Div-->
    <div class="flex justify-left">
      <!--LHS nav Div-->
      <div class="flex justify-left flex-col justify-center min-h-screen pb-28 pl-4 fixed">
        <img src="./assets/line-l.svg" class="">
        <img src="./assets/line-s.svg" class="">
        <img src="./assets/line-s.svg" class="">
        <img src="./assets/line-s.svg" class="">
      </div>
      <!--Intro Div-->
      <div class="">
        <h1 class="text-8xl px-72 py-40 text-white font-ubuntu font-bold transition duration-300 hover:text-green">
          Rhys Appleby
        </h1>
        <!--<a href="#" v-scroll-to="'#about'">click</a>-->
      </div>
    </div>
    <!--About Me Div-->
    <div class="py-[664px] px-36">
      <div class="float-left w-1/2 ">
        <h1 class="text-8xl text-white font-ubuntu font-bold transition duration-300 hover:text-green" id="about">
          About Me
        </h1>
        <p class="text-2xl text-white font-ubuntu-l transition duration-300 py-12 hover:text-green">
          Hello, I am a full stack developer from Australia. I am primarily a front-end developer, however I have a significant amount of experience on the back-end with python. If you are intererested in the technologies I use you can see them below!
        </p>
        <!--Technology Icons-->
        <div class="flex justify-left">
          <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src="./assets/iconPython.svg" class="w-32 h-32 pr-4 transition duration-200 hover:scale-[1.125]"></a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><img src="./assets/iconTypescript.svg" class="w-32 h-32 pr-4 transition duration-200 hover:scale-[1.125]"></a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/iconTailwind.svg" class="w-32 h-32 pr-4 transition duration-200 hover:scale-[1.125]"></a>
          <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"><img src="./assets/iconVue.svg" class="w-32 h-32 pr-4 transition duration-200 hover:scale-[1.125]"></a>
        </div>
        <div class="flex justify-left">
          <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/iconMongo.svg" class="w-32 h-32 pr-4 transition duration-200 hover:scale-[1.125]"></a>
          <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/iconFirebase.svg" class="w-32 h-32 pr-4 transition duration-200 hover:scale-[1.125]"></a>
          <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/iconGit.svg" class="w-32 h-32 pr-4 transition duration-200 hover:scale-[1.125]"></a>
          <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/iconGithub.svg" class="w-32 h-32 pr-4 transition duration-200 hover:scale-[1.125]"></a>
        </div>
      </div>
      <div class="float-right w-1/2">
        <img src="">
      </div>
    </div>
    <!--Projects Div-->
    <div class="py-[664px] px-36">
      <h1 class="text-8xl text-white font-ubuntu font-bold transition duration-300 hover:text-green" id="about">
        Previous Projects
      </h1>        
    </div>
    <!--Contact Me Div-->
    <div class="py-[664px] px-36">
      <h1 class="text-8xl text-white font-ubuntu font-bold transition duration-300 hover:text-green" id="about">
        Contact Me
      </h1>        
    </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap');
</style>

<script setup>

</script>

