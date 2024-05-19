# Car-Managerment-Dashboard-Synergy-Academy

![Logo](https://github.com/KevinZakky/Car-Managerment-Dashboard-Synergy-Academy/blob/main/diagram.png)

## Halaman

- [Dashboard](https://github.com/KevinZakky/Car-Managerment-Dashboard-Synergy-Academy/blob/main/backend/views/dashboard.ejs)
- [Add Cars](https://github.com/KevinZakky/Car-Managerment-Dashboard-Synergy-Academy/blob/main/backend/views/add_cars.ejs)
- [Login](https://github.com/KevinZakky/Car-Managerment-Dashboard-Synergy-Academy/blob/main/backend/views/login.ejs)

## Endpoint REST API

### Car Routes

- **GET /cars**
  - Deskripsi: Mengambil semua mobil
  - Contoh Response:
    ```json
    [
      {
        "id": 1,
        "title": "Car Title",
        "body": "Description of the car",
        "user_id": 1,
        "status": "available",
        "created_at": "2024-01-01T00:00:00Z"
      },
      ...
    ]
    ```

- **GET /update/:id**
  - Deskripsi: Mengambil informasi mobil berdasarkan ID
  - Contoh Response:
    ```json
    {
      "id": 1,
      "title": "Car Title",
      "body": "Description of the car",
      "user_id": 1,
      "status": "available",
      "created_at": "2024-01-01T00:00:00Z"
    }
    ```

- **POST /add_cars**
  - Deskripsi: Menambah mobil baru
  - Contoh Request Body:
    ```json
    {
      "title": "New Car",
      "body": "New car description",
      "user_id": 1,
      "status": "available"
    }
    ```
  - Contoh Response:
    ```json
    {
      "message": "Car added successfully"
    }
    ```

- **POST /update/:id**
  - Deskripsi: Mengupdate informasi mobil berdasarkan ID
  - Contoh Request Body:
    ```json
    {
      "title": "Updated Car",
      "body": "Updated car description",
      "status": "sold"
    }
    ```
  - Contoh Response:
    ```json
    {
      "message": "Car updated successfully"
    }
    ```

- **GET /delete/:id**
  - Deskripsi: Menghapus mobil berdasarkan ID
  - Contoh Response:
    ```json
    {
      "message": "Car deleted successfully"
    }
    ```

### User Routes

- **GET /users**
  - Deskripsi: Mengambil semua pengguna
  - Contoh Response:
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "created_at": "2024-01-01T00:00:00Z",
        "updated_at": "2024-01-01T00:00:00Z"
      },
      ...
    ]
    ```

- **POST /users**
  - Deskripsi: Mendaftarkan pengguna baru
  - Contoh Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
  - Contoh Response:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **POST /login**
  - Deskripsi: Login pengguna
  - Contoh Request Body:
    ```json
    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
  - Contoh Response:
    ```json
    {
      "message": "Login successful",
      "token": "jwt_token_here"
    }
    ```

- **GET /token**
  - Deskripsi: Mendapatkan token baru menggunakan refresh token
  - Contoh Response:
    ```json
    {
      "token": "new_jwt_token_here"
    }
    ```

- **DELETE /logout**
  - Deskripsi: Logout pengguna
  - Contoh Response:
    ```json
    {
      "message": "Logout successful"
    }


