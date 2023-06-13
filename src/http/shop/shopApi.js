import { post, get } from "./index"


const pageDTO = {
    current: 1,
    size: 1000
}
//获取所有广告
const allAdv = () => {
    return post('sms-home-advertise/page', pageDTO)
}
//获取所有商品
const allProduct = () => {
    return post('pms-product/page', pageDTO)
}
//获取所有品牌
const allBrand = () => {
    return post('pms-brand/page', pageDTO)
}
//获取所有专题
const allSub = () => {
    return post('cms-subject/page', pageDTO)
}

export {
    allAdv,
    allBrand,
    allProduct,
    allSub
}