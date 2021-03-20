<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Game extends Controller
{
    public function storeGame(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = $request->user;
        $game = new \App\Models\Game();

        $game->user_id = $user->id;
        $game->category_id = $request->get('category');
        $game->question_count = 5;

        $game->save();

        return response()->json($game);
    }
}
