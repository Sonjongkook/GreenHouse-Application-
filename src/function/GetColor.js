export default async function getColor(temp){
    let color ='#f7b733'
    if (20 <= temp <= 25) {
        color= '#076585'
    } else if (tem >= 15){
        color= '#00d2ff'
    }
    return color

}
