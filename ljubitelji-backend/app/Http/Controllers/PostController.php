<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Auth;

class PostController extends Controller
{
    //

    function addPost(Request $req){

        $currentuserid = Auth::user()->id;

        $post = new Post;
        $post->text = $req->input('text');
        $post->photo_path = $req->file('photo_path')->store('posts');
        $post->user_id = $currentuserid;

        $post->save();
       
        return $post;
    }
}
