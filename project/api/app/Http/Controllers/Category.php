<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class Category extends Controller
{
    public function getAll(): \Illuminate\Http\JsonResponse
    {
        $categories = \App\Models\Category::all();
        return response()->json($categories);
    }

    public function create(Request $request)
    {
        $image = $_FILES['image'];
        $target_dir = "./categories/";
        $target_file = $target_dir . basename($image["name"]);

        if(move_uploaded_file($image["tmp_name"], $target_file)){
            echo 'yes';
        }

        return response()->json($request->file('image'));
    }
}
