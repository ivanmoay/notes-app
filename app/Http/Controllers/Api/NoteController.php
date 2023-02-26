<?php

namespace App\Http\Controllers\Api;

use App\Models\Note;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Resources\NoteResource;

class NoteController extends Controller
{
    public function index()
    {
        // return Note::all();
        return NoteResource::collection(Note::orderBy('created_at', 'desc')->get());
    }

    public function store(StoreNoteRequest $request)
    {
        $note = Note::create($request->validated());

        return new NoteResource($note);
    }

    public function show(Note $note)
    {
        return new NoteResource($note);
    }

    public function destroy(Note $note)
    {
        $note->delete();

        return response()->noContent();
    }
}
