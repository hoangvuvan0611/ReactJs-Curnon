import {initialWrapperMen} from "./ReduxData/Wrapper/initialWrapperMen"
import { initialWrapperWomen } from "./ReduxData/Wrapper/initialWrapperWomen";
import { initialCategoryCart } from "./ReduxData/Category/initialCategoryCart";
import { initialMenBestsellerProduct } from "./ReduxData/BestSeller/initialMenBestsellerProduct";
import { initialWomenBestsellerProduct } from "./ReduxData/BestSeller/initialWomenBestsellerProduct";
import { initialPartOfCurnon } from "./ReduxData/PartOfCurnon/initialPartOfCurnon";
/*WomenComponent*/
import { initialWomenComponent1 } from "./ReduxData/WomenComponent/initialWomenComponent1";
//filterTypeWomen
import { initialTypeProductsWomen } from "./ReduxData/WomenComponent/initialTypeProductsWomen";
import { initialSize } from "./ReduxData/WomenComponent/initialSize"; 
import { initialColor } from "./ReduxData/WomenComponent/initialColor";
/*MenComponent*/
import { initialMenComponent } from "./ReduxData/MenComponent/initialMenComponent";
//filterTypeMen
import { initialTypeProductsMen } from "./ReduxData/MenComponent/initialTypeProductsMen";
import { initialSizeMen } from "./ReduxData/MenComponent/initialSizeMen";
/*AccessoryComponent*/
import { initialAccessoryComponent } from "./ReduxData/AccessoryComponent/initialAccessoryComponent";
//filterTypeAccessory
import { initialTypeProductsAccessory } from "./ReduxData/AccessoryComponent/initialTypeProductsAccessory";
// import { data } from "jquery";
//cart
const initialProductsCart = [];
//một data trung gian để lưu trữ giá mặc định
const initialtemb = [];

/*Component Pay */
const initialCity = [
    {
        city: "Hải Phòng"
    },
    {
        city: "Hà Nội"
    },
    {
        city: "TP. Hồ Chí Minh"
    },
    {
        city: "Đà Nẵng"
    },
    {
        city: "Cần Thơ"
    },
    {
        city: "Quảng Ninh"
    },
    {
        city: "Đồng Nai"
    },
    {
        city: "Bình Dương"
    },
    {
        city: "Thanh Hóa"
    },
    {
        city: "Nghệ An"
    },
    {
        city: "Bắc Ninh"
    },
    {
        city: "Bắc Giang"
    },
]

/*ComponentLogin*/
const dataProductCart = [];

//AccountUser
export const accountuser = {};

const initial = {
/*MainComponent*/
    scroll: false,
    wrapper: initialWrapperMen,
    wrapperWomen: initialWrapperWomen,
    statusMenuMen: true,
    statusAccessory: false,
    statusAlbert: false,
    statusSearch: false,
    statusCart: false,
    statusContentCart: true,

    productCategory: initialCategoryCart,
    productMenbestseller: initialMenBestsellerProduct,
    productWomenbestseller: initialWomenBestsellerProduct,
    imgPartOfCurnon: initialPartOfCurnon,

/*cart*/
    //quantity_cart
    quantitycart: 0,
    statusquantitycart: false,
    //statusSaleof
    statussaleof: true, 

    //ProductsCart
    product: initialProductsCart,

/*filtersort*/
    statusSort: false,
    statusCheckSortTop: false,
    statusCheckSortCenter: false,
    statusCheckSortBottom: false,
    statusBackground: false,

/*statusBoxfilter*/
    statusSp: false,
    statusSz: false,
    statusCl: false,
    statusCld: false,
    
/*WomenComponent*/
    productsWomenTop: initialWomenComponent1,

    //filterWomen
    TypeProductsWomen: initialTypeProductsWomen,
    filterSize: initialSize,
    filterColor: initialColor,

    //statusChooseProductFilterWomen
    statusHam: false,
    statusMel: false,
    statusMor: false,
    statusSan: false,
    //statusfilterSizeWomen
    status24: false,
    status28: false,
    status32: false,
    //countProductWomen
    countProduct: {amount: 0},
    
/*MenComponent*/
    productsMen: initialMenComponent,
    //filterMen
    TypeProductsMen: initialTypeProductsMen,
    //countProductsMen
    countProductmen: {amount: 0},
    //filterTypesizeMen
    filterSizeMen: initialSizeMen,
    //statusfilterSizeMen
    status40: false,
    status42: false,
    status38: false,
    //statusChooseProductFilterMen
    statusCol: false,
    statusKas: false,
    statusWei: false,
    statusJac: false,
    statusDet: false,
    statusFut: false,
    statusWhi: false,

/*AccessoryComponent*/
    productsAccessory: initialAccessoryComponent,
    //filterAccessory
    TypeProductsAccessory: initialTypeProductsAccessory,

    //statusChooseProductFilter
    statusVtmen: false,
    statusPkmen: false,
    statusPkwomen: false,
    statusVtwomen: false,
    statusVt: false,
    statusAutu: false,
    //countProductsMen
    countProductAccessory: {amount: 0},
    //statusChooseProductFilterColor
    statusSilver: false,
    statusRosegold: false,
    statusBlack: false,
    statusWhite: false,
    statusGrey: false,

/*ComponentPay*/
    statusSetProduct: false,
    //statuscheckoutright
    statusCheckOutRight: false,


/*Componentlogin*/
    statusLogin: false,
    // initialLogin: initialLogin,
    boxUser: false,

    //dataLogin
    dataAccountLogin: localStorage.getItem('Data-Account') ? JSON.parse(localStorage.getItem("Data-Account")) : [],
    //registerAccount
    statusRegiterNlPassword: false,
    statusRegisterPassword: false,
    statusRegisterName: false,

    statuspasswordLogin: false,
    statuspassNameLogin: false,

    //biến trung gian để xét phần filter giá về giá trị mặc định
    tembAccessory: initialTypeProductsAccessory,
    tembMen: initialTypeProductsMen,
    tembWomen: initialTypeProductsWomen,

    //accountUser
    accountuser: accountuser,
    //status tài khoản đã có sẵn
    statusAlbertAccountS: false,
    //dataProductCart
    dataProductCart: dataProductCart,
    //những sản phẩm đã được mua
    dataAccountPay: [],
}

