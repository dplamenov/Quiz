<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class User extends Controller
{
    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $email = $request->get('email');
        $password = $request->get('password');

        Auth::attempt(['email' => $email, 'password' => $password]);

        $token = Str::random(60);


        if (!$request->user()) {
            return response()->json(['error' => 'no user'], 401);
        }

        $request->user()->forceFill([
            'auth_token' => hash('sha256', $token),
        ])->save();

        $request->user()->isOnline = 1;
        $request->user()->save();

        return response()->json($request->user())->cookie('auth-token', $request->user()->auth_token, 'session', null, '.sharkdev.eu', 'none');
    }

    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $email = $request->get('email');
        $password = $request->get('password');
        $realname = $request->get('realName');

        $user = new Models\User();
        $user->email = $email;
        $user->password = password_hash($password, PASSWORD_BCRYPT, ['cost' => 14]);
        $user->real_name = $realname;
        $user->save();

        return response()->json($request->all());
    }

    public function logout(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->user->auth_token = '';
        $request->user->isOnline = 0;
        $request->user->save();

        return response()->json(['logout' => true])->withCookie('auth-token');
    }

    public function auth(Request $request)
    {
        $statusCode = 200;
        $result = $request->user;

        if (!$request->hasUser) {
            $statusCode = 401;
            $result = ['error' => 'no user'];
        }

        return response()->json($result, $statusCode);
    }

    public function addPoints(Request $request)
    {
        $points = $request->get('points');

        $user = $request->user;

        $user->xp += $points;
        $user->level = floor($user->xp / 100) + 1;

        $user->save();

        return response()->json([
            'userPoints' => $user->xp,
            'level' => $user->level,
            'fromCurrentLevel' => $user->xp - ($user->level - 1) * 100,
            'toNextLevel' => $user->level * 100 - $user->xp
        ]);
    }
}
