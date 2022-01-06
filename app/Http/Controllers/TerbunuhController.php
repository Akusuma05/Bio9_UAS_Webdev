<?php

namespace App\Http\Controllers;

use App\Models\terbunuh;
use Illuminate\Http\Request;

class TerbunuhController extends Controller
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
        terbunuh::create([
            'terbunuh_id' => $request->terbunuh_id,
            'monster_id_terbunuh' => $request->monster_id_terbunuh,
            'student_gamedata_id_terbunuh' => $request->student_gamedata_id_terbunuh,
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
        $terbunuh = terbunuh::where('student_gamedata_id_terbunuh', $id)->first();
        return response()->json($terbunuh, 200);
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
        $terbunuh = terbunuh::where('terbunuh_id', $id);
        $terbunuh->update([
            'monster_id_terbunuh' => $request->monster_id_terbunuh,
            'student_gamedata_id_terbunuh' => $request->student_gamedata_id_terbunuh,
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
