export interface Product{
  name:string,
  price:number,
  description:string,
  rating:number,
  link:string,
  img:string[],
  categoryID:number;
  productID:number;
}

export var product = {
  name:null,
  price:null,
  description:null,
  rating:null,
  link:null,
  img:null,
  categoryID:null,
  productID:null
}

export var productCategory=[
  product,product,product,product,product,product,product,product,product,product
]

  
  export const products1 = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating:5,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/imgxl.jpg", "assets/images/.jpg", "assets/images/phone1.jpg"],
      categoryID:1,
      productID:11
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone5.jpg"],
      categoryID:1,
      productID:12
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/img3.jpg", "assets/images/phone4.jpg",, "assets/images/phone6.jpg"],
      categoryID:1,
      productID:13
    },
    {
      name: 'Phone4 Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone5.jpg", "assets/images/phone6.jpg", "assets/images/phone1.jpg"],
      categoryID:1,
      productID:14
    },
    {
      name: 'Phone5 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/img4.jpg", "assets/images/phone2.jpg", "assets/images/iphone2.jpg"],
      categoryID:1,
      productID:15
    },
    {
      name: 'Phone6 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/img5.jpg", "assets/images/phone4.jpg", "assets/images/iphone1.png"],
      categoryID:1,
      productID:16
    },

    {
      name: 'Phone7 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/img6.jpg", "assets/images/phone6.jpg", "assets/images/phone2.jpg"],
      categoryID:1,
      productID:17
    },

    {
      name: 'Phone8 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/img8.jpg", "assets/images/phone5.jpg", "assets/images/phone3.jpg"],
      categoryID:1,
      productID:18
      
    },
    {
      name: 'Phone9 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/img9.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:1,
      productID:19
    },
    {
      name: 'Phone10 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/img10.jpg", "assets/images/phone2.jpg", "assets/images/phone6.jpg"],
      categoryID:1,
      productID:20
    }
    
  ]
  
  export const products2 = [
    {
      name: 'MacBook Air 2017',
      price: 988,
      description: 'A comfortable Laptop',
      rating:10,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/mc.jpeg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:2, 
      productID:21
    },
    {
      name: 'MacBook Air 2018',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/18.jpg", "assets/images/phone2.jpg", "assets/images/phone5.jpg"],
      categoryID:2,
      productID:22
    },
    {
      name: 'Mac Book Air 2019  ',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/19.jpg", "assets/images/phone4.jpg",, "assets/images/phone6.jpg"],
      categoryID:2,
      productID:23
    },
    {
      name: 'Mac Book Pro 2015',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/15.jpg", "assets/images/phone6.jpg", "assets/images/phone1.jpg"],
      categoryID:2,
      productID:24
    },
    {
      name: 'Mac Book Pro 2016',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/16.jpg", "assets/images/phone2.jpg", "assets/images/iphone2.jpg"],
      categoryID:2,
      productID:25
    },
    {
      name: 'Mac Book Pro 2017',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/17.jpg", "assets/images/phone4.jpg", "assets/images/iphone1.png"],
      categoryID:2,
      productID:26
    },

    {
      name: 'Mac Book Pro 2018',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/18.jpg", "assets/images/phone6.jpg", "assets/images/phone2.jpg"],
      categoryID:2,
      productID:27
    },

    {
      name: 'Mac Book Pro 2019',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/19.jpg", "assets/images/phone5.jpg", "assets/images/phone3.jpg"],
      categoryID:2,
      productID:28
    },
    {
      name: 'Mac Book Pro 2020',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/20.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:2,
      productID:29
    },
    {
      name: 'Mac Book Air 2014',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/13.jpg", "assets/images/phone2.jpg", "assets/images/phone6.jpg"],
      categoryID:2,
      productID:30
    }
    
  ]

  export const products3 = [
    {
      name: 'IPad 1',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating:5,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/n1.jpg", "assets/images/n2.jpg", "assets/images/n3.jpg"],
      categoryID:3,
      productID:31
    },
    {
      name: 'IPad 2',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/b1.jpg", "assets/images/n2.jpg", "assets/images/n3.jpg"],
      categoryID:3,
      productID:32
    },
    {
      name: 'IPad 3',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/o.jpg", "assets/images/o1.jpg",, "assets/images/n2.jpg"],
      categoryID:3,
      productID:33
    },
    {
      name: 'IPad 4',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/c.jpg", "assets/images/c1.jpg", "assets/images/n3.jpg"],
      categoryID:3,
      productID:34
    },
    {
      name: 'Ipad Air',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/y.jpg", "assets/images/y1.jpg", "assets/images/b1.jpg"],
      categoryID:3,
      productID:35
    },
    {
      name: 'Ipad Air 2',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/y3.jpg", "assets/images/y4.jpg", "assets/images/c1.png"],
      categoryID:3,
      productID:36
    },

    {
      name: 'Ipad Mini',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/k.jpg", "assets/images/k2.jpg", "assets/images/k1.jpg"],
      categoryID:3,
      productID:37
    },

    {
      name: 'Ipad Mini 2',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/l.jpg", "assets/images/l1.jpg", "assets/images/a2.jpg"],
      categoryID:3,
      productID:38
    },
    {
      name: 'Ipad Mini 3',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/m3.jpg", "assets/images/m2.jpg", "assets/images/1.jpg"],
      categoryID:3,
      productID:39
    },
    {
      name: 'Ipad Mini 4',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/m4.jpg", "assets/images/2.jpg", "assets/images/m2 .jpg"],
      categoryID:3,
      productID:40
    }
    
  ]

  export const products4 = [
    {
      name: 'Air Pods 1',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating:5,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg"],
      categoryID:4,
      productID:41
    },
    {
      name: 'Air Pods 2',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/4.jpg", "assets/images/2.jpg", "assets/images/3.jpg"],
      categoryID:4,
      productID:42
    },
    {
      name: 'Air Pods Pro',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/a.jpg", "assets/images/a2.jpg",, "assets/images/a3.jpg"],
      categoryID:4,
      productID:43
    },
    {
      name: 'Apple Watch S3',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/s.jpg", "assets/images/s1.jpg", "assets/images/s2.jpg"],
      categoryID:4,
      productID:44
    },
    {
      name: 'Apple Watch S5',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/s5.jpg", "assets/images/s.jpg", "assets/images/s2.jpg"],
      categoryID:4,
      productID:45
    },
    {
      name: 'Apple Watch Sport',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/x.jpg", "assets/images/x2.jpg", "assets/images/s5.jpg"],
      categoryID:4,
      productID:46
    },

    {
      name: 'Phone7 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone6.jpg", "assets/images/phone2.jpg"],
      categoryID:4,
      productID:47
    },

    {
      name: 'Phone8 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone2.jpg", "assets/images/phone5.jpg", "assets/images/phone3.jpg"],
      categoryID:4,
      productID:48
    },
    {
      name: 'Phone9 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:4,
      productID:49
    },
    {
      name: 'Phone10 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone6.jpg"],
      categoryID:4,
      productID:50
    }
    
  ]
  ;
  