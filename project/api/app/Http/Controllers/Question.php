<?php

namespace App\Http\Controllers;

use App\Models\QuestionError;
use Illuminate\Http\Request;

class Question extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getRandomById(Request $request): \Illuminate\Http\JsonResponse
    {
        $catId = $request->get('cat');

        if (!isset($catId)) {
            return response()->json(['error' => 'specify category id']);
        }

        $result = \App\Models\Question::where('category', $catId)->get();
        return response()->json(count($result) >= 5 ? $result->random(5) : $result);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $question = new \App\Models\Question();
        $question->question = $request->get('question');
        $question->category = intval($request->get('category'));
        $question->answers = json_encode($request->get('answers'));
        $question->correct_answer = $request->get('correctAnswer');

        $question->save();

        return response()->json($question);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $question = \App\Models\Question::where('id', $id)->get();

        if (count($question) != 1) {
            return response()->json(['error' => 'no question with that id']);
        }

        return response()->json($question[0]);
    }

    public function reportForError(Request $request, $questionId): \Illuminate\Http\JsonResponse
    {
        $error = new QuestionError();
        $error->user_id = $request->user->id;
        $error->question_id = $questionId;
        $error->answer_by_user = $request->get('answer');

        $error->save();

        return response()->json($error);
    }
}
