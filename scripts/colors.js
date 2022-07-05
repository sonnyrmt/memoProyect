// KeyWords
// ( NL ) = next line / ( TAB ) = tabulation

export const factory = i => {
    let array = i.split(' ');
    
    if(array.includes('let')) {
        const color = colorize('blue', 'let');
        const index = findIndex(array,'let');
        modifyAllIndexes(index,array,color);
    }

    if(array.includes('const')) {
        const color = colorize('blue', 'const');
        const index = findIndex(array,'const');
        modifyAllIndexes(index,array,color);
    }

    if(array.includes('=')) {
        const color = colorize('pink', '=');
        const index = findIndex(array,'=');
        modifyAllIndexes(index,array,color);
    }

    if(array.includes('=>')) {
        const color = colorize('blue', '=>');
        const index = findIndex(array,'=>');
        modifyAllIndexes(index,array,color);
    }

    if(array.includes('{')) {
        const color = colorize('yellow', '{');
        const index = findIndex(array,'{');
        modifyAllIndexes(index,array,color);
    }

    if(array.includes('}')) {
        const color = colorize('yellow', '}');
        const index = findIndex(array,'}');
        modifyAllIndexes(index,array,color);
    }

    if(array.includes('+')) {
        const color = colorize('pink', '+');
        const index = findIndex(array,'+');
        modifyAllIndexes(index,array,color);
    }

    if(array.includes('*')) {
        const color = colorize('pink', '*');
        const index = findIndex(array,'*');
        modifyAllIndexes(index,array,color);
    }

    if(array.includes('()')) {
        const color = colorize('purple', '()');
        const index = findIndex(array,'()');
        modifyAllIndexes(index,array,color);
    }
    
    if(array.includes('-')) {
        const color = colorize('pink', '-');
        const index = findIndex(array,'-');
        modifyAllIndexes(index,array,color);
    }

    if(array.includes('myFunction')) {
        const functionColor = colorize('green', 'myFunction');
        const index = findIndex(array,'myFunction');
        modifyAllIndexes(index,array,functionColor);
    }

    if(array.includes('return')) {
        const returnColor = colorize('pink', 'return');
        const index = findIndex(array,'return');
        modifyAllIndexes(index,array,returnColor);
    }

    // identation
    if(array.includes('TAB')) {
        const indent = '&nbsp;&nbsp;';
        const index = findIndex(array,'TAB');
        modifyAllIndexes(index,array,indent);
    }

    //separator
    if(array.includes('NL')) {
        const space = '<br>'
        const index = findIndex(array,'NL')
        modifyAllIndexes(index,array,space);
    }
    
    const output = array.join(' ');
    return output;
}

//colorize input
const colorize = (color, word) => {
    return `<span class="${color}">${word}</span>`;
}

//find all indexes of array
const findIndex = (arr,key) => {
    let indexes = [],
    i = -1;

    while ((i = arr.indexOf(key, i+1)) != -1){
        indexes.push(i);
    }

    return indexes;
}

// modify all indexes
const modifyAllIndexes = (indexes,arr,modifier) => {
    indexes.forEach( e => {
        arr[e] = modifier;
    });

}