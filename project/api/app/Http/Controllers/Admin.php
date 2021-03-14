<?php

namespace App\Http\Controllers;


class Admin extends Controller
{
    public function getAllUsers(): \Illuminate\Http\JsonResponse
    {
        $users = \App\Models\User::all();
        return response()->json($users);
    }

    public function getAllCategories()
    {


    }
}
