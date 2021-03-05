<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckApiToken
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */

    public function handle(Request $request, Closure $next)
    {
        $authToken = $request->cookie('auth-token');


        $user = User::where('auth_token', $authToken)->get();
        $request->user = $user[0];
        return $next($request);
    }
}
