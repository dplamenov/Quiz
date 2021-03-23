<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionError extends Model
{
    use HasFactory;

    public function usesTimestamps() : bool{
        return false;
    }
}
