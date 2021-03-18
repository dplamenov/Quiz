<?php

namespace App\Http\Controllers;


class Admin extends Controller
{
    public function getAllUsers(): \Illuminate\Http\JsonResponse
    {
        $users = \App\Models\User::all();
        return response()->json($users);
    }

    public function getAllCategories(): \Illuminate\Http\JsonResponse
    {
        $categories = \App\Models\Category::all();
        return response()->json($categories);
    }

    public function getAllQuestions(): \Illuminate\Http\JsonResponse
    {
        $questions = \App\Models\Question::all();
        foreach ($questions as $q) {
            $catId = $q->category;
//            var_dump($catId);
            $q->category = \App\Models\Category::find($catId)->name;
        }
        return response()->json($questions);
    }
}
