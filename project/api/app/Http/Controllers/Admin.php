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
            $q->category = \App\Models\Category::find($catId)->name;
        }
        return response()->json($questions);
    }

    public function getData(): \Illuminate\Http\JsonResponse
    {
        $result = [
            'users' => [
                'count' => \App\Models\User::count()
            ],
            'categories' => [
                'count' => \App\Models\Category::count()
            ],
            'questions' => [
                'count' => \App\Models\Question::count()
            ]
        ];

        return response()->json($result);
    }
}
