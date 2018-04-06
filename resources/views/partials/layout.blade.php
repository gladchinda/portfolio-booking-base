<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        @include('partials.meta')

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    </head>
    <body>

    @section('global-header')
        @include('partials.header')
    @show

        <div id="main-container" class="container-fluid">

        @yield('content')

        @section('global-footer')
            @include('partials.footer')
        @show

        </div>

        <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> -->
        <script src="/js/jquery.min.js"></script>
        <script src="/js/jquery.jcarousel.min.js"></script>
        <script src="/js/odometer.min.js"></script>
        <script src="/js/app.js"></script>
    </body>
</html>