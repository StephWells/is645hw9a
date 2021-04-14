// Create circle module
const circle = () => {
    return{
        circumference(radius){
            return `The circumference of a circle of radius ${radius} is ${2 * Math.PI * radius}`;
        },
        area(radius){
            return `Its area is ${Math.PI * radius ** 2}`;
        }
    }
}

module.exports = circle;

