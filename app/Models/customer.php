<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class customer extends Model
{
    /**
     * 
     * 
     *  @var string
     */
    protected $table = 'customer_content';

    protected $primaryKey = 'id';

    protected $fillable = [
        'id_customer',
        'male_family',
        'female_family',
        'summary',
        'background',
        'image',
        'location',
        'maps_location',
        'event_date'
    ];

    protected $hidden = [
        'remember_token'
    ];
}
