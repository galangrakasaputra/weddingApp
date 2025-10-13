<?php

namespace App\Services\Customer;

use App\Models\customer;
use App\Models\User;
use LaravelEasyRepository\ServiceApi;
use App\Repositories\Customer\CustomerRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Date;

class CustomerServiceImplement extends ServiceApi implements CustomerService{

    /**
     * set title message api for CRUD
     * @param string $title
     */
     protected string $title = "";
     /**
     * uncomment this to override the default message
     * protected string $create_message = "";
     * protected string $update_message = "";
     * protected string $delete_message = "";
     */

     /**
     * don't change $this->mainRepository variable name
     * because used in extends service class
     */
     protected CustomerRepository $mainRepository;

    public function __construct(CustomerRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    public function moveFile(array $file)
    {
      $arr = [$file['couple'][0], $file['background'][0]];

      for ($i=0; $i < count($file['tambahan']); $i++) { 
          array_push($arr, $file['tambahan'][$i]);
      }

      $id = Auth::user()->id;
      $directory = "undangan/{$id}";
      if(!Storage::exists($directory)){
        Storage::makeDirectory($directory);
      }

      $save = [];

      foreach ($arr as $file){
        $newName = $file->getClientOriginalName();
        
        $path = $file->storeAs($directory, $newName, 'public');

        $save[] = [
          'nama_file' => $newName,
          'directory' => $directory,
          'url' => Storage::url($path)
        ];
      }
      return response()->json([
        'data' => $save
      ]);
    }


    public function insertData(array $data)
    {
      // Masukan image ke folder
      $file = $this->moveFile($data['image']);
      $pria = json_encode($data['pria']);
      $wanita = json_encode($data['wanita']);

      $data_file = $file->original;
      $arrAkhir = collect($data)
                  ->reject(fn($value, $key) => $key === 'image')
                  ->reject(fn($value, $key) => $key === 'pria')
                  ->reject(fn($value, $key) => $key === 'wanita')
                  ->toArray();

      for ($i=0; $i < count($data_file['data']); $i++) { 
        if($i == 1){
          $background = [$data_file['data'][$i]];
        }else{
          $image = [$data_file['data'][$i]];
          $arrAkhir['image'][] = $image;
        }
      }
      $arrAkhir['background'] = $background;
      $arrAkhir['pria'] = $pria;
      $arrAkhir['wanita'] = $wanita;
      
      // Masukan ke database lewat Repository
      $this->mainRepository->insertData($arrAkhir);
    }

    // Define your custom methods :)
}