export const Reducer = (state = initial, action) =>{
    switch (action.type){
    //main
        case "toggleScroll":
            return{
                ...state,
                scroll: action.status
            }

        case "toggleSearch": 
            return{
                ...state,
                statusSearch: action.status
            }
        case "toggleMenumen": 
            return{
                ...state,
                statusMenuMen: action.status
            }
        case "toggleAccessory": 
            return{
                ...state,
                statusAccessory: action.status
            }
        case "toggleAlbert": 
            return{
                ...state,
                statusAlbert: action.status
            }

    //quantitycart
        case "quantitycart":
            let temp = {}
            if(action.quantity === 0){
                temp = false;
            }
            return{
                ...state,
                quantitycart: action.quantity,
                statusquantitycart: temp,
            }


    //cart
        case "productcart": //addtocart
            let {product} = state; 
            let products = action.item;
            let prod = product.find(item => item.id === products.id);
            if(prod){
                prod.quantity++;
            }
            else{
                products.quantity = 1;
                product.push(products)
            }
            return{
                ...state,
                product: [...product],
                statusContentCart: false,
            }
        case "deletecart":
            let productdelete = state.product.filter(item => item.id !== action.item.id)
            return{
                ...state,
                product: [...productdelete],
            }
        case "increaseproductcart":
            let cartIncrease = state.product
            let list = cartIncrease.find(x => x.id === action.item.id);
            list.quantity++;
            return{
                ...state,
                product: [...cartIncrease]
            }
        case "reduceproductcart":
            let cartReduce = state.product
            if(action.item.quantity === 1){
                cartReduce = cartReduce.filter(x => x.id !== action.item.id)
            }
            else{
                let list2 = cartReduce.find(x => x.id === action.item.id);
                list2.quantity--;
            }
            return{
                ...state,
                product: [...cartReduce],
            }
        case "togglecart":
            return{
                ...state,
                statusCart: action.status
            }
        case "togglestatuscart":
            return{
                ...state,
                statusContentCart: action.status
            }
    //Women    

        case "toggleBackground":
            return{
                ...state,
                statusBackground: action.status,
                statusSort: false,
                statusSp: false,
                statusSz: false,
                statusCl: false,
                statusCld: false,
            }
        //boxsortPrice
        case "togglesorttop":
            return{
                ...state,
                statusCheckSortTop: action.status,
                statusCheckSortCenter: !action.status,
                statusCheckSortBottom: !action.status,

            }
        case "togglesortcenter":
            return{
                ...state,
                statusCheckSortCenter: action.status,
                statusCheckSortTop: !action.status,
                statusCheckSortBottom: !action.status,
            }
        case "togglesortbottom":
            return{
                ...state,
                statusCheckSortBottom: action.status,
                statusCheckSortCenter: !action.status,
                statusCheckSortTop: !action.status,
            }
        case "togglesort":
            return{
                ...state,
                statusSort: action.status,
                statusSp: false,
                statusSz: false,
                statusCl: false,
                statusCld: false,
                statusBackground: action.status,
            }
        //statustick
        case "togglesp":
            return{
                ...state,
                statusSp: action.status,
                statusSz: false,
                statusCl: false,
                statusCld: false,
                statusSort: false,
                statusBackground: action.status,
            }
        case "togglesz":
            return{
                ...state,
                statusSz: action.status,
                statusSp: false,
                statusCl: false,
                statusCld: false,
                statusSort: false,
                statusBackground: action.status,
            }
        case "togglecl":
            return{
                ...state,
                statusCl: action.status,
                statusSz: false,
                statusSp: false,
                statusCld: false,
                statusSort: false,
                statusBackground: action.status,
            }
        case "togglecld":
            return{
                ...state,
                statusCld: action.status,
                statusCl: false,
                statusSz: false,
                statusSp: false,
                statusSort: false,
                statusBackground: action.status,
            }
        
    /*filterTypeProductsWomen*/
        case "typeproductwomen":
            let prodFilterWomen = [];
            let {TypeProductsWomen} = state;
            let {countProduct} = state;
            let {productsWomenTop} = state;
            switch(action.item){
                case "hamilton":
                case "melissani":
                case "moraine":
                case "santorini":
                    prodFilterWomen = TypeProductsWomen.filter(item => item.type === action.item);
                    break;
                default:
                    break;
            }

            countProduct.amount = prodFilterWomen.length;
            return{
                ...state,
                productsWomenTop: [...prodFilterWomen],
                tembWomen: [...prodFilterWomen]
            }
        //typeSize
        case "size":
            let {filterSize} = state;
            if(action.item === 24){
                filterSize = state.TypeProductsWomen.filter(item => item.size === action.item)
            } 
            if(action.item === 28){
                filterSize = state.TypeProductsWomen.filter(item => item.size === action.item)
            } 
            if(action.item === 32){
                filterSize = state.TypeProductsWomen.filter(item => item.size === action.item)
            } 
            state.countProduct.amount = filterSize.length;
            return{
                ...state,
                productsWomenTop: [...filterSize],
                tembWomen:  [...filterSize],
            }
        //statusChooseProductFilter
        case "toggleStatusChooseHam":
            return{
                ...state,
                statusHam: action.status,
                statusMel: !action.status,
                statusMor: !action.status,
                statusSan: !action.status,
            }
        case "toggleStatusChooseMel":
            return{
                ...state,
                statusMel: action.status,
                statusHam: !action.status,
                statusMor: !action.status,
                statusSan: !action.status,
            }
        case "toggleStatusChooseMor":
            return{
                ...state,
                statusMor: action.status,
                statusMel: !action.status,
                statusHam: !action.status,
                statusSan: !action.status,
            }
        case "toggleStatusChooseSan":
            return{
                ...state,
                statusSan: action.status,
                statusMor: !action.status,
                statusMel: !action.status,
                statusHam: !action.status,
            }
        //statusChooseSizeProductsWomen
        case "togglesize24":
            console.log(action.status)
            return{
                ...state,
                status24: action.status,
                status28: !action.status,
                status32: !action.status,
            }
        case "togglesize28":
            return{
                ...state,
                status28: action.status,
                status24: !action.status,
                status32: !action.status,
            }
        case "togglesize32":
            return{
                ...state,
                status32: action.status,
                status28: !action.status,
                status24: !action.status,
            }
        //reset
        case "toggleReset":
            state.countProduct.amount = 0;
            return{
                ...state,
                productsWomenTop: [...state.TypeProductsWomen],
                statusHam: false,
                statusMel: false,
                statusMor: false,
                statusSan: false,

                status24: false,
                status28: false,
                status32: false,

                statusCheckSortTop: false,
                statusCheckSortCenter: false,
                statusCheckSortBottom: false,
            }
        //filterColor
        case "color":
            let {filterColor} = state;
            if(action.status === "silver"){
                filterColor = state.TypeProductsWomen.filter(item => item.size === action.status)
            } 
            if(action.status === 28){
                filterColor = state.TypeProductsWomen.filter(item => item.size === action.status)
            } 
            if(action.status === 32){
                filterColor = state.TypeProductsWomen.filter(item => item.size === action.status)
            }
            return{
                ...state,
                productsWomenTop: [...filterColor]
            }
        //sortpriceWomen
        case "togglesortpriceWomen":
            let sortWomen = [];
            sortWomen = state.productsWomenTop; 
            let {tembWomen} = state;
            switch(action.status){
                case "increase":
                        for(let i = 0; i < sortWomen.length - 1; i++){
                            for(let j = i + 1; j < sortWomen.length; j++){
                                if(sortWomen[i].price >  sortWomen[j].price){
                                    [sortWomen[i], sortWomen[j]] = [sortWomen[j], sortWomen[i]] 
                                }
                            }
                        }
                        break;
                case "default":
                    sortWomen = tembWomen; 
                        break;
                case "reduce":
                    for(let i = 0; i < sortWomen.length - 1; i++){
                        for(let j = i + 1; j < sortWomen.length; j++){
                            if(sortWomen[i].price <  sortWomen[j].price){
                                [sortWomen[i], sortWomen[j]] = [sortWomen[j], sortWomen[i]]
                            }
                        }
                        
                    }
                    break;
                default: 
                    break;
            }
            return{
                ...state,
                productsWomenTop: [...sortWomen],
            }
    /*filterTypeProductsMen*/
        case "typeproductmen":
            let prodFilterMen = [];
            let {countProductmen} = state;
            let {TypeProductsMen} = state;
            switch(action.item){
                case "colosseum":
                case "kashmir":
                case "weimar":
                case "jackson":
                case "dettroit":
                case "futura":
                case "whitesands":
                    prodFilterMen = TypeProductsMen.filter(item => item.type === action.item);
                    break;
                default:
                    break;
            }
            countProductmen.amount = prodFilterMen.length;
            return{
                ...state,
                productsMen: [...prodFilterMen],
                tembMen: [...prodFilterMen],
            }
        //statusChooseProductFilter
        case "toggleStatusChooseCol":
            return{
                ...state,
                statusCol: action.status,
                statusKas: !action.status,
                statusWei: !action.status,
                statusJac: !action.status,
                statusDet: !action.status,
                statusFut: !action.status,
                statusWhi: !action.status,
            }
        case "toggleStatusChooseKas":
            return{
                ...state,
                statusKas: action.status,
                statusCol: !action.status,
                statusWei: !action.status,
                statusJac: !action.status,
                statusDet: !action.status,
                statusFut: !action.status,
                statusWhi: !action.status,
            }
        case "toggleStatusChooseWei":
            return{
                ...state,
                statusWei: action.status,
                statusKas: !action.status,
                statusCol: !action.status,
                statusJac: !action.status,
                statusDet: !action.status,
                statusFut: !action.status,
                statusWhi: !action.status,
            }
        case "toggleStatusChooseJac":
            return{
                ...state,
                statusJac: action.status,
                statusWei: !action.status,
                statusKas: !action.status,
                statusCol: !action.status,
                statusDet: !action.status,
                statusFut: !action.status,
                statusWhi: !action.status,

            }
        case "toggleStatusChooseDet":
            return{
                ...state,
                statusDet: action.status,
                statusJac: !action.status,
                statusWei: !action.status,
                statusKas: !action.status,
                statusCol: !action.status,
                statusFut: !action.status,
                statusWhi: !action.status,
            }
        case "toggleStatusChooseFut":
            return{
                ...state,
                statusFut: action.status,
                statusDet: !action.status,
                statusJac: !action.status,
                statusWei: !action.status,
                statusKas: !action.status,
                statusCol: !action.status,
                statusWhi: !action.status,
            }
        case "toggleStatusChooseWhi":
            return{
                ...state,
                statusWhi: action.status,
                statusFut: !action.status,
                statusDet: !action.status,
                statusJac: !action.status,
                statusWei: !action.status,
                statusKas: !action.status,
                statusCol: !action.status,
            }
        //statusChooseSizeProductsmen
        case "sizemen":
            let {filterSizeMen} = state;
            if(action.item === 40){
                filterSizeMen = state.TypeProductsMen.filter(item => item.size === action.item)
            } 
            if(action.item === 42){
                filterSizeMen = state.TypeProductsMen.filter(item => item.size === action.item)
            } 
            if(action.item === 38){
                filterSizeMen = state.TypeProductsMen.filter(item => item.size === action.item)
            } 
            state.countProductmen.amount = filterSizeMen.length;
            return{
                ...state,
                productsMen: [...filterSizeMen],
                tembMen: [...filterSizeMen]
            }
        case "togglesize40":
            console.log(action.status)
            return{
                ...state,
                status40: action.status,
                status42: !action.status,
                status38: !action.status,
            }
        case "togglesize42":
            return{
                ...state,
                status42: action.status,
                status40: !action.status,
                status38: !action.status,
            }
        case "togglesize38":
            return{
                ...state,
                status38: action.status,
                status42: !action.status,
                status40: !action.status,
            }
        //reset
        case "toggleResetMen":
            state.countProductmen.amount = 0;
            return{
                ...state,
                productsMen: [...state.TypeProductsMen],
                statusDet: false,
                statusJac: false,
                statusWei: false,
                statusKas: false,
                statusCol: false,
                statusFut: false,
                statusWhi: false,

                status38: false,
                status42: false,
                status40: false,

                statusCheckSortTop: false,
                statusCheckSortCenter: false,
                statusCheckSortBottom: false,
            }
        //sortPriceMen
        case "togglesortpricemen":
            let sortMen = [];
            sortMen = state.productsMen; 
            let {tembMen} = state;
            switch(action.status){
                case "increase":
                        for(let i = 0; i < sortMen.length - 1; i++){
                            for(let j = i + 1; j < sortMen.length; j++){
                                if(sortMen[i].price >  sortMen[j].price){
                                    [sortMen[i], sortMen[j]] = [sortMen[j], sortMen[i]]
                                }
                            }
                        }
                        break;
                case "default":
                    sortMen = tembMen; 
                        break;
                case "reduce":
                    for(let i = 0; i < sortMen.length - 1; i++){
                        for(let j = i + 1; j < sortMen.length; j++){
                            if(sortMen[i].price <  sortMen[j].price){
                                [sortMen[i], sortMen[j]] = [sortMen[j], sortMen[i]]
                            }
                        }
                        
                    }
                    break;
                default: 
                    break;
            }
            return{
                ...state,
                productsMen: [...sortMen]
            }
    
    /*filterTypeProductsAccessory*/
        case "typeproductaccessory":
            let prodFilterAccessory = [];
            let {countProductAccessory} = state;
            let {TypeProductsAccessory} = state;
            switch(action.item){
                case "vtnam":
                case "pknam":
                case "pknu":
                case "vtnu":
                case "vt":
                case "autumn":
                    prodFilterAccessory = TypeProductsAccessory.filter(item => item.type === action.item);
                    break;
                default:
                    break;
            }
            countProductAccessory.amount = prodFilterAccessory.length;
            return{
                ...state,
                productsAccessory: [...prodFilterAccessory],
                tembAccessory: [...prodFilterAccessory],
            }
        //statusChooseProductFilter
        case "toggleStatusChooseVtmen":
            return{
                ...state,
                statusVtmen: action.status,
                statusPkmen: !action.status,
                statusPkwomen: !action.status,
                statusVtwomen: !action.status,
                statusVt: !action.status,
                statusAutu: !action.status,
            }
        case "toggleStatusChoosePkmen":
            return{
                ...state,
                statusVtmen: !action.status,
                statusPkmen: action.status,
                statusPkwomen: !action.status,
                statusVtwomen: !action.status,
                statusVt: !action.status,
                statusAutu: !action.status,
            }
        case "toggleStatusChoosePkwomen":
            return{
                ...state,
                statusVtmen: !action.status,
                statusPkmen: !action.status,
                statusPkwomen: action.status,
                statusVtwomen: !action.status,
                statusVt: !action.status,
                statusAutu: !action.status,
            }
        case "toggleStatusChooseVtwomen":
            return{
                ...state,
                statusVtmen: !action.status,
                statusPkmen: !action.status,
                statusPkwomen: !action.status,
                statusVtwomen: action.status,
                statusVt: !action.status,
                statusAutu: !action.status,
            }
        case "toggleStatusChooseVt":
            return{
                ...state,
                statusVtmen: !action.status,
                statusPkmen: !action.status,
                statusPkwomen: !action.status,
                statusVtwomen: !action.status,
                statusVt: action.status,
                statusAutu: !action.status,
            }
        case "toggleStatusChooseAutu":
            return{
                ...state,
                statusVtmen: !action.status,
                statusPkmen: !action.status,
                statusPkwomen: !action.status,
                statusVtwomen: !action.status,
                statusVt: !action.status,
                statusAutu: action.status,
            }
        //statusChooseProductFilterColor
        case "typeproductaccessorycolor":
            let prodFilterAccessoryColor = [];
            switch(action.item){
                case "silver":
                case "rosegold":
                case "black":
                case "white":
                case "grey":
                    prodFilterAccessoryColor = state.TypeProductsAccessory.filter(item => item.color === action.item)
                    break;
                default:
                    break;
            }
            state.countProductAccessory.amount = prodFilterAccessoryColor.length;
            return{
                ...state,
                productsAccessory: [...prodFilterAccessoryColor],
                tembAccessory: [...prodFilterAccessoryColor],
            }
        case "toggleStatusChooseSilver":
            console.log("dfsdfsdf")
            return{
                ...state,
                statusSilver: action.status,
                statusRosegold: !action.status,
                statusBlack: !action.status,
                statusWhite: !action.status,
                statusGrey: !action.status,
            }
        case "toggleStatusChooseRosegold":
            console.log("dfsdfsdf")
            return{
                ...state,
                statusSilver: !action.status,
                statusRosegold: action.status,
                statusBlack: !action.status,
                statusWhite: !action.status,
                statusGrey: !action.status,
            }
        case "toggleStatusChooseBlack":
            console.log("dfsdfsdf")
            return{
                ...state,
                statusSilver: !action.status,
                statusRosegold: !action.status,
                statusBlack: action.status,
                statusWhite: !action.status,
                statusGrey: !action.status,
            }
        case "toggleStatusChooseWhite":
            console.log("dfsdfsdf")
            return{
                ...state,
                statusSilver: !action.status,
                statusRosegold: !action.status,
                statusBlack: !action.status,
                statusWhite: action.status,
                statusGrey: !action.status,
            }
        case "toggleStatusChooseGrey":
            console.log("dfsdfsdf")
            return{
                ...state,
                statusSilver: !action.status,
                statusRosegold: !action.status,
                statusBlack: !action.status,
                statusWhite: !action.status,
                statusGrey: action.status,
            }
        //sortPriceAccessory
        case "togglesortpriceaccessory":
            let sortAccessory = [];
            sortAccessory = state.productsAccessory; 
            //tạo một kho trung gian chứa các giá trị sắp xếp ban đầu
            let {tembAccessory} = state;
            switch(action.status){
                case "increase":
                        for(let i = 0; i < sortAccessory.length - 1; i++){
                            for(let j = i + 1; j < sortAccessory.length; j++){
                                if(sortAccessory[i].price >  sortAccessory[j].price){
                                    [sortAccessory[i], sortAccessory[j]] = [sortAccessory[j], sortAccessory[i]]
                                }
                            }
                        }
                        break;
                case "default":
                    sortAccessory = tembAccessory; 
                        break;
                case "reduce":
                    for(let i = 0; i < sortAccessory.length - 1; i++){
                        for(let j = i + 1; j < sortAccessory.length; j++){
                            if(sortAccessory[i].price <  sortAccessory[j].price){
                                [sortAccessory[i], sortAccessory[j]] = [sortAccessory[j], sortAccessory[i]]
                            }
                        }
                        
                    }
                    break;
                default :
                    break;
            }
            return{
                ...state,
                productsAccessory: [...sortAccessory],
            }
            
        //reset
        case "toggleResetAccessory":
            state.countProductAccessory.amount = 0;
            return{
                ...state,
                productsAccessory: [...state.TypeProductsAccessory],
                statusVtmen: false,
                statusPkmen: false,
                statusPkwomen: false,
                statusVtwomen: false,
                statusVt: false,
                statusAutu: false,

                statusSilver: false,
                statusRosegold: false,
                statusBlack: false,
                statusWhite: false,
                statusGrey: false,

                statusCheckSortTop: false,
                statusCheckSortCenter: false,
                statusCheckSortBottom: false,
            }

    /*ComponentPay*/
        case "toggleStatusSet":
            let {statusSetProduct} = state;
            console.log(statusSetProduct)
            return{
                ...state,
                statusSetProduct: action.status
            }
        //statuscheckoutright
        case "togglestatuscheckoutright":
            return{
                ...state,
                statusCheckOutRight: action.status,
            }

    /*ComponentLogin*/
        case "loginapp":
            return{
                ...state,
                statusLogin: action.status,
            }

        case "statusboxuser":
            return{
                ...state,
                boxUser: action.status,
            }
        //RegisterAccount
        case "registeraccount":
            let statusRegisterNlPassword = false;
            let statusRegisterPassword = false;
            let statusRegisterName = false;
            let {statusAlbertAccountS} = state;
            if(action.account === "success"){
                statusRegisterNlPassword = false;
                statusRegisterPassword = false;
                statusRegisterName = false;
                statusAlbertAccountS = false;
            }
            if(action.account === "mknl"){
                statusRegisterNlPassword = true;
            }
            if(action.account === "mk"){
                statusRegisterPassword = true;
            }
            if(action.account === "name"){
                statusRegisterName = true;
            }
            if(action.account === "badrequest"){
                statusAlbertAccountS = true;
            }

            return{
                ...state,
                statusRegiterNlPassword: statusRegisterNlPassword,
                statusRegisterPassword: statusRegisterPassword,
                statusRegisterName: statusRegisterName,
                statusAlbertAccountS: statusAlbertAccountS,
            }
        //Lấy tt các acount đã đăng kí
        case "AccountUser":
            console.log(action.data)
            // console.log(dataUser)
            return{
                ...state,
                dataAccountLogin: [...state.dataAccountLogin, action.data],
            }

        case "dataaccount": 
            let {statuspassNameLogin} = state;
            let {statuspasswordLogin} = state;
            let {accountuser} = state;
            let productAcountCart = [];
            let quantityCart = 0;
            if(action.data === "error"){
                statuspassNameLogin = true;
                statuspasswordLogin = true;
            }
            else{
                accountuser = action.data;
                for(let i=0; i<state.dataAccountLogin.length; i++){
                    if(state.dataAccountLogin[i].account === action.data){
                        productAcountCart = state.dataAccountLogin[i].prod;
                        quantityCart = state.dataAccountLogin[i].prod.length
                        state.dataAccountPay = state.dataAccountLogin[i].prodPay
                        console.log(state.dataAccountLogin[i].prod.length)
                    }
                }
            }
            console.log(state.dataAccountPay)
            return{
                ...state,
                statuspassNameLogin: statuspassNameLogin,
                statuspasswordLogin: statuspasswordLogin,
                accountuser: accountuser,
                product: productAcountCart,
                quantitycart: quantityCart,
            }
        //logout
        case "toggleLogOutUser":
            console.log(state.dataAccountLogin)
            // let abc = state.dataAccountLogin.filter(item => item.account == state.accountuser);
            // let abc = state.product;
            for(let i=0; i<state.dataAccountLogin.length; i++){
                if(state.dataAccountLogin[i].account === state.accountuser){
                    state.dataAccountLogin[i].prod = state.product;
                    // console.log(abc)
                }
            }
            return{
                ...state,
                statusLogin: action.status,
                // dataAccountLogin: [...state.dataAccountLogin, state.dataAccountLogin],
                product: [],
                quantitycart: 0,
                statusquantitycart: false,
            }
        //lấy lại danh sách product khi đăng nhập lại
        case "PostDataProduct":
            state.quantitycart++
            return{
                ...state,
                product: action.data
            }
        case "postProductsPay":
            console.log(state.dataAccountPay)
            // for(let i=0; i<state.dataAccountLogin.length; i++){
            //     if(state.dataAccountLogin[i].account == action.accountuser){
            //         state.dataAccountPay = state.dataAccountLogin[i].prodPay
            //     }
            // }
            console.log(action.data)
            return{
                ...state,
                product: [],
                dataAccountPay: action.data,
                statusCheckOutRight: false,
                
            }
            default: 
                return state;
        } 
    }
