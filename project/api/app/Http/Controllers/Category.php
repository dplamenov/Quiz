<?php

namespace App\Http\Controllers;


class Category extends Controller
{
    public function getAll(): \Illuminate\Http\JsonResponse
    {
        $categories = \App\Models\Category::all();
        return response()->json($categories);
    }
}
