let MidnightOffer = [
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/16/d3b8d240-3506-4c5d-860f-78c8811780331652699890126-Sassafras-_Dressberry_and_More.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/16/bae7593a-43f3-4726-9f55-d35be4f26abc1652699890028-Forever21-_Roadster_-_More.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/16/a0a6b4df-4d7a-48c4-8365-f5e9e51082961652699890117-Roadster-_DB.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/16/66ea143f-c92b-4b64-8f5a-9dc49f487ded1652699890134-Tokyo_Talkies-_Sassafras.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/18/6e5816d7-bf33-40c0-a3ab-e5b7a8d771611652873657314-image_jpeg738073654--1-.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/21/2986a33e-f761-4050-bd8c-0849041f79eb1647864397011-ginger.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/3/fd831d51-a9ea-4006-be80-7b6ea21d186c1656835238565-Activewear_for_women_min_50_off_-Reebok-_HRX_and_more-.png"
    },
];
let midnightCont = document.querySelector(".midnight-offer");
MidnightOffer.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    midnightCont.append(img);
});

let UnbDeals = [
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/16/a3d38fff-989b-4b18-9474-d81d7aae27ff1652707019079-Urbanic-_Mango-_-_More.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f94938ec-b006-403b-822f-5941cb7afa6e1647420838572-SASSAFRAS-_TT.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/556879b2-fd8d-4381-a30a-069b664417351647420838544-Rubans.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/a9e64de7-81be-4198-846a-4aebf4c843641647420838113-Lavie-_Caprese_-_More.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/19/b5830bd1-d028-43c5-a5d2-05ed3d20ec4f1652984519092-1.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/18/8852e447-9d74-4065-91ba-929c9215f3081652873225148-image_jpeg1800399800--1-.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/16/5c5bb453-b682-45af-a6f4-9fe83c0b17b01652707019059-Roadster-_Dressberry-_-_More.png"
    },
];
let unbCont = document.querySelector(".unb-deals");
UnbDeals.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    unbCont.append(img);
});

let BestBuys = [
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/07a892d0-510c-4e17-9276-8e2a6b7ef4741647410586262-Budgetbuys_Flats-_-Heels_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/52734ab5-c3d1-4a77-abaa-d54d57ac3b011647410586539-Budgetbuys_Tops_Tees_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/5a530cd1-3bae-49a6-bd42-bc3dc99cf6ad1647410586086-Budgetbuys_-ActivewearW.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/92cd2e44-e3b4-47a2-b63f-39473ea2b4711647410586105-Budgetbuys_-Dresses.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/b210acfc-cd41-4a45-b538-318117dec2da1647410586362-Budgetbuys_KurtaSets_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/8e140318-81a0-4d05-afde-3f30d0dbadc61647410586302-Budgetbuys_Handbags.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/b04d6946-4158-4f85-a0a1-38a25fc3df7d1647410586345-Budgetbuys_Kurtas.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ecc9c48d-bd38-4101-b96a-2d67720a4aba1647410586133-Budgetbuys_-JeansW.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/2bded8d8-b0dc-48da-a282-7c749d79cf551647410586388-Budgetbuys_LoungewearW.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/45b64eff-d2d5-4425-bb67-ad0b34d1ebaa1647410586442-Budgetbuys_Sarees.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/8500e8ef-7da8-4117-8d53-9f76f9c5475e1647410586527-Budgetbuys_Tops_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/3/25685f28-3438-4b1f-a54e-797e36b4d6b81656834575194-Budgetbuys_Bras-Briefs_.jpg"
    },
]
let bestBuysCont = document.querySelector(".best-buys");
BestBuys.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    bestBuysCont.append(img);
});

let MostLoved = [
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/e006f86a-55f4-4052-8128-3c5cccfa4a9b1657003558040-EK.jpeg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/fa443e99-fe21-445f-bbfd-a4cda1a715911657019228773-boat-tiles1.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/8953ad8b-c338-4639-b7f1-64214ec185091657024257045-W_WP-Top-Tile.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/6/3a38535f-297f-4471-a65d-c6aaa28cc9ac1657092478853-PLUM_Tiles_Sales.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/e3c5b01f-6da3-428e-8dad-3212538f72011657024257032-Ahika_WP-Top-Tile.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/a211a87f-38f6-40a4-b6e8-e26fde6c5fd81657010547004-Sassa-Top.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/6/d30dffb1-5ea7-4d7c-9023-463a93b3c9091657083800047-Navyasa_HP-Top-Tile.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/7652bea8-48a3-40a9-a5a4-978d6336fe651657008291448-fc-tiles.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/9a0434ee-8d46-4594-8fa1-16e8c9a569241657010723069-Allen_WP-Tile_July-7.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/4a3bdb5f-03e5-4862-bfe9-d28e74943e921657011012034-Caprese_WP-Tile_July-7.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/bc760de2-f874-4ff5-9bbb-92879b8322d81656995521960-H-M-tiles2.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/355b583d-301e-4d9e-92cb-b360ebc39aa71657013230064-image_jpeg_439971010.jpg"
    },
];
let mostLovedCont = document.querySelector(".most-loved");
MostLoved.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    mostLovedCont.append(img);
});

let TopBrands = [
    {
        img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/3/e31caf76-2649-4ea8-a39d-3ebc5006217e1656832965147-Vero_Moda.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/6/3998444e-8885-4290-9510-29cbd1c0c4791657087975656-unnamed---2022-07-06T114249.227.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/3/e132e58a-c705-46fb-9305-c35d9097a6141656832965118-Forever21.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/23/d461bb3b-29ba-4f7f-b715-750b87ca5b1e1648015528067-biba.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/3/a8045925-aebb-4f49-b4a1-9bd114f21f551656832965126-H-M.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/23/1723322c-0d0d-4645-94a0-ae5a7c56f91f1648015566914-pantaloons.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/6/37ee4dca-50eb-48c5-9279-a57abba482c21657088000075-unnamed--24-.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/fbc9056c-103f-4aff-a115-f735cebe34fa1647421099400-Urbanic.png"
    },
];
let topBrandsCont = document.querySelector(".top-brands");
TopBrands.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    topBrandsCont.append(img);
});

let Categories = [
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/884c9604-7421-47fa-a7f1-c228064c245e1657006998487-Women_DK_02.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/8b419089-62a7-414d-bf1f-0465f07ad1181657006998494-Women_DK_03.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/9e9fcc6d-7cd6-4ec3-9f49-4963426a14e61657006998502-Women_DK_04.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/7d38d445-11e4-4f24-b3b1-66e194cb28c01657006998509-Women_DK_05.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/f871070f-d612-4153-bb33-1dc9625650df1657006998516-Women_DK_06.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/b4ec79b7-e4ce-45fb-b2a4-234a02077ea01657006998523-Women_DK_07.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/c92aa7ee-f27c-4c39-bd30-ca6f1d09e58c1657006998530-Women_DK_08.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/ee0dbdf2-eca8-4f7c-b6c8-06a1bc489c591657006998536-Women_DK_09.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/248e5e17-268f-4c4f-bb83-7bf80856eccb1657006998544-Women_DK_10.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/b393be65-0a02-4a19-bc88-f69305da42311657006998551-Women_DK_11.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/50f5c2b3-8800-4fe8-9459-c1519c82385b1657006998558-Women_DK_12.jpg"
    },
    
    {
        img:"https://assets.myntassets.com/f_webp,w_111,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/01550745-8143-455b-894a-ca932538549e1657006998564-Women_DK_13.jpg"
    },
];
let categoriesCont = document.querySelector(".categories");
Categories.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    categoriesCont.append(img);
});