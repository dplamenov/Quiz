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

    public function create(Request $request): \Illuminate\Http\JsonResponse
    {
        if (isset($_FILES['image'])) {
            $name = $request->get('name');
            $description = $request->get('description');


            $category = new \App\Models\Category();
            $category->name = $name;
            $category->description = $description;
            $category->position = 1;
            $category->save();

            $image = $_FILES['image'];
            $target_dir = "./categories/";
            $target_file = $target_dir . $category->id;

            if (!move_uploaded_file($image["tmp_name"], $target_file . '.png')) {
                $category->delete();
                return response()->json(['error' => 'image is not valid']);
            }

            return response()->json($request->file('image'));
        }

        return response()->json(['error' => 'image is not valid']);
    }

    public function getById($catId): \Illuminate\Http\JsonResponse
    {
        $category = \App\Models\Category::find($catId);
        $category->questionsCount = \App\Models\Question::where('category', $catId)->count();

        return response()->json($category);
    }

    public function edit($catId, Request $request): \Illuminate\Http\JsonResponse
    {
        $category = \App\Models\Category::find($catId);

        $category->name = $request->get('name');
        $category->save();

        return response()->json($category);
    }

    public function delete($catId)
    {
        $category = \App\Models\Category::find($catId);
        $category->delete();

        return response()->json($category);
    }
}
