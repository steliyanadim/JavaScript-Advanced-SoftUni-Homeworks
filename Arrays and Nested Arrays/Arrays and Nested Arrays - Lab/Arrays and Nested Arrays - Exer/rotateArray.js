function rotateArray(elements, rotations) {
    for(let i = 0; i < rotations; i++){
        elements.unshift(elements.pop())
    }
    console.log(elements.join(' '));
}
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)