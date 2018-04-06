@extends('partials.layout')

@section('content')
	        	@include('partials.banner')
	        	{{-- <div id="controls" class="row" style="height:30px"></div> --}}
	        	@include('partials.hotels', array('hotelsCount' => 570))
	        	@include('partials.about')
	        	@include('partials.features')
@endsection