<?php

namespace App\Http\Controllers;

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

        $result = \App\Models\Question::where('category', $catId)->get()->random(5);
        return response()->json($result);
    }

    /**
     * Show the form for creating a new resource.correctAnswer
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
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
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
