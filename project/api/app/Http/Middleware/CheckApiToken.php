<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckApiToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $authToken = $request->header('auth-token');

        if(!$authToken) {
            return response()->json(['error' => 'no token'], 400);
        }



        return $next($request);
    }
}
