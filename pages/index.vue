<template>
  <div class="container">
    <h1>Welcome!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto nesciunt praesentium quo, hic distinctio maiores id in, consequuntur assumenda non explicabo tempora facilis corrupti? Nesciunt labore modi deleniti officiis.</p>
  </div>
</template>

<style lang="scss">
  h1 {
     @include heading-3($white);
  }

  p {
    @include large-text-bold;
  }
</style>