//StatusApp

//ScrollToTop
export const toggleScroll = status =>{
    return{
        type: 'toggleScroll',
        status: status,
    }
}

//Product_Wrapper
export const toggleSearch = status =>{
    return{
        type: 'toggleSearch',
        status: status
    }
}
export const toggleMenumen = status =>{
    return{
        type: 'toggleMenumen',
        status: status
    }
}
export const toggleAccessory = status =>{
    return{
        type: 'toggleAccessory',
        status: status
    }
}
export const toggleAlbert = status =>{
    return{
        type: 'toggleAlbert',
        status: status
    }
}
//quantity_cart
export const quantityCarts = quantity =>{
    return{
        type: 'quantitycart',
        quantity: quantity,
    }
}
//statusSaleof
export const toggleSaleof = status =>{
    return{
        type: 'togglesaleof',
        status: status
    }
}

//cart
export const productCart = item => {
    return{
        type: 'productcart',
        item: item,
    }
}
export const deleteCart = item => {
    return{
        type: 'deletecart',
        item: item,
    }
}
export const increaseProductCart = item =>{
    return{
        type: 'increaseproductcart',
        item: item,
    }
}
export const reduceProductCart = item =>{
    return{
        type: 'reduceproductcart',
        item: item,
    }
}

export const toggleCart = status => {
    return{
        type: 'togglecart',
        status: status
    }
}
export const toggleContentCart = status => {
    return{
        type: 'togglestatuscart',
        status: status
    }
}


