// berilgan arrayni stringga uzgartirish
{
    const fruits = ['apple','banana','orange']
    console.log(fruits);
    // array funcsiyasida stringgauzgartirib beraigan funcsiya join()
    const result = fruits.join(' and ');
    console.log(result);
}
{
    // stringni arrayga almashtirish split()
    const fruits = 'apple, banana, orange'
    const result = fruits.split(',')
    console.log(result);
}
{
    // berilgan array ni teskariga chiqarish reserve()
    // reserve() funksyasi eski qiymatlarniham teskariga qaytaradi
    const array = [1,2,3,4,5,6]
    console.log(array)
    const result = array.reverse()
    console.log(result)
    console.log(array)
}
{
    // berilgan arrayni 3 dan boshlab chiqarish
    const array = [1,2,3,4,5]
    console.log(array)
    const result = array.slice(2)
    console.log(result)
    
}