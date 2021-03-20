<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Game extends Controller
{
    public function storeGame(Request $request): \Illuminate\Http\JsonResponse
    {
        return response()->json($request->user);
    }
}
