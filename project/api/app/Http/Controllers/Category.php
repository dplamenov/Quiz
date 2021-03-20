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
        if (isset($_FILES['image'])) {
            $name = $request->get('name');
            $description = $request->get('description');

            $image = $_FILES['image'];
            $target_dir = "./categories/";
            $target_file = $target_dir . basename($name);

            if (!move_uploaded_file($image["tmp_name"], $target_file . '.png')) {
                return response()->json(['error' => 'image is not valid']);
            }

            $category = new \App\Models\Category();
            $category->name = $name;
            $category->description = $description;
            $category->position = 1;
            $category->save();

            return response()->json($request->file('image'));
        }

        return response()->json(['error' => 'image is not valid']);


    }
}
