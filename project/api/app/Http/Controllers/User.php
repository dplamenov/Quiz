<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models;

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

    public function login()
    {

    }

    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $email = $request->get('email');
        $password = $request->get('password');
        $realname = $request->get('real_name');

        $user = new Models\User();
        $user->email = $email;
        $user->password = $password;
        $user->real_name = $realname;
        $user->save();

        return response()->json($request->all());
    }

    public function logout()
    {

    }
}
