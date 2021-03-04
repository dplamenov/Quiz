<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class User extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = Models\User::all();
        return response()->json($users);
    }

    public function login(Request $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');

        $attempt = Auth::attempt(['email' => $email, 'password' => $password]);

        $token = Str::random(60);

        $request->user()->forceFill([
            'auth_token' => hash('sha256', $token),
        ])->save();

        return response()->json(['auth' => $request->user()]);
    }

    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $email = $request->get('email');
        $password = $request->get('password');
        $realname = $request->get('real_name');

        $user = new Models\User();
        $user->email = $email;
        $user->password = password_hash($password, PASSWORD_BCRYPT, ['cost' => 14]);
        $user->real_name = $realname;
        $user->save();

        return response()->json($request->all());
    }

    public function logout()
    {

    }

    public function auth(Request $request)
    {
        return response()->json(['a' => $request->cookies]);
    }
}
