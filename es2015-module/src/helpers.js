function choice(items) {
    let randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
}


function remove(item, items) {
    for( let i = 0; i < items.length; i++){
        if(items.length[i] === item){
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}
// export default choice;
export {choice, remove}