<template>
  <router-view></router-view>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    transition: background-color .25s, color .25s;
    color: var(--color-text);
    background-color: var(--color-body);
  }

  body::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .1;
    position: fixed;
    background-image: url(https://github.com/setube/jntm/blob/main/src/assets/bg.png?raw=true);
    background-position: right 50px bottom 30px;
    background-size: auto 30vw;
    background-repeat: no-repeat;
    z-index: -1;
    pointer-events: none;
  }

  .container {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>