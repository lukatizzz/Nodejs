## Cài đặt
1. Clone repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Cài đặt các gói phụ thuộc:
    ```sh
    npm install
    ```

3. Cấu hình môi trường:
    - Tạo file `.env` từ file `.env.example` và cập nhật các biến môi trường cần thiết.

4. Chạy ứng dụng:
    ```sh
    npm start
    ```

## Sử dụng
- Truy cập ứng dụng tại `http://localhost:8080`

## Cấu hình
- Cấu hình cơ sở dữ liệu được lưu trong file [src/config/config.json](src/config/config.json).

## Migrations
- Chạy migrations:
    ```sh
    npx sequelize-cli db:migrate
    ```
## Set up sequelize
Tại thư mục root, sử dụng câu lệnh: node_modules/.bin/sequelize init

## Tạo model: 
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
## Seeders
- Chạy seeders:
    ```sh
    npx sequelize-cli db:seed:all
    ```

## Đóng góp
- Tạo pull request hoặc mở issue để đóng góp cho dự án.

## Giấy phép
- Dự án này được cấp phép theo giấy phép MIT.