//Women
export const toggleBackground = status => {
    return{
        type: 'toggleBackground',
        status: status
    }
}
export const toggleSp = status =>{
    return{
        type: 'togglesp',
        status: status
    }
}
export const toggleSz = status =>{
    return{
        type: 'togglesz',
        status: status
    }
}
export const toggleCl = status =>{
    return{
        type: 'togglecl',
        status: status
    }
}
export const toggleCld = status =>{
    return{
        type: 'togglecld',
        status: status
    }
}

//sortPrice
export const toggleSort = status => {
    return{
        type: 'togglesort',
        status: status
    }
}
export const toggleSortTop = status =>{
    return{
        type: 'togglesorttop',
        status: status
    }
}
export const toggleSortCenter = status =>{
    return{
        type: 'togglesortcenter',
        status: status
    }
}
export const toggleSortBottom = status =>{
    return{
        type: 'togglesortbottom',
        status: status
    }
}

/*filterTypeProductsWomen*/
export const typeProductSpWomen = item =>{
    return{
        type: 'typeproductwomen',
        item: item
    }
}
export const resetTypeProductWomen = status =>{
    return{
        type: 'reset',
        status: status
    }
}
//filterSize
export const filterSize = item =>{
    return{
        type: "size",
        item: item
    }
}
//statusChooseProductFilter
export const toggleStatusChooseHam = status =>{
    return{
        type: 'toggleStatusChooseHam',
        status: status
    }
}
export const toggleStatusChooseMel = status =>{
    return{
        type: 'toggleStatusChooseMel',
        status: status
    }
}
export const toggleStatusChooseMor = status =>{
    return{
        type: 'toggleStatusChooseMor',
        status: status
    }
}
export const toggleStatusChooseSan = status =>{
    return{
        type: 'toggleStatusChooseSan',
        status: status
    }
}
//statusChooseSizeProducts
export const togglestatusChooseSizeProducts24 = status =>{
    return{
        type: "togglesize24",
        status: status 
    }
}
export const togglestatusChooseSizeProducts28 = status =>{
    return{
        type: "togglesize28",
        status: status 
    }
}
export const togglestatusChooseSizeProducts32 = status =>{
    return{
        type: "togglesize32",
        status: status 
    }
}
//filterColor
export const filterChooseColor = status =>{
    return{
        type: "filtercolor",
        status: status
    }
}
//statusChooseColorProducts
//resetProductWomen
export const toggleResetFilterProduct = status =>{
    return{
        type: "toggleReset",
        status: status
    }
}
//sortProductWomen
export const SortProductPrice = status =>{
    return{
        type: "togglesortpriceWomen",
        status: status
    }
}

