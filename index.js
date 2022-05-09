class Product {
    constructor(img,nameName,price){
        this.img=img,
        this.nameName=nameName,
        this.price
    }
}
let product = [
    new Product("/icon1.jpg","Bút Kẽ Chân Mày","Sale 5%"),
    new Product("/icon2.jpg","Kem Chống Nắng","Sale 5%"),
    new Product("/icon3.jpg","Mặt Nạ Dưỡng Da","Sale 5%"),
    new Product("/icon4.jpg","Phấn Má","Sale 5%"),
    new Product("/icon5.jpg","Bộ Dụng Cụ Trang Điểm","Sale 5%"),
    new Product("/icon6.jpg","Son Môi","2Sale 5%"),
    new Product("/icon7.jpg","Kem Dưỡng Da","Sale 5%"),
    new Product("/icon8.jpg","Bộ Dụng Cụ Kẹp Lông Mi","Sale 5%"),
    new Product("/icon9.jpg","Son Nước","Sale 5%"),
    new Product("/icon10.jpg","Bộ Dụng Cụ Trang Điểm Trên Má","Sale 5%"),
]
function renderProduct(data){
    let html = data.map(function(products){
        return `
        <div class="product-item">
                                <div class="product-top">
                                    <a href="" class="product-thumb">
                                        <img src="${products.img}" alt="">
                                    </a>
                                    <!-- mua ngay -->
                                </div>
                                <div class="product-info">
                                    <a href="" class="product-name">${products.nameName}</a>
                                    <div class="product-price">${products.price}</div>
                                </div>
                            </div>
        `
    })
    document.getElementById("produc").innerHTML= html.join("")
}
renderProduct(product)
function search(event){
    var keyword = event.target.value;
    var result = product.filter(function(mangaValue){
        return mangaValue.nameName.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
   });
   renderProduct(result);
}