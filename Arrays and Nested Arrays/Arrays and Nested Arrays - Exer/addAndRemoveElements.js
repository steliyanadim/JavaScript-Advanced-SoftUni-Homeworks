function addAndRemoveElements(commands) {
    let number = 0;
    let result = [];

    commands.forEach(command => {
        number++;
        command === 'add' ? result.push(number) : result.pop();
    });

    result.length !== 0 ? console.log(result.join('\n')) : console.log('Empty');
}
addAndRemoveElements(['remove', 
'remove', 
'remove']
)