/*filterTypeProductsMen*/
export const typeProductsMen = item =>{
    return{
        type: 'typeproductmen',
        item: item
    }
}
//statusChooseProductFilter
export const toggleStatusChooseCol = status =>{
    return{
        type: 'toggleStatusChooseCol',
        status: status
    }
}
export const toggleStatusChooseKas = status =>{
    return{
        type: 'toggleStatusChooseKas',
        status: status
    }
}
export const toggleStatusChooseWei = status =>{
    return{
        type: 'toggleStatusChooseWei',
        status: status
    }
}
export const toggleStatusChooseJac = status =>{
    return{
        type: 'toggleStatusChooseJac',
        status: status
    }
}
export const toggleStatusChooseDet = status =>{
    return{
        type: 'toggleStatusChooseDet',
        status: status
    }
}
export const toggleStatusChooseFut = status =>{
    return{
        type: 'toggleStatusChooseFut',
        status: status
    }
}
export const toggleStatusChooseWhi = status =>{
    return{
        type: 'toggleStatusChooseWhi',
        status: status
    }
}
//filterSizeMen
export const filterSizeMen = item =>{
    return{
        type: "sizemen",
        item: item
    }
}
export const togglestatusChooseSizeProducts40 = status =>{
    return{
        type: "togglesize40",
        status: status 
    }
}
export const togglestatusChooseSizeProducts42 = status =>{
    return{
        type: "togglesize42",
        status: status 
    }
}
export const togglestatusChooseSizeProducts38 = status =>{
    return{
        type: "togglesize38",
        status: status 
    }
}
//resetProductMen
export const toggleResetFilterProductMen = status =>{
    return{
        type: "toggleResetMen",
        status: status
    }
}
//sortProductMen
export const SortProductPriceMen = status =>{
    return{
        type: "togglesortpricemen",
        status: status
    }
}

