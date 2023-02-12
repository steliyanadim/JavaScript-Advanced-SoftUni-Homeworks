function extract(content) {
    const result = []
    //content = document.getElementById(content).textContent;
    const pattern = /\(([\w|\s]{0,})\)/g
    let matches = content.match(pattern)
   
    console.log(matches.join('').split('(').join('').split(')'));
    // content = result.join('; ')
}
extract('The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).')