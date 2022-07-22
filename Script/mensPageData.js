let UnbDeal = [
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/690c6112-6445-45ae-b0d8-56d370af72a91647420838815-Wrogn-_Single.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/b5a96633-505a-45a9-bdf3-0887250b82691647420838671-Tommy-_CK.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/9d1020fe-2aa6-4933-a033-a1f20c07885e1647420838702-UCB-_Pepe.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ff5365d3-e8bd-4627-9b44-1458bc8026fe1647420838203-M-H-_H-N.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/5539602b-21e7-44a7-8f2e-13badbf769ab1647420838376-PE_Universtity-_LP_Sport.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0fd86123-23ed-4907-b4a1-3ca5fe67a1711647420838531-Roadster-_Wrogn.png"
    },
];
let unbDealsCont = document.querySelector(".unb-deals");
UnbDeal.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    unbDealsCont.append(img);
});

let BestBuys = [
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/83cc8e06-bd37-4d41-aa5e-c52a9695de591647410586320-Budgetbuys_Innerwear.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/3c80fc77-08d4-49dd-a33b-3c985e6afc551647410586354-Budgetbuys_Kurtas_kurtasetsM.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/606a224d-d768-4cfd-9bb7-cf6cb2855b391647410586379-Budgetbuys_LoungewearM_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/4bb74445-7b79-4c14-843a-a1a28d70515e1647410586433-Budgetbuys_Sandals.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/de56f596-a7bd-4d80-998e-b6b040933ba91647410586579-Budgetbuys_T-Shirts--2.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/00c26f80-555e-475e-a9c8-ffc3be72b9811647410586218-Budgetbuys_Casual-Shirts_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/bc6a306b-e915-4e69-a2f9-652d4adb7ca01647410586328-Budgetbuys_Jeans.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/e9fa909d-6198-462f-82df-48f13bea2d061647410586279-Budgetbuys_Formal-Shirts_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/759b71a9-bcc9-4962-92dc-1687ecae96db1647410586202-Budgetbuys_Belts_Wallets_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/903fe1bb-8ccf-418b-a2ac-af422d0688521647410586499-Budgetbuys_Suits_Blazers__.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/7634d381-80ad-4928-84ae-0ba8f414d31b1647410586286-Budgetbuys_FormalShoes_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/7ea947af-0406-4b0e-b1ca-c5845f0980e81647410586079-Budgetbuys_-ActivewearMens.jpg"
    },
];
let budgetBuysCont = document.querySelector(".budget-buys");
BestBuys.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    budgetBuysCont.append(img);
});

let LovedBrands = [
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/6c1f9fd1-748a-4451-b92b-413ba5ac9ed71657011571897-Skybags_MP-Tile_July-7.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/a0196972-ced0-4058-9992-73406667e1f81657012723842-Safari_MP-Tile.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/aa753de8-33fb-4c22-8aee-a91c3d31efc21657026326755-decatlons-tile.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/fa443e99-fe21-445f-bbfd-a4cda1a715911657019228773-boat-tiles1.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/4e35d249-4a18-44a2-92bb-b15b590e58ec1657024257038-Varanga_WP-Top-Tile.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/df8765fc-4059-4d74-be54-9909fb3510941657028435243-bcpl-7th.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/6/9750559b-daaa-42d2-85c2-1abacd83cec51657080071023-image_jpeg_1964479630.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/6/72a55464-8deb-4ca5-9735-90ec62e7ad421657087634716-image_jpeg811567897.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/1bfcd359-58a4-442e-b41a-3533a15196c01657011483832-LP_HP-Tile_July-10.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/9976aa54-cc16-45d0-a7b9-408d292116211657015332849-fire-boult.jpg"
    },
];

let luvdBrandCont = document.querySelector(".loved-brands");
LovedBrands.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    luvdBrandCont.append(img);
});

let TopBrands = [
    {
        img:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/5a6f0687-3a0c-48a3-a51f-4c80e5b64da21647421099337-Louis_Philippe.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/6c4be8ce-2e24-4792-8d3b-9626a24710431647421099380-U.S._Polo_Assn..png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/b610f487-16f7-4968-9e34-cfb78fc289c51647421099316-Jack_-_Jones.png"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/23/307b8caa-7caf-4a98-a50b-dae00438a2811648015501758-levis.jpg"
    },
];
let topBrandCont = document.querySelector(".top-brands");
TopBrands.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    topBrandCont.append(img);
});

let Categories = [
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/6716c38a-8f90-4f5e-82dc-828664ed17aa1657007784261-Men_DK_02.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/79c7b711-0f3c-4846-a604-9a8ff61d66061657007784269-Men_DK_03.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/8952ad31-548f-4e03-9376-28411e954e9d1657007784275-Men_DK_04.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/735fba5c-b069-479d-8341-a0bcdce515011657007784284-Men_DK_05.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/1c76f8b2-e0e4-421b-bc10-fc3aab4418991657007784290-Men_DK_06.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/0313bb81-dfa4-483b-a2b1-38579f7d24ed1657007784297-Men_DK_07.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/42fff188-eff0-4e4f-b718-c74f300d3db91657007784303-Men_DK_08.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/476213c9-e9bd-4c79-8e8e-db8525bd30b71657007784310-Men_DK_09.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/7354b313-6d82-4ce9-aa5b-99ad609434651657007784316-Men_DK_10.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/40f5922e-57f4-4a04-82c1-61db841cfc541657007784323-Men_DK_11.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/c4695705-c6f9-4a54-bf91-71bad662ebc41657007784329-Men_DK_12.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/fa0bc535-c9a4-4358-a7c6-884e55639cde1657007784336-Men_DK_13.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/fac3ff63-3293-4f6b-89b4-d0c6cf5cdcb41657007784344-Men_DK_14.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/bea7d25a-bc8d-4c94-8e7b-63ec3e0d8bbd1657007784350-Men_DK_15.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/b41bc230-07c5-47d1-8478-c4debb6ab78e1657007784357-Men_DK_16.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/c0de9530-0a74-40f6-a081-8d9877e051d11657007784364-Men_DK_17.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/fc80437d-a915-4a02-9f97-e3f50092b0181657007784371-Men_DK_18.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/3dac3f8b-bae0-4444-bb4b-508b84325b231657007784379-Men_DK_19.jpg"
    }
];
let categoryCont = document.querySelector(".categories");
Categories.forEach((elem,index)=>{
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    categoryCont.append(img);
});