/*filterTypeProductsAccessory*/
export const typeProductsAccessory = item =>{
    return{
        type: 'typeproductaccessory',
        item: item
    }
}
//statusChooseProductFilter
export const toggleStatusChooseVtmen = status =>{
    return{
        type: 'toggleStatusChooseVtmen',
        status: status,
    }
}
export const toggleStatusChoosePkmen = status =>{
    return{
        type: 'toggleStatusChoosePkmen',
        status: status,
    }
}
export const toggleStatusChoosePkwomen = status =>{
    return{
        type: 'toggleStatusChoosePkwomen',
        status: status,
    }
}
export const toggleStatusChooseVtwomen = status =>{
    return{
        type: 'toggleStatusChooseVtwomen',
        status: status,
    }
}
export const toggleStatusChooseVt = status =>{
    return{
        type: 'toggleStatusChooseVt',
        status: status,
    }
}
export const toggleStatusChooseAutu = status =>{
    return{
        type: 'toggleStatusChooseAutu',
        status: status,
    }
}
//statusChooseProductFilterColor
export const typeProductAccessoryColor = item =>{
    return{
        type: 'typeproductaccessorycolor',
        item: item
    }
}
export const toggleStatusChooseSilver = status =>{
    return{
        type: 'toggleStatusChooseSilver',
        status: status,
    }
}
export const toggleStatusChooseRosegold = status =>{
    return{
        type: 'toggleStatusChooseRosegold',
        status: status,
    }
}
export const toggleStatusChooseBlack = status =>{
    return{
        type: 'toggleStatusChooseBlack',
        status: status,
    }
}
export const toggleStatusChooseWhite = status =>{
    return{
        type: 'toggleStatusChooseWhite',
        status: status,
    }
}
export const toggleStatusChooseGrey = status =>{
    return{
        type: 'toggleStatusChooseGrey',
        status: status,
    }
}
//sortProductMen
export const SortProductPriceAccessory = status =>{
    return{
        type: "togglesortpriceaccessory",
        status: status
    }
}
//reset
export const toggleResetAccessory = status =>{
    return{
        type: "toggleResetAccessory",
        status: status
    }
}


