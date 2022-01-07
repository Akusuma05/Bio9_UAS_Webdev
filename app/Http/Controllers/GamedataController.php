<?php

namespace App\Http\Controllers;

use App\Models\gamedata;
use Illuminate\Http\Request;

class GamedataController extends Controller
{
    
    public function getGameData($id)
    {
       $gamedata = gamedata::where('student_id',$id)->first();
       return response()->json($gamedata, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        gamedata::create([
            'gamedata_id' => $request->gamedata_id,
            'student_id' => $request->student_id,
            'total_damage' => $request->total_damage,
            'health_left' => $request->health_left,
            'money' => $request->money,
            'time_left' => $request->time_left,
            'current_damage' => $request->current_damage,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $gamedata = gamedata::findOrFail($id);
        $gamedata->update([
            'student_id' => $request->student_id,
            'total_damage' => $request->total_damage,
            'health_left' => $request->health_left,
            'money' => $request->money,
            'time_left' => $request->time_left,
            'current_damage' => $request->current_damage,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
