<?php

namespace App\Http\Controllers;

use App\Models\current_monster;
use Illuminate\Http\Request;

class CurrentMonsterController extends Controller
{
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
        current_monster::create([
            'monster_id' => $request->monster_id,
            'gamedata_id' => $request->gamedata_id,
            'monster_base_health' => $request->monster_base_health,
            'monster_health_left' => $request->monster_health_left
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
        $current_monster = current_monster::where('gamedata_id', $id)->first();
        return response()->json($current_monster, 200);
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
        $current_monster = current_monster::where('current_monster_id', $id);
        $current_monster->update([
            'monster_id' => $request->monster_id,
            'gamedata_id' => $request->gamedata_id,
            'monster_base_health' => $request->monster_base_health,
            'monster_health_left' => $request->monster_health_left
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