/*ComponentPay*/
export const toggleStatusSet = status =>{
    return{
        type: "toggleStatusSet",
        status: status,
    }
}
//StatusCheckOutRightBox
export const toggleStatusCheckOutRight = status =>{
    return{
        type: "togglestatuscheckoutright",
        status: status,
    }
}


//componentLogin
export const loginApp = status =>{
    return{
        type: "loginapp",
        status: status
    }
}
export const StatusBoxUser = status =>{
    return{
        type: "statusboxuser",
        status: status,
    }
}

export const DataAccount = data =>{
    return{
        type: "dataaccount",
        data: data,
    }
}
//registerAccount
export const RegisterAccount = account =>{
    return{
        type: "registeraccount",
        account: account,
    }
}
//statusRegiterPassword
export const toggleStatusRegisterPassWord = status =>{
    return{
        type: "toggleStatusRegisterPassWord",
        status: status,
    }
}

//toggleLogoutUser
export const toggleLogOutUser = status =>{
    return{
        type: "toggleLogOutUser",
        status: status,
    }
}

//AccountUser một component để lấy thông tin những user được tạo ra
export const AccountUser = data =>{
    return{
        type: "AccountUser",
        data: data,
    }
}

//lấy dữ liệu từ trên localstorage mối khi reload
export const GetListDataLogin = data =>{
    return{
        type: "GetListDataLogin",
        data: data,
    }
}

//lấy thông tin những sản phẩm của từng user
export const PostDataProduct = data =>{
    return{
        type: "PostDataProduct",
        data: data,
    }
}
//nút thanh toán trong đó lưu những sản phẩm được mua vào state prodpay và xóa các sản phẩm hiện tại ở giỏ hàng
export const postProductsPay = data =>{
    return{
        type: 'postProductsPay',
        data: data,
    }
} 