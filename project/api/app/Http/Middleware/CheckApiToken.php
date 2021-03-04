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
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $authToken = $request->header('auth_token');

        var_dump($request->header('auth'));

        if(!$authToken) {
            return response()->json(['error' => 'no token'], 400);
        }

        $user = User::where('api_token', $authToken)->get();

        var_dump(DB::select('SELECT * FROM `users` WHERE `api_token` = ?', [$authToken]));

        return $next($request);
    }
}
