<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class User extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = \App\Models\User::all();
        return response()->json($users);
    }

    public function login()
    {

    }

    public function register()
    {

    }

    public function logout()
    {

    }
}
