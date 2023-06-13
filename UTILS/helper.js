export const getDiscountPricePercentage =(originalPrice, newPrice)=>{
    const discount = originalPrice - newPrice;

    const discountPercentage = (discount/originalPrice) * 100;
    return discountPercentage.toFixed(2);
};