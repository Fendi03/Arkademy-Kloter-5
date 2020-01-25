# Arkademy-Kloter-5

Untuk soal nomer 1, 2, 3, 5 menggunakan Java Script, untuk membukanya bisa menggunakan software Visual Studio Code (Open Terminal -> Ketik : node (nome soal).js)
Untuk soal nomer 4 menggunakan java, untuk membukanya bisa menggunakan CMD dengan cara :
1. Rename file terlebih dahulu menjadi "empat.java"
2. Buka cmd, buka path dimana file empat.java berada.
3. ketik "javac empat.java", tekan enter
4. ketik "java empat", tekan enter lagi
5. program java sudah terbuka di cmd.

Query untuk soal 6a
select T.id, cashier.namecas as cashier, T.category, T.name, T.price from (select product.id, product.id_cashier as cashier, product.name, category.name as category, product.price from product right join category on product.id_category = category.id) AS T inner join cashier on T.cashier = cashier.id order by T.id;

![2020-01-25 (13)](https://user-images.githubusercontent.com/57419280/73123547-c5ec6d00-3fc3-11ea-875c-ce853b5fa160.png)

Screenshot soal 6b dan 6c :

![2020-01-25 (14)](https://user-images.githubusercontent.com/57419280/73123644-912ce580-3fc4-11ea-8315-d317c9701e23.png)
![2020-01-25 (15)](https://user-images.githubusercontent.com/57419280/73123646-91c57c00-3fc4-11ea-9cca-dbb07b7bd03b.png)
![2020-01-25 (17)](https://user-images.githubusercontent.com/57419280/73123648-91c57c00-3fc4-11ea-97ce-4d43121469c5.png)
