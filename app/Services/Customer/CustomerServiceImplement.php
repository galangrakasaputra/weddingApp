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

      // Buat jadi json
      $pria = json_encode($data['pria']);
      $wanita = json_encode($data['wanita']);

      // Ambil nama filenya
      $data_file = $file->original;

      // Buat array tanpa image, pria, wanita
      $arrAkhir = collect($data)
                  ->reject(fn($value, $key) => $key === 'image')
                  ->reject(fn($value, $key) => $key === 'pria')
                  ->reject(fn($value, $key) => $key === 'wanita')
                  ->toArray();

      // Masuk image, pria dan wanita ke dalam array
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

    public function getDataWed(int $id)
    {
      return $this->mainRepository->getWed($id);
    }

    // Define your custom methods :)
}
