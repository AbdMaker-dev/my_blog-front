<template>
    <div id="slide">
        <div class="jumbotron text-center jum">
            <h1 class="display-3">My-Blogs</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-6">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Slide'
}
</script>

<style scoped>
.jum{
background: #4b6cb7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
h1 { 
    color: #CEF0D4; 
    font-family: 'Rouge Script', cursive; 
    font-size: 100px; font-weight: normal; 
    line-height: 48px; margin: 0 0 50px; 
    text-align: center; 
    text-shadow: 1px 1px 2px #082b34; }
p{
    color:#CEF0D4;
}
</style>